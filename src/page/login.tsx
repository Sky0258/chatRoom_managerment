import React from 'react'
import './css/login.css'
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <button onClick={() => {
                message.success('登录成功');
                setTimeout(() => {
                    navigate('/home/userPage');
                }, 500);
            }}>Login</button>
        </div>
    )
}
