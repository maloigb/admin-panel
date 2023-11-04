import React from 'react';
import { Link } from "react-router-dom";
import { Login } from "../../components/Login/Login.tsx";
import './loginPage.sass'

const LoginPage: React.FC = () => {
    return (
        <div className='container'>
            <div className='container-login'>
                <div className='container-login_text'>
                    <h1>Log in</h1>
                    <Link className='red' to="/register">register</Link>
                </div>
                <Login />
            </div>
        </div>
    );
};

export default LoginPage;