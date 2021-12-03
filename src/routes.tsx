import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';

import Home from "@/views/Home";
import Checkout from "@/views/Checkout";
import Error404 from "@/views/Error";

import Header from "@/components/Header";
import Footer from "./components/Footer";

const RoutesComponent: React.FC = () => {
    return(
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error404 />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesComponent