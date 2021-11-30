import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from "./App";
import Error404 from "./Error";

const RoutesComponent: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent