import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllAlbumsStart, createAlbumStart, createAlbumSuccess, updateAlbumSuccess, deleteAlbumSuccess } from "./Features/albumSlice";
import { v4 as uuidv4 } from 'uuid';



function App() {
  const albums = useSelector(state => state.albums.albums);
  const dispatch = useDispatch();
  const [title, setTitle] = useState({title: "", id: null});
  const [album, setAlbum] = useState({});

  useEffect(() => {
    dispatch(getAllAlbumsStart());
  },[]);
  const submitHandeler = (e) => {
    e.preventDefault();
    const trimedTitle = title.title.trim()
    if(trimedTitle !== ""){
      if(album.id){
        dispatch(updateAlbumSuccess({title: title.title, id:album.id }))
      }else{
        dispatch(createAlbumSuccess(title));
      }
    }
    setTitle({title: "", id: null});
  }
  const eidtHandler = (data) => {
      setTitle({...data, title: data.title});
      albums.map(album => album.id === data.id  && setAlbum(album));
  }
  const deleteHandler = (data) => {
    dispatch(deleteAlbumSuccess(data.id))
  }
  return (
    <div>
      <form onSubmit={submitHandeler}>
        <input name="title" type="text" value={title.title} placeholder="Enter title" onChange={(e) => setTitle({title: e.target.value, id: uuidv4() })  } />
        <button>submit</button>
      </form>
      {
        albums.map(album => (
          <div key={album.id} >
              <li>{album.title}</li>
              <button onClick={() => eidtHandler(album)} >Edit</button>
              <button onClick={() => deleteHandler(album)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
