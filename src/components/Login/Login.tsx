import React, { useState } from 'react';
import { Form } from "../Form/Form.tsx";
import authService from "../../api/services/auth.ts";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice.ts";
import { useAppDispatch } from "../../hooks/redux.ts";

const Login: React.FC = () => {

    const dispatch = useAppDispatch();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async (email: string, password: string) => {

        try {

            const user = await authService.postLogin(email, password);
            dispatch(setUser(user));
            navigate('/');
        } catch (error) {

            setErrorMessage((error as Error).message);
        }
    }

    return (
        <>
            <Form
                title="sign in"
                handleClick={handleLogin}
                errorMessage={errorMessage}
            />
        </>
    );
};

export { Login };