import React, { useEffect, useState } from "react";

// style
import "./App.css";

// route
import { Route, Routes } from "react-router-dom";

// pages
import Navbar from "./components/navbar/Navbar";
import Account from "./pages/account/Account";
import Dashboard from "./pages/dashboard/Dashboard";
import DetailCoin from "./pages/detail-coin/DetailCoin";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import useWindowDimensions from "./utils/getDimension";

// axios
import axios from "axios";
import Footer from "./components/footer/Footer";
import { AuthContextProvider } from "./auth/AuthContext";

function App() {
  const { width, height } = useWindowDimensions();
  const [coins, setCoins] = useState([]);

  const urlAPI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios.get(urlAPI).then((res) => {
      setCoins(res.data);
      console.log(res.data);
    });
  }, [urlAPI]);

  return (
    <div className="App sm:px-20">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard coins={coins} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<DetailCoin />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
