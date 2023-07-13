import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DialogState {
    isOpen: boolean,
    data: any[]
}

const initialState: DialogState = {
    isOpen: false,
    data: []
}

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        setDialog: (state, action: PayloadAction<DialogState>) => {
            state.isOpen = action.payload.isOpen;
            state.data = action.payload.data;
        }
    }
});

export const { setDialog } = dialogSlice.actions;

export default dialogSlice.reducer;