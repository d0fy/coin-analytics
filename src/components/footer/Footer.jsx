import React from "react";

// assets
import "./footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaTiktok, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer__styled rounded drop-shadow-lg my-5 py-8 px-5">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Me</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About Me</li>
              <li className="text-sm py-2">Hire Me</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <p className="text-center md:text-right">
                Sign Up for Crypto News
              </p>
              <div className="py-4">
                <form>
                  <input
                    className="bg-transparent border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <button className="btn__color text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2">
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-accent">
                <AiOutlineInstagram size={24} />
                <FaFacebook size={24} />
                <FaTwitter size={24} />
                <FaTiktok size={24} />
                <FaGithub size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">API from Coin Gecko</p>
    </div>
  );
};

export default Footer;
