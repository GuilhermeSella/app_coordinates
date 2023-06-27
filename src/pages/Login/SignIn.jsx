import React from 'react';
import { FormStyle } from '../../components/Form/Login.style';
import { Link } from 'react-router-dom';
import Login from './login.svg'

function SignIn(props) {
    return (
        <FormStyle>
           
            <div className='Divform'>
                <form action="">
                    <h1>Sign in</h1>
                    <div>
                        <label>Email</label>
                        <input type="email" required=""/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="" id="" required="" />
                    </div>
                    <button>Sign in</button>
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