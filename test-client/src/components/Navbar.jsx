import React from "react";
import { NavLink } from "react-router";
import loig from "../assest/image.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 py-4 shadow-sm ">
      <div className="w-11/12 mx-auto flex">
        <div className="navbar-start">
          <div className="dropdown"></div>
          <img className="w-14 h-14" src={loig}></img>
          <span className="text-xl font-semibold ml-2">Test Server </span>
        </div>
        <div className="navbar-center ">
          <ul className=" px-1 flex gap-6 font-semibold text-xl">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user">User Creat</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-secondary">Client Side</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
