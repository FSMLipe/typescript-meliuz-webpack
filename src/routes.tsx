import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';

import Home from "@/views/Home";
import Checkout from "@/views/Checkout";
import Error404 from "@/views/Error";

const RoutesComponent: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error404 />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent