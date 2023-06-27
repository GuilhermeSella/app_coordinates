import React from 'react';
import { FormStyle } from '../../components/Form/Login.style';
import { Link } from 'react-router-dom';
import signup from './signup.svg'


function SignUp() {
    return (
    <FormStyle>
         <div className='Divform'>
                <form>
                    <h1>Sign Up</h1>
                    <div>
                        <label>Email</label>
                        <input type="email" required=""/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="" id="" required="" />
                    </div>
                    <div>
                        <label>Confirm password</label>
                         <input type="password" name="" id="" required="" />
                    </div>
                    <button>Sign up</button>
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