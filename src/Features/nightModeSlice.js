import { createSlice } from "@reduxjs/toolkit";

const nightModeSlice = createSlice({
    name: "night",
    initialState:{
        night: false
    },
    reducers: {
        setNightMode: (state, action) => {
            state.night = action.payload;
        }
    }
});

export const { setNightMode } = nightModeSlice.actions;
export default nightModeSlice.reducer;