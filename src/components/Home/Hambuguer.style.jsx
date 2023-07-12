import React from 'react';
import styled from 'styled-components';

const MenuHamburguer = styled.div`
    padding-bottom: 10px;
    
    .hamburguer{
    position: relative;
    top: 6px;
    display: block;
    background-color: black;
    width: 40px;
    height: 3.2px;
    transition: .5s ease-in-out;
    }
    .hamburguer:before,
    .hamburguer:after{
        background-color: black;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: .5s ease-in-out;
    }
    .hamburguer:after{
        bottom: -10px;
    }
    .hamburguer:before{
        top: -10px;
        
    }

    .input-menu-hamburguer{
        display: none;
    }
    .input-menu-hamburguer:checked ~ label .hamburguer{
        transform: rotate(45deg);
    }

    .input-menu-hamburguer:checked ~ label .hamburguer:before{
        transform: rotate(90deg);
        top: 0;
    }

    .input-menu-hamburguer:checked ~ label .hamburguer:after{
        transform: rotate(90deg);
        bottom: 0;
    }
    




`

function Hambuguer(props) {
    return (
        <MenuHamburguer class="menu-hamburguer">
        <input type="checkbox" id="menu-hamburguer" class="input-menu-hamburguer"/>

        <label htmlFor="menu-hamburguer">
            <div class="menu">
                <span class="hamburguer"></span>
            </div>
        </label>
        </MenuHamburguer>
    );
}

export default Hambuguer;