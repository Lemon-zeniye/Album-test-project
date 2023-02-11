import { put, call, takeEvery } from "redux-saga/effects";
import { getAllAlbumsStart, getAllAlbumsSuccess,getAllAlbumsFail, createAlbumStart, createAlbumSuccess, createAlbumFail, updateAlbumSuccess, updateAlbumFail, deleteAlbumSuccess, deleteAlbumFail, updateAlbumStart, deleteAlbumStart } from "../Features/albumSlice";
import { getAlbums, createAlbum, updateAlbum, deleteAlbum } from "../api/api";


function* getAlbumSaga(){
    try{
        const data = yield getAlbums();
        yield put(getAllAlbumsSuccess(data.data));
    }catch(error){
        yield getAllAlbumsFail(error.message)
    }
}

function* createAlbumSaga(){
    try{
        const data = yield createAlbum();
        yield put(createAlbumSuccess(data))  
    }catch(error){
        yield put(createAlbumFail(error))
    }
}

function* updateAlbumSaga(){
    try{
        const data = yield updateAlbum();
        yield put(updateAlbumSuccess(data))
    }catch(error){
        yield put(updateAlbumFail(error))
    }
}

function* deleteAlbumSaga(){
    try{
        const data = yield deleteAlbum();
        yield put(deleteAlbumSuccess(data))
    }catch(error){
        yield put(deleteAlbumFail(error))
    }
}


function* albumSaga(){
    yield takeEvery(getAllAlbumsStart, getAlbumSaga);
    yield takeEvery(createAlbumStart, createAlbumSaga);
    yield takeEvery(updateAlbumStart, updateAlbumSaga);
    yield takeEvery(deleteAlbumStart, deleteAlbumSaga);
}

export default albumSaga;