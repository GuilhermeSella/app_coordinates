import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';


const Navbar = styled.header`
    
    width: 100%;
    padding: 15px;
    background-color: ${(prop)=> prop.theme === 'light' ? 'white' : '#0A0A0A'};
    box-shadow: 1px 2px #0a0a0a39;
   gap: 13%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        gap: 80px;
    }

    a{
        font-weight: bold;
        color: ${(prop)=> prop.theme === 'light'? '#9E30F4':"white"};
        text-decoration: none;
        font-size: 2.5rem;
        transition: .5s;
    }
    a:hover{
        color: #9E30F4;
    }

    ul{
        display: flex;
        gap: 30px;
        list-style: none;
    }

    ul li a{
      
        text-decoration: none;
        font-size: 1.3rem;
    }

    .button{
        font-size: 18px;
        border-radius: 10px;
        font-weight: normal;
        background-color: #9E30F4;
        color: white;
        padding: 12px 15px;
    }
    .button:hover{
        color: white;
    }

    

`

function Header() {

    const { theme} = useContext(ThemeContext);

    return (
        <Navbar theme={theme}>
           <div>
           <Link to="/">Coordinates</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contato</Link></li>
                <li><Link>Log out</Link></li>
            </ul>
           
           </div>
           <Link className='button'>Get Start</Link>
        </Navbar>
    );
}

export default Header;