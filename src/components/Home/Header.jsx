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
    justify-content: space-around;
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
            <ul className='list'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/home/account">Profile</Link></li>
                <li><Link to="/home/saved">Salvos</Link></li>
            </ul>
           
           

           </div>
           <Link className='button' onClick={()=> {
                    navigate("/")
                    LogOut()
                }}>Log Out
            </Link>




        </Navbar>
    );
}

export default Header;