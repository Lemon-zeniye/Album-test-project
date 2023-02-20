import styled, {css} from "styled-components";

export const Container = styled.div`
    padding: 1rem 2rem;
    font-family: 'Poppins', sans-serif; 
    background-color: ${({night}) => night ? "#313131" : "white"};
    color: ${({night}) => night ? "white" : "#313131"};
    label{
        display: block;
        padding: .5rem 0;
        span{
            padding: 1rem;
        }
        small{
            color: red;
        }
    };
`

export const FileCon = styled.div`
    padding: .2rem 1rem;
    box-shadow: 0px 0px 8px 2px #686868;
    box-shadow: ${({night}) => night ? "0px 0px 8px 2px #686868" : "0px 0px 8px 2px #dfe4f2"};

    border-radius: .3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding:1rem 4rem;
    min-height: 10vh;
    margin: 1rem 0;
    label{
        span{
            cursor: pointer;
            &:hover{
                color: gray;
            }
        }
    }
`

export const Input = styled.input`
    border: none;
    padding: 10px;
    margin-top: .3rem;
    font-size: 17px;
    outline: none;
    font-family: 'Noto Sans', sans-serif;
    box-sizing: border-box;
    box-shadow: ${({night}) => night ? "0px 0px 8px 2px #686868" : "0px 0px 8px 2px #dfe4f2"};
    color:  ${({night}) => night ? "white" : "black"};
    border-radius: .2rem;
    letter-spacing: 1px;
    background-color: transparent;
    width: 100%;
    &:focus{
        border-bottom: 1px solid #8b9fe8;
        box-shadow: 0 6px 6px -6px #6e83d1;
        transition: box-shadow .5s linear,  border-bottom .5s linear;
    }
    ${props => props.audio && css`
        display: none;
    `}
    ${props => props.image && css`
        display: none;
    `}
`
export const Card = styled.div`
    height: 10rem;
    background-color: red;
    flex: auto;
`
export const Button = styled.button`
    border: none;
    width: 100%;
    padding: .6rem 0;
    margin: 1rem 0;
    font-family: 'Poppins', sans-serif; 
    border-radius: .4rem;
    background-color: lightgray;
    cursor: pointer;
    &:hover{
        background-color: #e2e2e2;
    }
`

export const Img = styled.img`
    border-radius: .3rem;
    max-width: 350px;
    max-height: 550px;
    padding:.5rem;
    object-fit: fill;
    box-shadow: ${({night}) => night ? "0px 0px 8px 2px #686868" : "0px 0px 8px 2px #dfe4f2"};
    background-color: ${({night}) => night ? " #686868" : " #dfe4f2"};;
`