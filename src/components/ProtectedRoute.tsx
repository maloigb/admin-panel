import { Navigate } from 'react-router-dom';
import React from "react";

interface ProtectedRouteProps {
    redirectPath: string,
    userIsActive: boolean,
    children : React.ReactNode
}
const ProtectedRoute = ({ redirectPath, userIsActive, children } : ProtectedRouteProps) => {
    if (!userIsActive) {
        return <Navigate to={redirectPath} replace />;
    }
    return children;
};

export default ProtectedRoute;