import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5vh;
    margin-bottom: 8vh;
    flex-wrap: wrap-reverse;
    
    gap: 60px;

    h1{
        padding-bottom: 5vh;
        font-size: 2.3rem;
    }

    .formulario{
        width: 90%;
        max-width: 540px;
    }
    .formulario form{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
    }
    .formulario form div{
        display: flex;
        flex-direction: column;
    }

    .formulario form div label{
        font-size: 1.25rem;
        padding-bottom: 20px;
        font-weight: bold;
    }

    .formulario form div input{
        padding: 10px;
        border-radius: 8px;
        outline: none;
        font-size: 1.2rem;
    }

    .formulario form .divCoordenada{
        gap: 10px;
       
        flex-direction: row;
        flex-wrap: wrap;
    }

    .formulario form button{
        cursor: pointer;
        background-color: #9230f4;
        color: white;
        font-size: 1.2rem;
        border: none;
        border-radius: 10px;
        padding: 15px ;
        width: 150px;
        margin: auto;
    }

    .readOnly{
        background-color: #d1cfcfee;
        
    }

    .divImg{
        overflow: hidden;
        width: 90%;
        max-width: 500px;
    }
    .divImg .img{
        width: 400px;
    }


    
   
   
    

    
`