import React from "react";
import { Link, useLoaderData } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Detlics = () => {
  const item = useLoaderData();
  console.log(item);
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="min-h-[800px] flex justify-center items-center">
        <div className="w-[400px]  mx-auto bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
            User Details
          </h2>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-purple-300 to-pink-300 mb-5" />

          {/* Info List */}
          <div className="space-y-3 text-gray-800 text-[15px]">
            <p>
              <span className="font-semibold">ID:</span> {item._id}
            </p>
            <p>
              <span className="font-semibold">Name:</span> {item.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {item.email}
            </p>
            <p>
              <span className="font-semibold">Year:</span> {item.year}
            </p>
          </div>

          {/* Button */}
          <Link to="/user">
            <button className="w-full mt-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-md hover:opacity-90 transition-all duration-200">
              Back to Home
            </button>
          </Link>
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Detlics;
