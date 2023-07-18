import { SearchSort, SearchTime, SearchType } from "../lib/searchSlice"

export const SearchSettings = () => {
    return (                
        <div id="searchOptionsContainer">
            <select>
                {Object.values(SearchType).filter(v => typeof v === 'string').map(t => (
                    <option>{t}</option>
                ))}
            </select>
            <select>
                {Object.values(SearchSort).filter(v => typeof v === 'string').map(t => (
                    <option>{t}</option>
                ))}
            </select>
            <select>
                {Object.values(SearchTime).filter(v => typeof v === 'string').map(t => (
                    <option>{t}</option>
                ))}
            </select>
        </div>
    )
}