import styled from "styled-components";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlbumStart } from "../Features/albumSlice";
import { useNavigate } from "react-router-dom";

const Card = ({album, setIsPlaying}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const night = useSelector(state => state.nightMode.night)
    const style = {"zIndex": "15", "fontSize": "3rem", "color": "white", "position": "absolute", "cursor": "pointer"}
    const  style1  = {"zIndex": "15",   "color": "white", "position": "absolute", "bottom": ".3rem", "right": ".3rem", "cursor": "pointer" };
    const style2 = {"zIndex": "15",   "color": "white", "position": "absolute", "bottom": ".3rem", "left": ".3rem" , "cursor": "pointer"};
  return (
    <Container night={night}>
        <ImageCon>
            <img src={album.image} alt={album.title} />
            <div>
                <BsPlayFill onClick={() => setIsPlaying(album)} style={style} />
                <BiEditAlt onClick={() => navigate(`/edit/${album.id}`)} style={style1} />
                <MdDeleteOutline onClick={() => dispatch(deleteAlbumStart(album.id))} style={style2} />
            </div>
        </ImageCon>
        <p className="title" >{album.title}</p>
        <p className="artist" >{album.artist}</p>
    </Container>
  )
}
export default Card;

const Container = styled.div`
    margin-right: 1rem;
    p{
        font-size: small;
        font-family: 'Poppins', sans-serif; 
    }
    p.title{
        font-weight: bold;
    }
    p.artist{
      color: ${({night}) => night ? "lightgray" : "#3d3d3d"}
    }
`


const ImageCon = styled.div`
    position: relative;
    width: 10rem;
    height: 10rem;
    border-radius: .5rem;
    div{
        display: none;
    }
    div.btn-con{
        display: flex;
        width: 10rem;
        color: white;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
    }
    &:hover{
        div{
            display: block;
        }
    }
    img{
        width: 10rem;
        height: 10rem;
        border-radius: .5rem;
        position: absolute;
        object-fit: cover;
        top: 0;
    }
`