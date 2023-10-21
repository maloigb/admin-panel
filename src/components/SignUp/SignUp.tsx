import { Form } from "../Form/Form.tsx";
import { setUser } from "../../store/slices/userSlice.ts";
import React, { useState } from 'react';
import { useAppDispatch } from "../../hooks/redux.ts";
import signUpServices from '../../api/services/signUp.ts';
import { useNavigate } from 'react-router-dom';


const SignUp : React.FC = () : React.ReactNode => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleRegister = async (email : string, password : string) => {
        try {
            const user = await signUpServices.postSignUp(email, password);
            dispatch(setUser(user));
            navigate('/');
        } catch (error) {
            setErrorMessage((error as Error).message);
        }

    }

    return (
        <>
            {errorMessage}
        <Form
            title="register"
            handleClick={handleRegister}
        />
        </>

    );
};

export default SignUp;