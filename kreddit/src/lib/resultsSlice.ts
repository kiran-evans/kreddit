import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ResultsState {
    value: any[]
}

const initialState: ResultsState = {
    value: []
}

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setResults: (state, action: PayloadAction<any[]>) => {            
            state.value = action.payload
        }
    }
});

export const { setResults } = resultsSlice.actions;

export default resultsSlice.reducer;