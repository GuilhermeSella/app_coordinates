import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import imgInicio from './inicio.svg'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ThemeContext } from '../../contexts/Theme';




const Div = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: white;
    color:black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;
    padding: 0 30px 7vh 30px;
    
    
   

    div img{
        
        width: 80vw;
        max-width: 400px;
        transition: .9s;
    }

    .text{
       max-width: 450px;
       
    }
    .text h1{
        font-size: 2.4rem;
    }
    .text p{
        padding: 20px 0px;
        font-size: 1.2rem;
        
    }

    .links{
        display: flex;
        gap: 25px;
    }

    .links a{
        color: white;
        text-decoration: none;
        font-size: 1.1rem;
        padding: 16px 20px;
        background-color: #9E30F4;
        border-radius: 10px;
        transition: .9s;
        font-weight: bold;
    }
    .links a:hover,
    img:hover
    {
        transform: translateY(-4px);
    }


    .btnTheme{
        cursor: pointer;
        font-size: 18px;
        padding: 10px 5px;
        background-color: #9E30F4;
        color: white;
        border: none;
        border-radius: 10px;
        transition: .9s;
    }
    .btnTheme:hover{
        transform: translateY(-4px);
    }

    @media screen and (max-width:500px){

        div img{
            padding-top: 60px;
        }
        

    }
`

function Main(props) {

    const { toggleTheme} = useContext(ThemeContext)


    const logado = localStorage.getItem("@userStorage","logado")
  
    if(logado){
        
        return <Navigate to="/home"/>
       
    }


    return (
        <Div >
            <div className='text'>
              
               <h1>Descubra coordenadas exatas e veja quando quiser</h1>
                <p>Registre-se para continuar...</p>

                <div className='links'>
                    <Link to="/signin">Sign in</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
            <div>
                <img src={imgInicio} alt="" />
                
            </div>
          
        </Div>
    );
}

export default Main;