import React, { useState } from 'react';
import { useContext } from 'react';
import {ThemeContext} from '../../contexts/Theme'
import { AuthContext } from '../../contexts/Auth';
import { Main, Profilepic, FormProfile } from '../../components/Account/Account.style';
import defaultAvatar from './avatar.png'
import { doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../services/Firebase-connection';
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage'

function Account(props) {


    const {user, UserStorage} = useContext(AuthContext)

    const { theme, toggleTheme} = useContext(ThemeContext);
    const obj = JSON.parse(localStorage.getItem("@userStorage"))
    const [nome, setNome] = useState(obj.nome)
    const [email, setEmail] = useState(obj.email)
    const [imgUrl, setImgUrl] = useState(obj.imgUrl)
    const [imgAvatar, setImgAvatar] = useState()
    const [urlAvatar, setUrlAvatar] = useState(null)


    async function handleUpload(){
        
        if(imgAvatar === undefined){
            saveDoc()
        }
        else{
            const uid = obj.uid
        const uploadRef = ref(storage, `images/${uid}/${imgAvatar.name}`)
        const uploudTask = uploadBytes(uploadRef, imgAvatar)
        .then((snapshot)=>{
            getDownloadURL(snapshot.ref) .then(async (downloadUrl)=>{
                let urlFoto = downloadUrl
                
                console.log(urlFoto)
                setUrlAvatar(urlFoto)
                console.log(imgUrl)
                saveDoc()
            })
            
        })
        }
    }

    async function saveDoc(){
        await updateDoc(doc(db, "users", obj.uid),{
            nome:nome,
            imgUrl:urlAvatar,
            theme: theme,
        })
        .then(()=>{
            
            let data = {
                nome: nome,
                email:email,
                imgUrl: urlAvatar,
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
                setImgAvatar(image)
                setImgUrl(URL.createObjectURL(image))
                
             
            }
            else{
                setImgUrl(null)
                setImgAvatar(null)
            }
        }
    }



    

    return (
        <Main theme={theme}>
            <Profilepic>
           <label >
           <span >
                Alterar avatar
                </span>

                <input type="file" accept='image/*' onChange={handleFile}  />
                {imgUrl === null ?(
                    <img src={defaultAvatar} alt="Foto de perfil" />
                ) : (
                    <img src={imgUrl} alt="Foto de perfil" width={250} height={250} />
                )}
                

           </label>
            </Profilepic>
            <FormProfile theme={theme}>
                <h1>Informações pessoais</h1>
                <div>
                    <label htmlFor="">Nome:</label>
                    <input type="text"  defaultValue={nome} onChange={(e)=>setNome(e.target.value)} id="" />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" defaultValue={email} onChange={(e)=> setEmail(e.target.value)} id="" />
                </div>
               
                <div className='divToggleTheme'>
                <h1>Preferências</h1>
                    <button className='toggleTheme' onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}</button>
                </div>

                <button className='saveButton' onClick={handleUpload} >Salvar</button>
                <a href="" className='delete'>Excluir conta</a>
            </FormProfile>
        </Main>
    );
}

export default Account;