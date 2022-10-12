import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// assets
import "./navbar.css";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { UserAuth } from "../../auth/AuthContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="navbar__styled rounded drop-shadow-lg flex items-center justify-between h-20 font-bold p-5">
      {/* navbrand */}
      <Link to="/">
        <h1 className="text-2xl">/in/dhimasb/</h1>
      </Link>

      {/* button */}
      {user?.email ? (
        <div>
          <Link to="/account" className="p-4">
            Account
          </Link>
          <button
            onClick={handleSignOut}
            className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl font-normal"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="hidden md:block">
          <Link to="/signin" className="p-4 hover:text-accent">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="btn__color text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* menu mobile */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-10">
        {nav ? <IoClose size={25} /> : <FiMenu size={25} />}
      </div>

      {/* responsive menu */}
      <div
        className={
          nav
            ? "bg__styled md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90vh] ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="py-6">
            <Link to="/account">Account</Link>
          </li>
        </ul>
        <div className="p-4 flex flex-col w-full">
          <Link to="/signin">
            <button className="w-full my-2 p-3 text-primary border border-secondary rounded-2xl shadow-xl">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full my-2 p-3 btn__color text-btnText rounded-2xl shadow-xl">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
