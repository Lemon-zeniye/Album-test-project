import { createSlice } from "@reduxjs/toolkit";

const alignSlice = createSlice({
    name: "align",
    initialState: {
        align: true
    },
    reducers: {
        setAlign: (state, action) => {
            state.align = action.payload;
        }
    }
});

export const { setAlign } = alignSlice.actions;
export default alignSlice.reducer;