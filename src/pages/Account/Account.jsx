import React, { useState } from 'react';
import { useContext } from 'react';
import {ThemeContext} from '../../contexts/Theme'
import { AuthContext } from '../../contexts/Auth';
import { Main, Profilepic, FormProfile } from '../../components/Account/Account.style';
import defaultAvatar from './avatar.png'
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/Firebase-connection';

function Account(props) {


    const {UserStorage} = useContext(AuthContext)

    const { theme, toggleTheme} = useContext(ThemeContext);
    const obj = JSON.parse(localStorage.getItem("@userStorage"))
    const [nome, setNome] = useState(obj.nome)
    const [email, setEmail] = useState(obj.email)
    const [imgUrl, setImgUrl] = useState(obj.imgUrl)

    async function saveDoc(){
        await updateDoc(doc(db, "users", obj.uid),{
            nome:nome,
            imgUrl:imgUrl,
        })
        .then(()=>{
            let data = {
                nome: nome,
                email:email,
                imgUrl: imgUrl,
                logado: true,
                uid:obj.uid,
              }
              UserStorage(data)
        })
    }

    function handleFile(e){
        if(e.target.files[0]){
            const image = e.target.files[0]
            console.log(image)
            if(image.type === 'image/jpeg' || image.type === 'image/png'){
                setImgUrl(URL.createObjectURL(image))
             
            }
            else{
                setImgUrl(null)
            }
        }
    }

    

    return (
        <Main theme={theme}>
            <Profilepic>
           <label >
           <span className="material-symbols-outlined">
                upload
                </span>

                <input type="file" accept='image/*' onChange={handleFile}  />
                {imgUrl === null ?(
                    <img src={defaultAvatar} alt="Foto de perfil" />
                ) : (
                    <img src={imgUrl} alt="Foto de perfil" width={250} height={250} />
                )}
                

           </label>
            </Profilepic>
            <FormProfile>
                <h1>Informações pessoais</h1>
                <div>
                    <label htmlFor="">Nome:</label>
                    <input type="text"  defaultValue={nome} onChange={(e)=>setNome(e.target.value)} id="" />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" defaultValue={email} onChange={(e)=> setEmail(e.target.value)} id="" />
                </div>
                <h1>Preferências</h1>
                <div className='divToggleTheme'>
                    <label htmlFor="">Tema:</label>
                    <button className='toggleTheme' onClick={toggleTheme}>{theme === "light" ? "dark" : "light"}</button>
                </div>

                <button onClick={saveDoc} >Salvar</button>
                <a href="" className='delete'>Excluir conta</a>
            </FormProfile>
        </Main>
    );
}

export default Account;