import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { Link } from 'react-router-dom'
import Validation from './LoginValidation'

const users = [
    {
        username: "user1",
        password: "password",
    },
    {
        username: "user2",
        password: "password",
    },
];

function LoginPage({ onLogin }) { 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [values] = useState({
        email:'',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            onLogin(username); 
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            
            <div className="login-page">
                <h1>Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="text"><strong>Username</strong></label>
                        <input type="username" placeholder='Enter Username' value={username}
                        onChange={(e) => setUsername(e.target.value)} className='form-control rounded-0'/>
                        <span>{errors.name && <span className='text-danger'> {errors.name}</span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' value={password}
                        onChange={(e) => setPassword(e.target.value)} className='form-control rounded-0'/>
                        <span>{errors.password && <span className='text-danger'> {errors.password}</span>}</span>
                    </div>
                
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
                    <p>You are agree to our terms and policies</p>
                    <Link to="/Signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
            
        </div>
    )
}

export default LoginPage;
