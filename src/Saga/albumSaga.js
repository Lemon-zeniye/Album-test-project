import { put, takeEvery } from "redux-saga/effects";
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

function* createAlbumSaga({payload}){
    try{
        const data = yield createAlbum(payload);
        yield put(createAlbumSuccess(data.data))  
    }catch(error){
        yield put(createAlbumFail(error))
    }
}

function* updateAlbumSaga({ payload }){
    try{
        const data = yield updateAlbum(payload);
        console.log(data)
        yield put(updateAlbumSuccess(data.data))
    }catch(error){
        yield put(updateAlbumFail(error))
    }
}

function* deleteAlbumSaga({payload}){
    try{
        yield deleteAlbum(payload);
        yield put(deleteAlbumSuccess(payload))
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