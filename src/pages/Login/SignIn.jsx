import React, { useState } from 'react';
import { FormStyle } from '../../components/Form/Login.style';
import { Link } from 'react-router-dom';
import Login from './login.svg'

function SignIn(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <FormStyle>
           
            <div className='Divform'>
                <form >
                    <h1>Sign in</h1>
                    <div>
                        <label>Email</label>
                        <input type="email" required="" onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="" id="" required="" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type='submit'>Sign in</button>
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