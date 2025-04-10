"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCart);
    };

    fetchCart();

    // Listen for storage changes
    window.addEventListener("storage", fetchCart);
    
    return () => {
      window.removeEventListener("storage", fetchCart);
    };
  }, []);

  // Remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-md" />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-blue-600 font-bold">{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Remove ❌
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <Link href="/checkout">
          <button className="mt-4 w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition">
            Proceed to Checkout ✅
          </button>
        </Link>
      )}
    </div>
  );
}