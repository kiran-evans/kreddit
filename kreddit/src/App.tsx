import { Search, Shuffle } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.scss';
import { Dialog } from './components/Dialog';
import { PostCard } from './components/PostCard';
import { setDialog } from './lib/dialogSlice';
import { useAppDispatch, useAppSelector } from './lib/hooks';
import { setResults } from './lib/searchSlice';

function App() {
    const search = useAppSelector((state) => state.search);
    const dialog = useAppSelector((state) => state.dialog);
    const dispatch = useAppDispatch();

    // Get initial search from r/popular
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

                <button id="random" onClick={() => dispatch(setDialog({ isOpen: true, data: []}))}>
                    <Shuffle />
                </button>
            </header>

            <main>
                <section id="posts">
                    {search.results.map((r: any) => (
                        <PostCard key={r.data.id} data={r.data} />
                    ))}
                </section>

                <Dialog />
            </main>
        </>
    )
}

export default App
