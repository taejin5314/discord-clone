import React from 'react';
import './Login.css';
import logo from '../../images/Discord_logo.svg';

function Login() {
    return (
        <div className="login">
            <h2>I am the login page</h2>

            <div className="login__logo">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default Login
