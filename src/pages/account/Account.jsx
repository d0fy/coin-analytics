import React from "react";
import SavedCoin from "../../components/saved-coin/SavedCoin";
import { UserAuth } from "../../auth/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center footer__styled rounded drop-shadow-lg my-5 py-8 px-5">
          <div>
            <h1 className="font-bold text-2xl">Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleSignOut}
              className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center footer__styled rounded drop-shadow-lg my-5 py-8 px-5">
          <div className="w-full min-h-[300px]">
            <h1 className="text-2xl font-bold">Watch List</h1>
            <SavedCoin />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Account;
