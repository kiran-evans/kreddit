import { Search } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { FormEvent, useEffect } from 'react';
import './App.scss';
import { Dialog } from './components/Dialog';
import { PostCard } from './components/PostCard';
import { SearchSettings } from './components/SearchSettings';
import { useAppDispatch, useAppSelector } from './lib/hooks';
import { endFetch, setQuery, setResults, startFetch } from './lib/searchSlice';

function App() {
    const search = useAppSelector((state) => state.search);
    const dispatch = useAppDispatch();

    // Get initial search from r/popular
    useEffect(() => {
        (async () => {
            dispatch(startFetch());
            try {
                const res = await fetch('https://www.reddit.com/r/popular.json', {
                    method: 'GET'
                });
                const { data } = await res.json();
                dispatch(setResults(data.children));
                
            } catch (err: any) {
                console.error(err);
            }
            dispatch(endFetch())
        })();
    }, []);

    const performSearch = async () => {
        try {
            // If no search term is in the box, return early as this will produce no results
            if (!search.query.q) return;

            const query = `https://www.reddit.com/search.json?q=${search.query.q}&sort=${search.query.sort}&t=${search.query.t}`;
            console.log(query);
            
            const res = await fetch(encodeURI(query), {
                method: 'GET'
            });
            const { data } = await res.json();
            dispatch(setResults(data.children));
            
        } catch (err: any) {
            console.error(err);
        }
    }

    // Search again whenever the options are changed
    useEffect(() => {
        (async () => {
            await performSearch();
        })();
    }, [search.query.sort, search.query.t]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await performSearch();
    }

    return (
        <>
            <header>
                <h1>kreddit</h1>

                <div id="searchContainer">
                    <span id="searchIcon">
                        <Search />
                    </span>
                    <form onSubmit={e => handleSubmit(e)}>
                        <input id="search" type="search" placeholder='Search...' onChange={e => dispatch(setQuery({...search.query, q: e.target.value}))} value={search.query.q} />
                    </form>
                    {(search.query.q && search.isFetching) && 
                        <span id="loadingSpinner">
                            <CircularProgress size={"1.5em"} sx={{color: "white"}} />
                        </span>
                    }
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
