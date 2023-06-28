import styled from "styled-components";

export const FormStyle = styled.div`
    width: 100vw;
    background-color: ${(prop)=> prop.theme === "light" ? 'white' : '#0A0A0A' };
    color: ${(prop)=> prop.theme === "light" ? 'black' : 'white'};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    

    .Divform{
        width: 30%;
    }

    .Divform form{
        max-width: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }
    .Divform form h1{
        font-size: 2.6rem;
    }
    .Divform form div{
        display: flex;
        align-items: left;
        flex-direction: column;
        width: 100%;
    }

    .Divform form div input{
        padding: 0.75rem 1rem;
        margin-top: 10px;
        font-size: 16px;
        border-radius: 0.375rem;
        border: 1px solid rgba(55, 65, 81, 1);
        outline: 0;
        
        
        
    }
    .Divform form div label{
        font-size: 1.2rem;
    }

   .Divform form  button{
        cursor: pointer;
        border: none;
        width: 100%;
        padding: 15px 10px;
        font-size: 1.2rem;
        color: white;
        background-color: #3F3D56;
        border-radius: 0.375rem;
   }

    

    .img img{
        transition: ease .5s;
        width: 400px;
    }

   
`