import React from 'react';
import styled from 'styled-components'

const Div = styled.footer`
    background-color: #101010f7;
    width: 100%;
    padding: 12px 0px;
    text-align: center;
    
    color: white;
    p{
        font-weight: bold;
        
    }

    p a{
        color: #9230f4;
        font-size: 16px;
    }
`

function Footer() {
    return (
        <Div>
            <p>@2023 Coordinates - Made by <a href="https://github.com/GuilhermeSella">Guilherme Sella</a></p>
        </Div>
    );
}

export default Footer;