import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchState {
    query: string;
    results: any[];
}

const initialState: SearchState = {
    query: "",
    results: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<SearchState>) => {            
            state = action.payload;
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