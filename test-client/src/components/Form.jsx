import React, { use, useState } from "react";
import AddUser from "./AddUser";

const promiseUser = fetch("http://localhost:3000/user").then((res) =>
  res.json()
);
const Form = () => {
  const creatUser = use(promiseUser);
  console.log(creatUser);
  const [user, setUser] = useState(creatUser);

  const handelSubmite = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const year = e.target.year.value;
    const email = e.target.email.value;
    const userData = { year, name, email };
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("My Post Reques Now This Filed", data);
        if (data.insertedId) {
          userData._id = data.insertedId;
          const newArray = [...user, userData];
          setUser(newArray);
        }
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 my-16">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Create User
        </h2>

        <form onSubmit={handelSubmite} className="space-y-4 h-[310px]">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
            />
          </div>

          {/* Year */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Year</label>
            <input
              type="number"
              name="year"
              placeholder="e.g. 2025"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            Create User
          </button>
        </form>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {user.map((items) => (
          <AddUser items={items} key={items._id}></AddUser>
        ))}
      </div>
    </div>
  );
};

export default Form;
