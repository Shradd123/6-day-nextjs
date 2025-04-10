"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Logged Successfully");
        router.push("/home");
    };

    return (
        <div className="flex flex-col min-h-screen bg-blue-500 w-full items-center justify-center">
            <div className="bg-white w-[400px] h-[400px] rounded-lg shadow-lg flex flex-col items-center justify-center p-6">
                <img 
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" 
                    alt="Flixcart Logo"
                    className="w-35 mb-4"
                />
                <h1 className="text-lg font-bold mb-4">Login Page</h1>
                <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Email Address"
                        required
                    />
                    <input 
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Password"
                        required
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                        aria-label="Login Button"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}