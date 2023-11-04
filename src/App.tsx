import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import { useAuth } from "./hooks/use-auth.ts";
import './App.css'
const App: React.FC = () => {
    const { isAuth } = useAuth();

    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute redirectPath="/login" userIsActive={isAuth}>
                            <HomePage />
                        </ProtectedRoute>}
                />
                <Route
                    path="/login"
                    element={
                        <ProtectedRoute redirectPath="/" userIsActive={!isAuth}>
                            <LoginPage />
                        </ProtectedRoute>}
                />
                <Route
                    path="/register"
                    element={
                        <ProtectedRoute redirectPath="/" userIsActive={!isAuth}>
                            <RegisterPage />
                        </ProtectedRoute>}
                />
            </Routes>
        </main>
    );
};

export default App;