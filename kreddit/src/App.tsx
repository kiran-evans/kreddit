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
                <PostCard title='Took this photo' img='https://www.wallpapers13.com/wp-content/uploads/2015/12/Nature-Lake-Bled.-Desktop-background-image-840x525.jpg' author='random-photographer256' date={new Date} upvotes={27} />
                <PostCard title='Saw the galaxy through my telescope so thought Id take a pic' img='https://www.chandra.harvard.edu/photo/2010/m31/m31_optical.jpg' author='random-photographer256' date={new Date} upvotes={27} />
                <PostCard title='Bird lights' img='https://www.wired.com/wp-content/uploads/images_blogs/wiredscience/2012/12/birdlights.jpg' author='random-photographer256' date={new Date} upvotes={27} />
                <PostCard title='Sunflower' img='http://fullhdwall.com/wp-content/uploads/2020/01/Beautiful-Sunflower.jpg' author='random-photographer256' date={new Date} upvotes={27} />
                <PostCard title='The World of Eirador' img='https://world-guild.com/wp-content/uploads/2021/03/image.png' author='random-photographer256' date={new Date} upvotes={27} />
            </main>
        </>
    )
}

export default App
