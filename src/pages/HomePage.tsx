import React, {useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

const HomePage : React.FC = () => {
    const [user] = useState(false);
    return (
        <Routes>
            <Route path="/" element={!user && <Navigate to="/register" replace={true} />} />
        </Routes>

    );
};

export default HomePage;