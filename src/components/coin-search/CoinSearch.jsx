import React, { useState } from "react";

// assets
import "./coinsearch.css";
import CoinItem from "../coin-item/CoinItem";

const CoinSearch = ({ coins }) => {
  const [searchData, setSearchData] = useState("");

  return (
    <div className="coin-search__styled rounded drop-shadow-lg my-5 p-5">
      <div className="flex flex-col md:flex-row justify-between pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold ">Explore Coins</h1>
        <form>
          <input
            onChange={(e) => setSearchData(e.target.value)}
            className="w-full bg-transparent border border-input px-4 py-2 rounded-2xl shadow-xl"
            type="text"
            placeholder="Search your coin"
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b h-[50px]">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchData === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchData.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
