import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllAlbumsStart } from "./Features/albumSlice";



function App() {
  const albums = useSelector(state => state.albums.albums);
  const dispatch = useDispatch();
  console.log(albums)

  useEffect(() => {
    dispatch(getAllAlbumsStart());
  },[])
  return (
    <div>
      
    </div>
  );
}

export default App;
