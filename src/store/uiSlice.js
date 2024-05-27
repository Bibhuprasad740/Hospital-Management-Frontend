import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    filter: '6'
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;