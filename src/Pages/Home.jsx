import { useSelector } from "react-redux"
import AlbumList from "./AlbumList";
import AlbumList2 from "./AlbumList2";
import styled from "styled-components";
const Home = () => {
  const align = useSelector(state => state.alignMode.align);
  const night = useSelector(state => state.nightMode.night);
  return (
    <Container night={night}>
      {
        align ? <AlbumList /> : <AlbumList2 />
      }
      
    </Container>
  )
}
const Container = styled.div`
  background-color: ${({night}) => night ? "#252323" : "white"};
  color:  ${({night}) => night ? "white" : "black"};;
`

export default Home