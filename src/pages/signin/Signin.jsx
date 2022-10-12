import React, { useState } from "react";

// assets
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../auth/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="my-4">
            <label htmlFor="">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-transparent border border-input rounded-2xl"
                type="email"
                placeholder="enter your email"
              />
              <MdEmail className="absolute right-3 top-3" size={20} />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="">Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-transparent border border-input rounded-2xl"
                type="password"
                placeholder="enter your password"
              />
              <IoMdLock className="absolute right-3 top-3" size={20} />
            </div>
          </div>
          <button className="w-full my-2 p-3 btn__color text-btnText rounded-2xl shadow-xl">
            Sign In
          </button>
        </form>
        <p className="my-4 text-center">
          Don't have an account?{" "}
          <Link className="text-blue-500" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
