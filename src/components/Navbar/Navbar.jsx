import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/Theme';
import {Link, Navigate} from 'react-router-dom'
import { AuthContext} from '../../contexts/Auth'
import { useNavigate } from 'react-router-dom';

const NavMobile = styled.div`
    
    position: absolute;
    display: ${(prop)=>prop.hamburguer === "enable" ? 'block' : 'none'};
    z-index: 1000;
    height: 100%;
    width: 100vw;
    background-color: ${(prop)=>prop.theme === "light" ? "white" : "#0a0a0aea" };
   
    ul{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 50px  8%;
        gap: 60px;
    }
    ul li {
        color:#9E30F4 ;
        list-style: none;
        font-size: 1.15rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 5px;
        border-bottom: 0.5px solid white;
        padding-bottom: 10px;
    }

    ul li a{
        text-decoration: none;
        color:#9E30F4 ;
    }
   
       

`

function Navbar() {

    const {theme ,hamburguer, toggleHamburguer} = useContext(ThemeContext)
    const {LogOut} = useContext(AuthContext)
    const navigate = useNavigate();


    return (
       <NavMobile hamburguer={hamburguer} theme={theme}>
            <ul>
                <li  onClick={toggleHamburguer}>
                   
                 <span className="material-symbols-outlined">
                         home
                    </span>
                    <Link to="/home">Home</Link>
                    
                </li>
               
                <li onClick={toggleHamburguer}>
                   
                <span className="material-symbols-outlined">
                         person
                    </span>
                    <Link to="/home/account"  >Profile</Link>
                </li>

                
                <li  onClick={toggleHamburguer}>
                <span className="material-symbols-outlined">
                         bookmark
                    </span>
                    <Link to="/home/saved" >Saved</Link>
                </li>

                <li  onClick={toggleHamburguer}>
                <span className="material-symbols-outlined">
                    logout
                </span>  
                    <Link onClick={()=> {
                navigate("/")
                LogOut()}} >Log Out</Link>
                </li>
            </ul>
       </NavMobile>
    );
}

export default Navbar;