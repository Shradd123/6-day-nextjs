import React from 'react';

export default function () {
  return (
    <div>
      <nav className="flex flex-row items-center space-x-4 p-4 bg-yellow-700 justify-center">
        <img 
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" 
          alt="Logo"
        />
        <div className="flex items-center space-x-2">
          <input
            className="w-[500px] bg-[#808080] border shadow rounded p-2" 
            placeholder="Search for products, brands and more"
            type="text"
          />
          <button className="bg-white text-blue-700 rounded px-4 py-2 flex items-center justify-center">
            Search
          </button>
        </div>
        <button className="px-4 py-2 text-white bg-black">Home</button>
        <button className="px-4 py-2 text-white bg-red-500 ">Support</button>
        <a href="/login">
          <button className="px-4 py-2 text-white bg-green-500">Login</button>
        </a>
      </nav>
    </div>
  );
}