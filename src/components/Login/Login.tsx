import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "../Form/Form.tsx";
// import { useDispatch } from "react-redux";
// import { setUser } from "../../store/slices/userSlice.ts";

const Login : React.FC = () => {
    // const dispatch = useDispatch();

    const handleLogin = (email : string, password : string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
    }
    return (
        <Form
        title="sign in"
        handleClick={handleLogin}
        />
    );
};

export  {Login};