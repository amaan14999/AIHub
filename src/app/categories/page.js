import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-lg text-gray-700 mt-2">
            But don't worry, you can find plenty of other things on our
            homepage.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-main-color hover:bg-main-dark text-black font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
