/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Search, Shuffle } from '@mui/icons-material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { PostCard } from './components/PostCard';
import { useAppSelector } from './lib/hooks';
import { setResults } from './lib/resultsSlice';

function App() {
    const results = useAppSelector((state) => state.results.value);
    const dispatch = useDispatch();    

    // Get initial results from r/popular
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://www.reddit.com/r/popular.json', {
                    method: 'GET'
                });
                const { data } = await res.json();
                dispatch(setResults(data.children));
                
            } catch (err: any) {
                console.error(err);
                return;
            }
        })();
    }, []);

    return (
        <>
            <header>
                <h1>kreddit</h1>

                <div id="searchContainer">
                    <span>
                        <Search />
                    </span>
                    <input id="search" type="search" />
                </div>

                <button id="random">
                    <Shuffle />
                </button>
            </header>

            <main>
                {results.map((r: any) => (
                    <PostCard key={r.data.id} data={r.data} />
                ))}
            </main>
        </>
    )
}

export default App
