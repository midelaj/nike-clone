import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'
import { Button } from 'react-bootstrap'
import { CreateUserApi } from '../../Components/userApi';
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    console.log(email);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await CreateUserApi(email, password);
        if (success) {
            navigate('/signin')
        } else {
            console.log('failed to create user');
        }
    }
    return (
        <div className="login-container">
            <h1>Create your account</h1>
            <p className='login-info'>email</p>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <p className='login-info'>password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <p>By continuing, i agree to nike's Privacy Policy and Terms of Use.</p>
                <div className="login-button-container">
                    <Button type='submit' className='login-button'>signUp</Button>
                </div>
            </form>
            
        </div >
    )
}

export default SignUp
