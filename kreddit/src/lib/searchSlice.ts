import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const SearchType: any = {
    'link': "Posts",
    'comment': "Comments"
}

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
    type: string;
    sort: string;
    t: string;
}

interface SearchState {
    query: SearchQuery;
    results: any[];
    isFetching?: boolean;
}

const initialState: SearchState = {
    query: {
        q: "",
        type: "link",
        sort: 'relevance',
        t: 'week'
    },
    results: [],
    isFetching: false
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
            state.isFetching = false;
        },
        startFetch: (state) => {
            state.isFetching = true;
        },
        endFetch: (state) => {
            state.isFetching = false;
        }
    }
});

export const { setQuery, setResults, startFetch, endFetch } = searchSlice.actions;

export default searchSlice.reducer;