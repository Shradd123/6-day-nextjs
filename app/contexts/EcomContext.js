import React, { createContext, useState } from "react";
    const ecomContext = createContext();
    export default function EcomContextProvider({ children }) {
        const [cart, setCart] = useState([]);
        const [favourites, setProducts] = useState([]);
    function addProductToCart(product){
        setCart([...cart, product]);
    }
    function removeProductFromCart(productId){
        setCart(cart.filter(item => item.id !== product.id));
    }
    return (
        <ecomContext.Provider value={{ cart, favourites, addProductToCart, removeProductFromCart, setProducts }}>
            {children}
        </ecomContext.Provider>
    );
    
}