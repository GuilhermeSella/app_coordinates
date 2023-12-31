import React, { useState, useContext } from 'react';
import { FormStyle } from '../../components/Form/Login.style';
import { Link } from 'react-router-dom';
import Login from './login.svg'
import {AuthContext } from '../../contexts/Auth'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function SignIn(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {signIn, loadingAuth, setLoadingAuth} =  useContext(AuthContext)

    const navigate = useNavigate();

   async function handleSignIn(e){
        e.preventDefault();

        if(email !== '' && password !== ''){
          await signIn(email,password)
           .then((res)=>{
             navigate("/home");
             toast.success("Bem vindo de volta!")
           })
           .catch((error)=>{
            toast.error("Email ou senha inválidos!")
            setLoadingAuth(false)
           })
        }
        

    }



    return (
        <FormStyle >
           <ToastContainer />
            <div className='Divform'>
                <form onSubmit={handleSignIn} >
                    <h1>Sign in</h1>
                    <div>
                        <label>Email</label>
                        <input type="email" required="" onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="" id="" required="" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type='submit'>{loadingAuth === true ? "Loading..." : "Sign in"}</button>
                    <p>
                        Ou <Link to="/signup">cadastre-se</Link>
                    </p>
                </form>
            </div>

            <div className='img'>
                 <img src={Login} alt="" />
            </div>
        
        
        </FormStyle>
    );
}

export default SignIn;