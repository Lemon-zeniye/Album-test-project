import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
    name: "album",
    initialState: {
        isLoading: false,
        albums: [],
        album: {},
        error: null
    },
    reducers: {
        //getallAlbums
        getAllAlbumsStart: (state) => {
            state.isLoading = true
        },
        getAllAlbumsSuccess: (state, action) => {
            state.isLoading = false;
            state.albums = action.payload
        },
        getAllAlbumsFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        //getSingleAlbum
        getSingleAlbumStart: (state) => {
            state.isLoading = true
        },
        getSingleAlbumSuccess: (state, action) => {
            state.isLoading = false;
            state.album = action.payload
        },
        getSingleAlbumFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        //createAlbum
        createAlbumStart: (state) => {
            state.isLoading = true;
        },
        createAlbumSuccess: (state, action) => {
            state.isLoading = false;
            state.albums = [action.payload, ...state.albums ]
        },
        createAlbumFail: (state, action) => {
            state.state = false;
            state.error = action.error
        },
        //updatingAlbum
        updateAlbumStart: (state) => {
            state.isLoading = true;
        },
        updateAlbumSuccess: (state, action) => {
            state.isLoading = false;
            state.albums = state.albums.map(album => album.id === action.payload.id ? action.payload : album)
        },
        updateAlbumFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        //deleteAlbum
        deleteAlbumStart : (state) => {
            state.isLoading = true;
        },
        deleteAlbumSuccess: (state, action) => {
            state.isLoading = false;
            state.albums = state.albums.filter(album => album.id !== action.payload)
        },
        deleteAlbumFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { getAllAlbumsStart, getAllAlbumsSuccess, getAllAlbumsFail, createAlbumStart, createAlbumSuccess, createAlbumFail, updateAlbumStart, updateAlbumSuccess, updateAlbumFail, deleteAlbumStart, deleteAlbumSuccess, deleteAlbumFail, getSingleAlbumStart, getSingleAlbumSuccess, getSingleAlbumFail } = albumSlice.actions;
export default albumSlice.reducer;