import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Navbar = styled.header`
    padding: 15px;
    background-color: #6809a7;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1{
        font-weight: 400;
    }

    ul{
        display: flex;
        gap: 30px;
        list-style: none;
    }

    ul li a{
        color: white;
        text-decoration: none;
        
    }

`

function Header() {
    return (
        <Navbar>
            <h1>Coordinates</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contato</Link></li>
                <li>Log out</li>
            </ul>
        </Navbar>
    );
}

export default Header;