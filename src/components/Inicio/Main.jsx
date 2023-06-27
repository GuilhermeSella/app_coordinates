import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import imgInicio from './inicio.svg'
const Div = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    gap: 10%;
    align-items: center;

    div img{
        max-width: 400px;
        transition: .9s;
    }

    .text{
        max-width: 450px;
    }
    .text h1{
        font-size: 2.8rem;
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
        background-color: #3F3D56;
        border-radius: 10px;
        transition: .9s;
    }
    .links a:hover,
    img:hover
    {
        transform: translateY(-4px);
    }
`

function Main(props) {
    return (
        <Div>
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