import React from 'react';
import { Link } from "react-router-dom";
import SignUp from "../../components/SignUp/SignUp.tsx";
import './registerPage.sass'

const RegisterPage: React.FC = () => {
    return (
        <div className='container'>
            <div className='container-signUp'>
                <div className="container-signUp_text">
                    <h1>Register</h1>
                    <Link to="/login">Sign in</Link>
                </div>
                <SignUp />
            </div>
        </div>
    );
};

export default RegisterPage;