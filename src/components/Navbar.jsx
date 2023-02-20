import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineMenu } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setAlign } from "../Features/alignmentSlice";
import { setNightMode } from "../Features/nightModeSlice";
const Navbar = () => {
    const align = useSelector(state => state.alignMode.align);
    const night = useSelector(state => state.nightMode.night);
    const dispatch = useDispatch();
  return (
    <Container night={night}>
        <SmallCon>
            <CustomLink to="/" >Song List</CustomLink >
            <CustomLink1 to="/addsong">Add Song</CustomLink1>
        </SmallCon>
        <div>
            <div onClick={() => dispatch(setAlign(!align))} >
              { align ? <MdOutlineMenu /> : <CgMenuGridR />   }
            </div>
            <BallCon onClick={() => dispatch(setNightMode(!night))}>
                <Ball night={night} />
            </BallCon>
        </div>  
    </Container>
  )
}
const Container = styled.nav`
     height: 4rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 1rem;
     background-color: ${({night}) => night ? "black" : "lightblue"};
     color: ${({night}) => night ? "white" : "black"};
     font-family: 'Poppins', sans-serif; 
     div{
         display: flex;
         align-items: center;
         font-size: 1.5rem;
         div{
             cursor: pointer;
         }
     }

`
const SmallCon = styled.div`
     display: flex;
     align-items: center;
     h1{
         font-weight: bold;
         cursor: pointer;
     }
`
 const CustomLink = styled(Link)`
     font-size: 1.7rem;
     font-family: 'Kanit';
     font-weight: bolder;
     padding-left: 0;
     text-decoration: none;
     color: darkcyan;
     &:hover{
        text-decoration: underline;
     }
 `

const CustomLink1 = styled(Link)`
     text-decoration: none;
     padding-left: 1.4rem;
     text-decoration: underline;
     color: darkcyan;
     &:hover{
        text-decoration: 3px underline;
     }
 `

 const BallCon = styled.div`
     width: 3rem;
     height: 1.4rem;
     border: 1px solid lightgray;
     border-radius: 11px;
     background-color: lightgray;
     position: relative;
     cursor: pointer;
     border: 1px solid white;
     margin-left: 1rem;
 `
 const Ball = styled.div`
     width: 1.4rem;
     height: 1.4rem;
     border:1px solid lightslategray;
     border-radius: 50%;
     background-color: lightslategray;
     position: absolute;
     right: ${({night}) => night && 0};
 `

export default Navbar