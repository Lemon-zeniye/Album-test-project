import { call, put, takeEvery } from "redux-saga/effects";
import { getAllAlbumsStart, getAllAlbumsSuccess,getAllAlbumsFail, createAlbumStart, createAlbumSuccess, createAlbumFail, updateAlbumSuccess, updateAlbumFail, deleteAlbumSuccess, deleteAlbumFail, updateAlbumStart, deleteAlbumStart, getSingleAlbumStart, getSingleAlbumSuccess, getSingleAlbumFail } from "../Features/albumSlice";
import { collection, addDoc ,updateDoc , doc, getDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function* getAlbumSaga(){
      try{
        const docRef = yield call(getDocs, collection(db, 'Albums'));
        const albums = docRef.docs.map(doc => ({...doc.data(), id: doc.id}));
        yield put(getAllAlbumsSuccess(albums));
    }catch(error){
        yield getAllAlbumsFail(error.message)
    }
}
function* getSingleAlbum({payload}){
    try{
        const docRef = doc(db, 'Albums', payload);
        const docSnap = yield call(getDoc, docRef);
        const album = yield docSnap.data();
        yield put(getSingleAlbumSuccess(album))
    }catch(error){
        yield getSingleAlbumFail(error.massage)
    }
}

function* createAlbumSaga({payload}){
    try{
        const docRef =  collection(db, "Albums");
        yield call(addDoc, docRef, payload);
        yield put(createAlbumSuccess(payload))
    }catch(error){
        yield put(createAlbumFail(error.message))
    }
}
 

function* updateAlbumSaga({ payload }){
    try{
        const albumRef =  doc(db, "Albums", payload.id);
        yield call(updateDoc, albumRef, payload)
        yield put(updateAlbumSuccess(payload))
    }catch(error){
        yield put(updateAlbumFail(error))
    }
}

function* deleteAlbumSaga({payload}){
    try{
        const albumRef = doc(db, 'Albums', payload);
        yield call(deleteDoc, albumRef)
        yield put(deleteAlbumSuccess(payload))
    }catch(error){
        yield put(deleteAlbumFail(error))
    }
}


function* albumSaga(){
    yield takeEvery(getAllAlbumsStart, getAlbumSaga);
    yield takeEvery(getSingleAlbumStart, getSingleAlbum);
    yield takeEvery(createAlbumStart, createAlbumSaga);
    yield takeEvery(updateAlbumStart, updateAlbumSaga);
    yield takeEvery(deleteAlbumStart, deleteAlbumSaga);
}

export default albumSaga;