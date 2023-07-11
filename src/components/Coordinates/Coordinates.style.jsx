import styled from "styled-components";

export const Div = styled.div`
    background-color:${(prop)=>prop.theme === 'light' ? 'white' : "#0a0a0af7"} ;
    color: ${(prop)=>prop.theme === 'light' ? 'black' : "white"};
    width: 100%;
   height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  

    flex-wrap: wrap-reverse;
    gap: 30px;
   
 
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
        gap: 10px;
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
       max-width: 90vw;
     
     
       
    }
    .divImg iframe{
       position: relative;
       
    }


    
   
   @media screen and (max-width:380px){
        height: 120vh;
        padding-bottom: 30px;
   }
    

    
`