import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/Theme';
import {Link, Navigate} from 'react-router-dom'


const NavMobile = styled.div`
    
    position: absolute;
    display: ${(prop)=>prop.hamburguer === "enable" ? 'block' : 'none'};
    z-index: 1000;
    height: 100%;
    width: 100vw;
    background-color: white;
   
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
        border-bottom: 0.5px solid #000000c3;
        padding-bottom: 10px;
    }

    ul li a{
        text-decoration: none;
        color:#9E30F4 ;
    }
   
       

`

function Navbar() {

    const {hamburguer, toggleHamburguer} = useContext(ThemeContext)



    return (
       <NavMobile hamburguer={hamburguer}>
            <ul>
                <li  onClick={toggleHamburguer}>
                   
                 <span class="material-symbols-outlined">
                         home
                    </span>
                    <Link to="/home">Home</Link>
                    
                </li>
               
                <li onClick={toggleHamburguer}>
                   
                <span class="material-symbols-outlined">
                         person
                    </span>
                    <Link to="/home/account"  >Profile</Link>
                </li>

                
                <li  onClick={toggleHamburguer}>
                <span class="material-symbols-outlined">
                         bookmark
                    </span>
                    <Link to="/home/saved" >Saved</Link>
                </li>

                <li  onClick={toggleHamburguer}>
                <span class="material-symbols-outlined">
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