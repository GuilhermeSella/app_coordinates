import {useState, createContext, useEffect} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth, db} from '../services/Firebase-connection'
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext({});


function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const [logado, setLogado] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(false)

    
    async function signIn(email, password){
        
        setLoadingAuth(true);
        
       await signInWithEmailAndPassword(auth, email, password)
       .then( async(value)=>{

            
            let uid = value.user.uid;

            const docRef = doc(db, "users", uid)
            const docSnap = await getDoc(docRef)
            
            let data = {
                uid: uid,
                nome: docSnap.data().nome,
                email: value.user.email,
                imgUrl: docSnap.data().imgUrl,
                logado: true,
            }

            setUser(data);
            UserStorage(data);
            setLoadingAuth(false);
       })
    }

    async function signUp(name, email,password){
        setLoadingAuth(true);
        await createUserWithEmailAndPassword(auth, email, password)
        .then( async (value) =>{
            let uid = value.user.uid

            await setDoc(doc(db, "users", uid),{
                nome:name,
                imgUrl:null,
                theme:"light",
            })
            .then((res)=>{
            
              let data = {
                nome: name,
                email:value.user.email,
                imgUrl: null,
                logado: true,
                uid: uid
              }
              setUser(data)
              UserStorage(data)
              setLoadingAuth(false);
              


            })
            .catch((error)=>{
                console.log(error)
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    function LogOut(){
        
        let data = {
            logado: false,
          }
        setUser(data)
        localStorage.clear("@userStorage")
        alert("saindo")
    }

    function UserStorage(data){
        localStorage.setItem("@userStorage", JSON.stringify(data))
    }



    return(
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                signUp,
                loadingAuth,
                LogOut,
                UserStorage
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;