import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "@/views/Home";
import Checkout from "@/views/Checkout";
import Error404 from "@/views/Error";
import ProductDetails from "@/views/Products";

import Header from "@/components/Header";
import Footer from "./components/Footer";

const RoutesComponent: React.FC = () => {
    return(
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error404 />} />
                    <Route path="/produtos/:id" element={<ProductDetails />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesComponent