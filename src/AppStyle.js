import styled, {css} from "styled-components";


export const Container = styled.div`
    background-color: ${({night}) => night ? "rgb(17,24,39)" : "white" };
`

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    padding: 0 1rem;
    background-color: ${({night}) => night ? "#111827" : "white"};
    background: ${({night}) => night ? "radial-gradient(circle, rgba(185,198,227,1) 50%, rgba(45,66,111,1) 100%)"  : "radial-gradient(circle, rgba(244,244,244,1) 50%, rgba(207,207,207,1) 100%)" };
    
`

export const SmallCon = styled.div`
    /* padding: 1rem; */
`

export const BallCon = styled.div`
    width: 3rem;
    height: 1.4rem;
    border: 1px solid lightgray;
    border-radius: 11px;
    background-color: lightgray;
    position: relative;
    cursor: pointer;
    border: 1px solid white;
`
export const Ball = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    border:1px solid lightslategray;
    border-radius: 50%;
    background-color: lightslategray;
    position: absolute;
    right: ${({night}) => night && 0};
`

export const Form = styled.form` 
    height: 20vh;
    position: sticky;
    top: 4.1rem;
    margin-top: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 3px;
    background: ${({night}) => night ?"radial-gradient(circle, rgba(185,198,227,1) 40%, rgba(45,66,111,1) 100%)" : "radial-gradient(circle, rgba(244,244,244,1) 40%, rgba(207,207,207,1) 100%)"  };
    input{
        height: 2.4rem;
        font-size: 1rem;
        margin-right: 1rem;
        padding-left: 1rem;
        width:  70%;
        outline: none;
        border-radius: 5px;
        border: none;
        box-shadow:  1px 1px 10px -2px lightgray;
    }
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px;
    border: 1px solid lightgray;
    margin-bottom: 3px;
    border-radius: 5px;
    border: none;
    color: ${({night}) => night ?  "white" : "balck" };
    background: ${({night}) => night ?  "radial-gradient(circle, rgba(180,198,227,1) 40%, rgba(45,66,111,1) 100%)" : "radial-gradient(circle, rgba(240,240,240,1) 40%, rgba(211,211,211,1) 100%)" };
    li{
        list-style: none;
        flex: auto;
        font-family: 'Poppins', sans-serif; 
    }
    div{
        flex: none;
    }
`
export const Button = styled.button`
    border: none;
    padding: 7px 15px;
    margin-right: .5rem;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    font-family: 'Poppins', sans-serif;
    ${props => props.edit && css`
        background-color: lightblue;
        &:hover{
            background-color: #87cefa;
            color: white;
        }
    `}
    ${props => props.delete && css`
        background-color: #f08080;
        &:hover{
            background-color: #ff355e;
            color: white;
        }
    `}
    ${props => props.submit && css`
        padding: 10px 20px;
        flex: none;
        &:hover{
            background-color: gray;
            color: white;
        }
    `}

`