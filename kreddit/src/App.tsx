import { Search } from '@mui/icons-material';
import { FormEvent, useEffect } from 'react';
import './App.scss';
import { Dialog } from './components/Dialog';
import { PostCard } from './components/PostCard';
import { SearchSettings } from './components/SearchSettings';
import { useAppDispatch, useAppSelector } from './lib/hooks';
import { setQuery, setResults } from './lib/searchSlice';

function App() {
    const search = useAppSelector((state) => state.search);
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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();        
        try {
            const res = await fetch(encodeURI(`https://www.reddit.com/search.json?q=${search.query}`), {
                method: 'GET'
            });
            const { data } = await res.json();
            dispatch(setResults(data.children));
            
        } catch (err: any) {
            console.error(err);
            return;
        }
    }

    return (
        <>
            <header>
                <h1>kreddit</h1>

                <div id="searchContainer">
                    <span>
                        <Search />
                    </span>
                    <form onSubmit={e => handleSubmit(e)}>
                        <input id="search" type="search" placeholder='Search...' onChange={e => dispatch(setQuery(e.target.value))} value={search.query} />
                    </form>
                </div>

                <SearchSettings />
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
