import {useState, createContext, useEffect} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth, db} from '../services/Firebase-connection'
import { doc, setDoc } from 'firebase/firestore';

export const AuthContext = createContext({});


function AuthProvider({children}){

    const [user, setUser] = useState(null)
    
    function signIn(email, password){
        console.log(email)
        console.log(password)
        alert("logado")
    }

    async function signUp(name, email,password){
        await createUserWithEmailAndPassword(auth, email, password)
        .then( async (value) =>{
            let uid = value.user.uid

            await setDoc(doc(db, "users", uid),{
                nome:name,
                imgUrl:null,
            })
            .then((res)=>{
                alert("cadastrado com sucesso")
            })
            .catch((error)=>{
                console.log(error)
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                signUp
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;