import { useState } from "react";
import styled from "styled-components";


export const Div = styled.div`



    background-color:${(prop)=>prop.theme === 'light' ? 'white' : "#0a0a0aea"} ;
    color: ${(prop)=>prop.theme === 'light' ? 'black' : "white"};
    width: 100%;
   height: 120vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  

    flex-wrap: wrap-reverse;
    gap: 20px;
   
 
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
        display: flex;
        flex-direction: column;
        gap: 30px;
     
       
    }
    .divImg button{
        cursor: pointer;
        background-color: #9230f4;
        color: white;
        font-size: 1.2rem;
        border: none;
        border-radius: 10px;
        padding: 10px 0  ;
        width: 150px;
        margin: auto;
    }
    .divImg iframe{
       position: relative;
       
    }

    @media screen and (max-width:420px){
       gap: 0;
        
   }
   
   @media screen and (max-width:380px){
        height: 137vh;
        padding-bottom: 30px;
        
   }
    

    
`
