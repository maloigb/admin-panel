import React from 'react';
import {Link} from "react-router-dom";

const RegisterPage : React.FC = () => {
    return (
        <div>
            <h1>Register</h1>
            <p>
                Already have an Account? <Link to="/login">Sign in</Link>
            </p>
        </div>
    );
};

export default RegisterPage;