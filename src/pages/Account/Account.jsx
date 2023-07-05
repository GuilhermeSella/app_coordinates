import React from 'react';
import { useContext } from 'react';
import {ThemeContext} from '../../contexts/Theme'
import { Main, Profilepic, FormProfile } from '../../components/Account/Account.style';
import AvatarImg from './avatar.png'


function Account(props) {

    const { theme, toggleTheme} = useContext(ThemeContext);


    return (
        <Main theme={theme}>
            <Profilepic>
                <img src={AvatarImg} alt="" />
                <a href="">Alterar avatar</a>
            </Profilepic>
            <FormProfile>
                <h1>Informações pessoais</h1>
                <div>
                    <label htmlFor="">Nome:</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" name="" id="" />
                </div>
                <h1>Preferências</h1>
                <div className='divToggleTheme'>
                    <label htmlFor="">Tema:</label>
                    <button className='toggleTheme' onClick={toggleTheme}>{theme === "light" ? "dark" : "light"}</button>
                </div>

                <button >Salvar</button>
                <a href="" className='delete'>Excluir conta</a>
            </FormProfile>
        </Main>
    );
}

export default Account;