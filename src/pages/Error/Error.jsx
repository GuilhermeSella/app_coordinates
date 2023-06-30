import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ErrorImg  from './404.png'

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    img{
        width: 90%;
        max-width: 500px;
    }
`

function Error() {
    return (
       <Div>
        <img src={ErrorImg} alt="" />
            <h1>Page not found</h1>
            <p>Back to <Link to="/home">Home</Link> </p>
       </Div>
    );
}

export default Error;