import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setNightMode } from "./Features/nightModeSlice";
import { getAllAlbumsStart, createAlbumStart, updateAlbumStart, deleteAlbumStart } from "./Features/albumSlice";
import { Container, Card, Button,Form,BallCon, Ball, SmallCon,Nav  } from "./AppStyle";
import { css } from '@emotion/css';

function App() {
  const albums = useSelector(state => state.albums.albums);
  const night = useSelector(state => state.nightMode.night);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState({});
  
  useEffect(() => {
    dispatch(getAllAlbumsStart());
  },[dispatch]);

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
  const color = night ? "white" : "lightslategray";
  const hoverColor = night ? "black" : "white";
  return (
    <Container night={night}>
      <SmallCon>
        <Nav night={night} >
          <h1
            className={css`
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            text-decoration: underline;
            color: ${color};
            &:hover {
              color: ${hoverColor};
            }
          `}>Album List</h1>
          <BallCon onClick={() => dispatch(setNightMode(!night))}>
            <Ball night={night}></Ball>
          </BallCon>
        </Nav>
          <Form night={night}  onSubmit={submitHandeler}>
            <input name="title" type="text" value={title} placeholder="Enter title" onChange={(e) => setTitle(e.target.value)  } />
            <Button submit>submit</Button>
          </Form>
        {
          albums.map((album, index) => (
            <Card night={night} key={index} >
                <li>{index + 1} - {album.title}</li>
                <div>
                  <Button onClick={() => eidtHandler(album)} edit >Edit</Button>
                  <Button onClick={() => dispatch(deleteAlbumStart(album.id))} delete>Delete</Button>
                </div>
            </Card>
          ))
        }
      </SmallCon>
    </Container>
  );
}

export default App;
