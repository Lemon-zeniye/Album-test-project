import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAlbumsStart } from "../Features/albumSlice";
import Card from '../components/Card';
import AudioPlayer from 'react-h5-audio-player';

const AlbumList = () => {
  const albums = useSelector(state => state.albums.albums);
  const [isPlaying, setIsPlaying] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAlbumsStart());
  },[dispatch]);
  return (
    <Container>
      {
          isPlaying && 
          <div className="isPlaying">
              <img src={isPlaying.image} alt={isPlaying.title} />
              <div>
                <p className="title" >{isPlaying.title}</p>
                <p>{isPlaying.artist}</p>
                <AudioPlayer src={isPlaying.audio} autoPlay={true} style={{"backgroundColor": "#e5e5e5", "borderRadius": ".5rem"}} />
              </div>
          </div>
        }
      <h1>New Relised</h1>
      <SmallCon>
          {
            albums?.map(album => (
              <Card key={album.id} setIsPlaying={setIsPlaying} album={album} />
            ))
          }
      </SmallCon>
      <h1>Hip Hop</h1>
      <SmallCon>
          {
            albums?.map(album => (
              <Card key={album.id} setIsPlaying={setIsPlaying} album={album} />
            ))
          }
      </SmallCon>
      <h1>Clasics</h1>
      <SmallCon>
          {
            albums?.map(album => (
              <Card key={album.id} setIsPlaying={setIsPlaying} album={album} />
            ))
          }
      </SmallCon>
    </Container>
  )
}
export default AlbumList;

const Container = styled.div`
  padding: .5rem;
  div.isPlaying{
        display: flex;
        img{
                width: 10rem;
                height: 10rem;
                object-fit: cover;
                border-radius: 1rem;
                flex: none;
                margin-right: 1rem;
                @media(max-width: 800px){
                    display: none;
                }
            }
        div{
            flex: auto;
            p{
                font-family: 'Poppins', sans-serif; 
                margin-bottom: .5rem;
            }
            p.title{
                font-weight: bold;
            }
        }
    }
    h1{
    font-family: 'Kanit', sans-serif;
  }
`

const SmallCon = styled.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`