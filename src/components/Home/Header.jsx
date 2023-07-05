import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import { AuthContext } from '../../contexts/Auth';
import { useNavigate } from 'react-router-dom';

const Navbar = styled.header`
    
    width: 100%;
    padding: 15px;
    background-color: ${(prop)=> prop.theme === 'light' ? 'white' : '#0A0A0A'};
   
    gap: 13%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        gap: 80px;
    }

 

    a{
        font-weight: bold;
        color: #9E30F4;
        text-decoration: none;
        font-size: 2.5rem;
        transition: .5s;
    }
    

    .navIcons{
        display: flex;
        align-items: center;
        gap: 35px;
    }

    .button{
        font-size: 18px;
        border-radius: 10px;
        font-weight: normal;
       transition: .5s;
        color: white;
        
    }
    .button:hover{
        transform: translateY(-2px);
    }
    .button span{
        color: #9E30F4;
        font-size: 2rem;
    }

    @media screen and (max-width:860px) {
        .button, .list{
            display: none;
        }
    }

`

function Header() {

    const { theme} = useContext(ThemeContext);

    const { LogOut} = useContext(AuthContext)

    const navigate = useNavigate();

    return (
        <Navbar theme={theme}>
           <div>
            <Link to="/home">Coordinates</Link>
           </div>
           
           <nav className='navIcons'>

                <Link className='button' to="/home/account">
                <span class="material-symbols-outlined">
                    person
                </span>
                </Link>

                <Link className='button' to="/home/saved">
                    <span class="material-symbols-outlined">
                    bookmark
                    </span>
                </Link>

                <Link className='button' onClick={()=> {
                navigate("/")
                LogOut()}}>
                    <span class="material-symbols-outlined">
                    logout
                    </span>
                </Link>
           </nav>
            




        </Navbar>
    );
}

export default Header;