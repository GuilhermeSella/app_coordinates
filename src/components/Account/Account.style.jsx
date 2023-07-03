import styled from "styled-components";

export const Main = styled.main`
    
    
    width: 100%;
    margin-top: 50px ;
    padding: 0px 20px;

  
    
    h1{
        text-align: center;
    }

    .div{
        display: flex;
        justify-content: center;
        gap: 50px;
        padding: 100px 0px  ;
        flex-wrap: wrap-reverse;
    }

    
`

export const Informacoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    .Pessoais{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .Pessoais h2{
        color: #9E30F4;
        font-size: 1.8rem;
        margin-bottom: 15px;
    }
    .Pessoais label{
        font-size: 1rem;
        font-weight: bolder;
    }
    .Pessoais input{
        padding: 5px;
        border-radius: 6px;
        outline: none;
        font-size: 0.9rem;
        font-weight: bold;
    }

    .Preferencias{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .Preferencias h2{
        color: #9E30F4;
        font-size: 1.8rem;
        margin-bottom: 15px;
    }

    .Preferencias label{
        font-size: 1rem;
        font-weight: bolder;
    }

    .Preferencias select{
        padding: 5px;
        cursor: pointer;
        font-size: 0.9rem;
        border-radius: 6px;
        outline: none;
        border: 2px solid black;
        font-weight: bold;
    }
`




export const ProfilePic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;


    .picture{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`

export const Buttons = styled.div`
    display: flex;
    gap: 10px;

    button{
        cursor: pointer;
        font-weight: bolder;
        font-size: 1rem;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
    }
    .btnSalvar{
        background-color: #9E30F4;
        border: #9E30F4;
    }
    .btnExcluir{
        background-color: red;
        border: red;
    }
`