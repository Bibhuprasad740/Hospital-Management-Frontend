import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    patients: [],
    isChanged: false,
}

const patientsSlice = createSlice({
    name: 'patients',
    initialState: initialState,
    reducers: {
        setPatients (state, action) {
            state.patients = action.payload;
        },
        setIsLoading (state, action) {
            state.isLoading = action.payload;
        },
        setIsChanged (state, action) {
            state.isChanged = !state.isChanged;
        }
    }
})

export const patientsActions = patientsSlice.actions;

export default patientsSlice;