import React, {useState} from 'react';
import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
const App : React.FC = () => {
    const [user] = useState('null')
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute redirectPath="/login" userIsActive={!!user}>
                        <HomePage />
                    </ProtectedRoute>}
            />
            <Route
                path="/login"
                element={
                    <ProtectedRoute redirectPath="/" userIsActive={!user}>
                        <LoginPage />
                    </ProtectedRoute>}
            />
            <Route
                path="/register"
                element={
                    <ProtectedRoute redirectPath="/" userIsActive={!user}>
                        <RegisterPage />
                    </ProtectedRoute>}
            />
        </Routes>
    );
};

export default App;