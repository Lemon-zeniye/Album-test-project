import { configureStore } from "@reduxjs/toolkit";
import { albumSlice } from "./Features/albumSlice"

const store = configureStore({
    reducer: {
        albums: albumSlice
    }
});

export default store;