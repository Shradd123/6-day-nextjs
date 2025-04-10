"use client";
import React, { createContext, useState } from "react";
import { useRouter } from "next/navigation";
export const ecomContext = createContext();  

export default function EcomContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [favourites, setFavourites] = useState([]);

    function addProductToCart(product) {
        setCart([...cart, product]);
    }

    function removeProductFromCart(productId) {
        setCart(cart.filter(item => item.id !== productId)); 
    }

    return (
        <ecomContext.Provider value={{ cart, favourites, addProductToCart, removeProductFromCart, setFavourites }}>
            {children}
        </ecomContext.Provider>
    );
}