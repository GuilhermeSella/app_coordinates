import styled from "styled-components";

export const FormStyle = styled.div`
    width: 100vw;
    background-color: ${(prop)=> prop.theme === "light" ? 'white' : '#0a0a0af7' };
    color: ${(prop)=> prop.theme === "light" ? 'black' : 'white'};
    height: 100vh;
    display: flex;
    flex-wrap: wrap-reverse;
    
    justify-content: center;
    align-items: center;
    padding: 5vh 0;

    .Divform{
        width: 90%;
        max-width: 550px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .Divform form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
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
        font-size: 22px;
        border-radius: 0.375rem;
        border: 1px solid #9E30F4;
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
        background-color:#9E30F4;
        border-radius: 0.375rem;
   }

   .Divform form p{
        font-size: 1rem;
        font-weight: bold;
   }

   .Divform form p a{
        color: #9E30F4;
   }
   

    
   .img{
    display: flex;
    flex-direction: column;
    align-items: center;
   }

    .img img{
        transition: ease .5s;
        width: 70%;
        max-width: 550px;
    }

    @media screen and (max-width: 1100px) {
        .img{
            display: none;
        }
    }

   
`