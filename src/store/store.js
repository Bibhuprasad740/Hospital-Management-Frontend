import { configureStore } from "@reduxjs/toolkit";
import uiSlice from './uiSlice'
import patientsSlice from "./patientsSlice";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        patients: patientsSlice.reducer,
    }
})