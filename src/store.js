import { configureStore } from "@reduxjs/toolkit";
import  albumSlice  from "./Features/albumSlice";
import nightModeSlice from "./Features/nightModeSlice";
import createSagaMiddleware from "redux-saga";
import albumSaga from "./Saga/albumSaga";
import alignSlice from "./Features/alignmentSlice";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        albums: albumSlice,
        nightMode: nightModeSlice,
        alignMode: alignSlice
    },
    middleware: [saga]
});

saga.run(albumSaga);

export default store;