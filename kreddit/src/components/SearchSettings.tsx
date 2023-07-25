import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { SearchSort, SearchTime, setQuery } from "../lib/searchSlice";

export const SearchSettings = () => {

    const dispatch = useAppDispatch();
    const search = useAppSelector((state) => state.search);

    return (
        <div id="searchOptionsContainer" data-testid="searchSettings">
            <select value={search.query.sort}>
                {Object.keys(SearchSort).map(t => (
                    <option onClick={() => dispatch(setQuery({...search.query, sort: t}))} value={t}>{SearchSort[t]}</option>
                ))}
            </select>
            <select value={search.query.t}>
                {Object.keys(SearchTime).map(t => (
                    <option onClick={() => dispatch(setQuery({...search.query, t: t}))} value={t}>{SearchTime[t]}</option>
                ))}
            </select>
        </div>
    )
}