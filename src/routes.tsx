import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./views/Home";
import Error404 from "./views/Error";

const RoutesComponent: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent