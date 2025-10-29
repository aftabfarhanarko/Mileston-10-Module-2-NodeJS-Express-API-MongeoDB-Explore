import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const EditeUser = () => {
  const data = useLoaderData();
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const year = e.target.year.value;
    const email = e.target.email.value;
    const userData = { year, name, email };
    console.log(userData);

    fetch(`http://localhost:3000/user/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((updata) => {
        if (updata.modifiedCount) {
          toast.success("User Data Updeat Complete");
        }
      });
  };

  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="my-40">
        <div className="max-w-md  mx-auto bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Edit User
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={data.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={data.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Year
              </label>
              <input
                type="text"
                name="year"
                defaultValue={data.year}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 mt-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-200"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </div>
  );
};

export default EditeUser;
