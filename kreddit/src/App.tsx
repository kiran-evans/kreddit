import { Search, Shuffle } from '@mui/icons-material';
import './App.scss';
import { PostCard } from './components/PostCard';

function App() {

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
                <PostCard title='Took this photo' img='' author='random-photographer256' date={new Date} upvotes={27} />
                <PostCard title='Took this photo' img='' author='random-photographer256' date={new Date} upvotes={27} />
                <PostCard title='Took this photo' img='' author='random-photographer256' date={new Date} upvotes={27} />
                <PostCard title='Took this photo' img='' author='random-photographer256' date={new Date} upvotes={27} />
            </main>
        </>
    )
}

export default App
