import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="navbar  bg-black text-white ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/viewblogs"}>Blogs</Link>
              <ul className="p-2">
                <li>
                  <Link to={"/viewblogs"}>View Blogs</Link>
                </li>
                <li>
                  <Link to={"/createblogs"}>Create Blogs </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl w-45 bg-white">
          <img width={90} src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center  hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-md font-bold  ">
          <li className="hover:text-red-300 ">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="hover:text-red-300 ">
            <Link to={"/createblogs"}>Create Blogs </Link>
          </li>

          <li className="hover:text-red-300 ">
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/contactus"} className="btn">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
