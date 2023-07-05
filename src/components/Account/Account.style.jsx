import styled from "styled-components";

export const Main = styled.main`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
    padding: 6vh 0vh 20vh 0vh;
`

export const Profilepic = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    overflow: hidden;

     img{
        width:250px;
        
        height:230px;
     }
`
export const FormProfile = styled.div`
  
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;

    h1{
        text-align: center;
        font-size: 1.7rem;
        color: #9E30F4;
    }

    div{
        width: 90%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    div label{
        font-weight: bold;
        font-size: 18px;
    }
    div input{
        padding: 8px;
        font-size: 1.1rem;
        outline: none;
        border: 2px solid black;
        border-radius: 7px;
    }

    div select{
        padding: 8px;
        font-size: 1.1rem;
        outline: none;
        border: 2px solid black;
        border-radius: 7px;
    }

    button{
        cursor: pointer;
        padding: 15px 50px;
        border-radius: 10px;
        font-weight: bold;
        background-color: #9E30F4;
        color: white;
        border: none;
        font-size: 1.2rem;
    }
`
