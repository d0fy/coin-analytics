import React from "react";
import CoinSearch from "../../components/coin-search/CoinSearch";
import Trending from "../../components/trending/Trending";

const Dashboard = ({ coins }) => {
  return (
    <div>
      <Trending />
      <CoinSearch coins={coins} />
    </div>
  );
};

export default Dashboard;
