import { Search, Shuffle } from '@mui/icons-material';
import './App.scss';

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

            </main>
        </>
    )
}

export default App
