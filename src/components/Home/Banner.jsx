import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Text = styled.div`
      background-color: ${(prop)=> prop.theme === 'light' ? 'white' : '#0A0A0A'};
      color: ${(prop)=> prop.theme === 'light'? 'black':"white"};
    width: 100%;
    height: 92vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    justify-content: center;

    h1{
        text-align: center;
        font-size: 3.8rem;
        width: 90%;
        max-width: 1000px;
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
                <Link className='button'>
                    Try Now
                </Link>
            </Text>
       
    );
}

export default Banner;