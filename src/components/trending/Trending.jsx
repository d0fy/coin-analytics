import React, { useState, useEffect } from "react";
import axios from "axios";
import "./trending.css";

// assets

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const urlAPI = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(urlAPI).then((res) => {
      setTrending(res.data.coins);
      console.log(res.data.coins);
    });
  }, []);

  return (
    <div className="trending__styled rounded drop-shadow-lg my-5 py-8 px-5">
      <h1 className="text-2xl font-bold py-4">Trending Coins</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((coin, x) => (
          <div
            key={x}
            className="trending-list__styled rounded-lg drop-shadow-lg flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex">
                <img
                  className="mr-4 rounded-full"
                  src={coin.item.small}
                  alt=""
                />
                <div>
                  <p className="font-bold">{coin.item.name}</p>
                  <p className="">{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-4 mr-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt=""
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
