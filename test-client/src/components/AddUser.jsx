import React from "react";
import opsa from "../assest/image copy.png";
import { Link } from "react-router";
import { toast } from "react-toastify";

const AddUser = ({ items, setUser, user }) => {
  const deleteHandel = (id) => {
    console.log("Delete Item Now", id);

    fetch(`http://localhost:3000/user/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Delete Now This id :", data);
        if (data.deletedCount) {
          toast.success("Delete Now This Items");
          const newUser = user.filter((one) => one._id !== id);
          setUser(newUser);
        }
      });
  };

  return (
    <div className="max-w-md w-full h-[210px] bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-400 shadow-md">
          <img className="w-full h-full object-cover" src={opsa} alt="avatar" />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{items.name}</h2>
          <p className="text-sm text-gray-700">{items.email}</p>
        </div>

        <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-200 text-purple-800">
          {items.year}
        </span>
      </div>

      {/* Bottom Buttons */}
      <div className="flex w-full items-center justify-between mt-8">
        <Link to={`/edit/${items._id}`}>
          <button className="w-full px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold shadow-md hover:bg-purple-700 hover:-translate-y-[2px] transition-all duration-200">
            Edit
          </button>
        </Link>
        <Link
          to={`/detlics/${items._id}`}
          className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow-md hover:bg-blue-700 hover:-translate-y-[2px] transition-all duration-200 mx-2 text-center"
        >
          Details
        </Link>

        <button
          onClick={() => deleteHandel(items._id)}
          className="w-full px-4 py-2 rounded-lg border border-red-400 text-red-600 text-sm font-semibold hover:bg-red-50 hover:-translate-y-[2px] transition-all duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddUser;
