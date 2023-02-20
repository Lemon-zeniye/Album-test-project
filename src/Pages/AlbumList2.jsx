import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { getAllAlbumsStart, deleteAlbumStart } from "../Features/albumSlice";
import { BsFillPlayFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AlbumList2 = () => {
    const albums = useSelector(state => state.albums.albums);
    const night = useSelector(state => state.nightMode.night);
    const [isPlaying, setIsPlaying] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getAllAlbumsStart());
    },[dispatch])
  return (
    <Con night={night}>
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
        <Table>
            <tbody>
            <TR night={night} className="tabelHeader">
                <th>Song</th>
                <th>Artist</th>
                <th className="album">Album</th>
                <th>Time</th>
                <th></th>
            </TR>
            {
                albums.map(album => (
                    <TR night={night} key={album.id} >
                        <td>
                            <div>
                                <img src={album.image} alt="name" />
                                <span>
                                    <BsFillPlayFill style={{"fontSize": "2rem", "color": "white"}} onClick={() => setIsPlaying(album)}  />
                                </span>
                                <div>
                                    <h4>{album.title}</h4>
                                    <p>{album.artist}</p>
                                </div>
                            </div>
                        </td>
                        <td>{album.artist}</td>
                        <td className="album">{album.album ? album.album : "Endless Summer Vacation" }  </td>
                        <td>3:12</td>
                        <td className="threeDot" ><BsThreeDotsVertical />
                            <div>
                                <TiEdit onClick={() => navigate(`/edit/${album.id}`)} />
                                <MdDeleteOutline onClick={() => dispatch(deleteAlbumStart(album.id))} />
                            </div>
                        </td>
                    </TR>
                ))
            }
            </tbody>
        </Table>
    </Con>
  )
}
export default AlbumList2;

const Con = styled.div`
    padding: 1rem;
    padding-bottom: 1rem;
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
`

const Table = styled.table`
    margin-top: 1rem;
    tr.tabelHeader{
        position: sticky;
        top: 3rem;
        z-index: 50;
    }
    width: 100%;
    font-family: 'Poppins', sans-serif; 
    border-collapse: collapse;
    font-size: small;
    td, th{
        text-align: left;
        padding: 6px;
    }
    

`
const TR = styled.tr`
    td{
        text-align: left;
        padding: 6px;
        div{
            display: flex;
            align-items: center;
            position: relative;
            img{
                width: 2.3rem;
                height: 2.3rem;
                object-fit: cover;
                border-radius: .3rem;
            }
            span{
                position: absolute;
                padding-top: .3rem;
                padding-left: .1rem;
                top: 0;
                width: 2.3rem;
                height: 2.3rem;
                bottom: 0;
                display: none;
            }
            div{
                display: block;
                margin-left: .5rem;
                p{
                    display: none;
                    @media(max-width: 900px){
                        display: block;
                    }
                }
            } 
        }
        &:hover{
            div{
                span{
                    display: inline;
                }
            }
        }
        
    }
    td:nth-child(2), th:nth-child(2){
        @media(max-width: 900px){
            display: none;
        }
    }
    td:nth-child(3), th:nth-child(3){
        @media(max-width: 600px){
            display: none;
        }
    }
    td:first-child{
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
    }
    td:last-child{
        border-top-right-radius: .5rem;
        border-bottom-right-radius: .5rem;
        position: relative;
        div{
            font-size: 1.3rem;
            position: absolute;
            width: 8rem;
            height: 2rem;
            background-color: #602b2b;
            border-radius: .3rem;
            right: 50%;
            top: 0;
            display: none;
            color: lightgray;
            align-items: center;
            justify-content: space-around;
        }
        &:hover{
            div{
                display: flex;
            }
        }
    }
    &:nth-child(even){
        background-color: ${({night}) => night ? "#313131" : "#eaeaea;"};
    }
    &:hover{
        background-color: #838383;
        cursor: pointer;
    }
`