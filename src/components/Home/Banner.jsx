import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Text = styled.div`
      background-color: ${(prop)=> prop.theme === 'light' ? 'white' : '#0a0a0aea'};
      color: ${(prop)=> prop.theme === 'light'? 'black':"white"};
    width: 100%;
    height: 92vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    padding: 10px;
    justify-content: center;

    h1{
        text-align: center;
        font-size: 2.9rem;
        width: 90%;
        min-width: 300px;
        max-width: 550px;
    }
     h1 b{
        color: '#9E30F4';
        
     }

     .button{
        text-decoration: none;
        font-size: 18px;
        border-radius: 10px;
        font-weight: normal;
        background-color: #9E30F4;
        color: white;
        padding: 15px 20px;
    }
`



function Banner(props) {

    const { theme } = useContext(ThemeContext);


    return (
        
            <Text theme={theme} >
                <h1>
                    Descubra a sua exata <b>coordenada</b> e veja quando quiser!
                </h1>
                <Link to="/home/coordinates" className='button'>
                    Try Now
                </Link>
            </Text>
       
    );
}

export default Banner;