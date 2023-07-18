import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum SearchType {
    'link',
    'comment',
    'sr',
    'user'
}

export enum SearchSort {
    'relevance',
    'hot',
    'top',
    'new'
}

export enum SearchTime {
    'all',
    'year',
    'month',
    'week',
    'day',
    'hour'
}

export interface SearchOptions {
    type: SearchType;
    sort: SearchSort;
    t: SearchTime;
}

interface SearchState {
    query: string;
    options: SearchOptions;
    results: any[];
}

const initialState: SearchState = {
    query: "",
    options: {
        type: SearchType.link,
        sort: SearchSort.relevance,
        t: SearchTime.week
    },
    results: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<SearchState>) => {            
            state = { ...action.payload };
        },
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        setResults: (state, action: PayloadAction<any[]>) => {
            state.results = action.payload;
        }
    }
});

export const { setSearch, setQuery, setResults } = searchSlice.actions;

export default searchSlice.reducer;