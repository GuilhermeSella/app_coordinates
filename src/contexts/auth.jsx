import {useState, createContext, useEffect} from 'react'


export const AuthContext = createContext({});


function AuthProvider({children}){

    const [user, setUser] = useState(null)
    
    function signIn(email, password){
        console.log(email)
        console.log(password)
        alert("logado")
    }

    function signUp(name, email,password){
        alert("cadastrado")
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