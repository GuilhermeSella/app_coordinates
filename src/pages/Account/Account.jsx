import React from 'react';
import { Main, Informacoes, ProfilePic, Buttons } from '../../components/Account/Account.style';
import AvatarImg from './avatar.png'


function Account(props) {
    return (
        <Main>
            <h1>Bem Vindo!</h1>
            <div className='div'>
                <Informacoes>
                    <div className='Pessoais'>
                        <h2>Informações Pessoais</h2>
                        <label htmlFor="">Nome:</label>
                        <input type="text" />
                        <label htmlFor="">Email:</label>
                        <input type="email" />
                    </div>
                    <div className='Preferencias'>
                        <h2>Preferências</h2>
                        <label htmlFor="">Theme:</label>
                        <select name="" id="">
                            <option value="Dark">Dark</option>
                            <option value="Light">Light</option>
                        </select>
                    </div>
                    <Buttons>
                        <button className='btnSalvar'>Salvar </button>
                        <button className='btnExcluir'>Excluir </button>
                    </Buttons>
                </Informacoes>
                <ProfilePic>
                    <div className='picture'>
                        <img src={AvatarImg} alt="" />
                        <p>Alterar foto de perfil</p>
                    </div>
                    
                </ProfilePic>
            </div>
        </Main>
    );
}

export default Account;