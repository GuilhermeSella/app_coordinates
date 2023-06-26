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

    a{
        font-weight: 400;
        color: white;
        text-decoration: none;
        font-size: 2.2rem;
    }

    ul{
        display: flex;
        gap: 30px;
        list-style: none;
    }

    ul li a{
        color: white;
        text-decoration: none;
        font-size: 1.1rem;
    }

    ul li a:hover{
        text-decoration: underline 1px;
    }

`

function Header() {
    return (
        <Navbar>
            <Link to="/">Coordinates</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contato</Link></li>
                <li><Link>Log out</Link></li>
            </ul>
        </Navbar>
    );
}

export default Header;