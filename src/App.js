import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllAlbumsStart, createAlbumStart, updateAlbumStart, deleteAlbumStart } from "./Features/albumSlice";

function App() {
  const albums = useSelector(state => state.albums.albums);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState({});
  
  useEffect(() => {
    dispatch(getAllAlbumsStart());
  },[]);

  const submitHandeler = (e) => {
    e.preventDefault();
    const trimedTitle = title.trim();
    if(trimedTitle !== ""){
      if(album.id){
        dispatch(updateAlbumStart({...album,title: title}))
      }else{
        dispatch(createAlbumStart({title: title}));
      }
    }
    setTitle("");
  }

  const eidtHandler = (data) => {
    setTitle(data.title);
    const album = albums.find(album => album.id === data.id);
    setAlbum(album);
  }
  
  return (
    <div>
      <form onSubmit={submitHandeler}>
        <input name="title" type="text" value={title} placeholder="Enter title" onChange={(e) => setTitle(e.target.value)  } />
        <button>submit</button>
      </form>
      {
        albums.map(album => (
          <div key={album.id} >
              <li>{album.id} {album.title}</li>
              <button onClick={() => eidtHandler(album)} >Edit</button>
              <button onClick={() => dispatch(deleteAlbumStart(album.id))}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
