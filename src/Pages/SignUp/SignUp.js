import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'
import { Button } from 'react-bootstrap'


function SignUp() {
    return (
        <div className="login-container">
            <h1>Create your account</h1>
            <p className='login-info'>email</p>
            <input type="email" />

            <p className='login-info'>password</p>
            <input type="password" />

            <p>By continuing, i agree to nike's Privacy Policy and Terms of Use.</p>
            <div className="login-button-container">
                <Button className='login-button'>signUp</Button>
            </div>
        </div>
    )
}

export default SignUp
