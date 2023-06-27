import React, { useState, useContext } from 'react';
import { FormStyle } from '../../components/Form/Login.style';
import { Link } from 'react-router-dom';
import signup from './signup.svg'
import { AuthContext } from '../../contexts/auth';



function SignUp() {

    const [nome, setNome] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();

    const {signUp} = useContext(AuthContext)

    function handleSubmit(e){
        e.preventDefault()
        if(nome !== "" &&  email !== "" && password !== '' && confirmPass !== '' && password === confirmPass){
            signUp(nome,email,password)
        }
    }


    return (
    <FormStyle>
         <div className='Divform'>
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div>
                        <label>Nome</label>
                        <input type="text" required="" onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" required="" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="" id="" required=""  onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <label>Confirm password</label>
                         <input type="password" name="" id="" required="" onChange={(e)=>setConfirmPass(e.target.value)}/>
                    </div>
                    <button type='submit'>Sign up</button>
                    <p>
                        Já possui uma conta? <Link to="/signin">Login</Link>
                    </p>
                </form>
            </div>

            <div className='img'>
                 <img src={signup} alt="" />
            </div>
             
    
    </FormStyle>
    );
}

export default SignUp;