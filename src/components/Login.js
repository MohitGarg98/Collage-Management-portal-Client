import React from 'react';
import "./Login.css";

function Login() {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Login</h1>
            <div className="login-container">
                <a className="login-link" href="/student">Student Login</a>
                <a className="login-link" href="/teacher">Teacher Login</a>
            </div>
        </div>
    )
}

export default Login
