import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

function Error(props) {
    return (
       <Div>
            <h1>Page not found</h1>
            <p>Back to <Link to="/">Home</Link> </p>
       </Div>
    );
}

export default Error;