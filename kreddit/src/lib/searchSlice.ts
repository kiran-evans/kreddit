import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const SearchSort: any = {
    'relevance': "Relevance",
    'hot': "Hot",
    'top': "Top",
    'new': "New"
}

export const SearchTime: any = {
    'all': "All Time",
    'year': "Past Year",
    'month': "Past Month",
    'week': "Past Week",
    'day': "Past Day",
    'hour': "Past Hour"
}

export interface SearchQuery {
    q: string;
    sort: string;
    t: string;
}

interface SearchState {
    query: SearchQuery;
    results: any[];
}

const initialState: SearchState = {
    query: {
        q: "",
        sort: 'relevance',
        t: 'week'
    },
    results: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<SearchQuery>) => {
            state.query = action.payload;
        },
        setResults: (state, action: PayloadAction<any[]>) => {
            state.results = action.payload;
        }
    }
});

export const { setQuery, setResults } = searchSlice.actions;

export default searchSlice.reducer;