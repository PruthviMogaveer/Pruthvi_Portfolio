import React from "react";
import { pageNotFound } from "../assets";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex justify-start space-x-40 items-center max-md:flex-col-reverse max-md:space-x-0">
        <div>
          <img src={pageNotFound} alt="Page not found" className="w-96" />
        </div>
        <div className="text-center max-md:mb-10">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Page not found</p>
          <a href="/" className="text-blue-500 hover:underline">
            Go back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
