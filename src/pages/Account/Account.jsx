import React from 'react';
import { useContext } from 'react';
import {ThemeContext} from '../../contexts/Theme'
import { Main, Profilepic, FormProfile } from '../../components/Account/Account.style';
import AvatarImg from './avatar.png'


function Account(props) {

    const { theme} = useContext(ThemeContext);


    return (
        <Main>
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
                <div>
                    <label htmlFor="">Theme:</label>
                    <select name="" id="">
                        <option value="">Light</option>
                        <option value="">Dark</option>
                        
                    </select>
                </div>

                <button>Salvar</button>
            </FormProfile>
        </Main>
    );
}

export default Account;