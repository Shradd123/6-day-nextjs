"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";  
import React from "react";
import NavBar from "./components/page.js";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();  

  useEffect(() => {
    async function loadData() {
      const response = await fetch("/api/products", { method: "GET" });
      const data = await response.json();
      setProducts(data);
    }
    loadData();
  }, []);

  const sampleProducts = [
    { id: 4, name: "Smartwatch", price: "₹3,999", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/o/z/-original-imah76jstup5zdww.jpeg?q=70" },
    { id: 6, name: "Gaming Mouse", price: "₹999", image: "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/G309-Lightspeed-Gaming-Mouse/gallery/g309-lightspeed-wireless-mouse-black-gallery-1.png?v=1" },
    { id: 3, name: "Laptop", price: "₹49,999", image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FL2C-A-BB-00?qlt=90&wid=1253&hei=705&extendN=0.12,0.12,0.12,0.12&bgc=FFFFFFFF&fmt=jpg" },
    { id: 2, name: "Wireless Earbuds", price: "₹2,499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2eg3F4LLptl5IJ24fDBGVfGnjlUBwMCL2A&s" },
    { id: 5, name: "Bluetooth Speaker", price: "₹1,999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzO2aUkPx4r1SIu1Q6_GPnQu-XQG-1F8Pow&s" },
    { id: 1, name: "Laptop", price: "₹84,999", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/d/4/-original-imaha9gqfarm6w2a.jpeg?q=70" }
  ];

  useEffect(() => {
    if (products.length === 0) {
      setProducts(sampleProducts);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    setSelectedProduct(product);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      router.push("/cart");
    }, 2000);
  };

  return (
    <div>
      <NavBar />
      <div className="w-full flex justify-center mt-4">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/a354077c3747d8f6.png?q=20" alt="Static Banner" className="w-full h-[250px] object-cover" />
      </div>

      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-xl font-bold mb-4">Trending Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-3 rounded-md border">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain rounded-md" />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-blue-600 font-bold">{product.price}</p>
              
              <div className="flex justify-between gap-2 mt-3">
                <button className="w-1/3 bg-blue-500 text-white py-1 rounded-md">
                  Buy
                </button>
                <button onClick={() => handleAddToCart(product)} className="w-1/3 bg-green-500 text-white py-1 rounded-md">
                  Cart
                </button>
                <button onClick={() => handleAddToWishlist(product)} className="w-1/3 bg-red-500 text-white py-1 rounded-md">
                  Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md w-80">
            <h2 className="text-lg font-bold mb-2">Added to Cart</h2>
            {selectedProduct && (
              <div className="flex items-center gap-4">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-14 h-14 object-contain rounded-md" />
                <div>
                  <p className="text-md font-semibold">{selectedProduct.name}</p>
                  <p className="text-blue-600 font-bold">{selectedProduct.price}</p>
                </div>
              </div>
            )}
            <button onClick={() => setShowPopup(false)} className="mt-4 w-full bg-blue-500 text-white py-1 rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
