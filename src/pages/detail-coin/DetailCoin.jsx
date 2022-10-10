import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// assets
import "./detail-coin.css";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";

const DetailCoin = () => {
  const [detailCoin, setDetailCoin] = useState({});

  const params = useParams();

  const urlAPI = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(urlAPI).then((res) => {
      setDetailCoin(res.data);
      console.log(res.data);
    });
  }, [urlAPI]);

  return (
    <div className="detail__styled rounded drop-shadow-lg my-5 py-8 px-5">
      <div className="flex py-8">
        <img className="w-20 mr-8" src={detailCoin.image?.large} alt="" />
        <div>
          <p className="text-3xl font-bold">{detailCoin?.name} Price</p>
          <p>({detailCoin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between ">
            {detailCoin.market_data?.current_price ? (
              <p className="text-3xl font-bold">
                ${detailCoin.market_data.current_price.usd.toLocaleString()}
              </p>
            ) : null}
            <p>7 Days</p>
          </div>
          <div>
            <Sparklines data={detailCoin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Market Cap</p>
              {detailCoin.market_data?.market_cap ? (
                <p>${detailCoin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm text-right">Volume 24h</p>
              {detailCoin.market_data?.market_cap ? (
                <p>
                  ${detailCoin.market_data.total_volume.usd.toLocaleString()}
                </p>
              ) : null}
            </div>
          </div>

          {/* about detail */}
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">24h High</p>
              {detailCoin.market_data?.high_24h ? (
                <p>${detailCoin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm text-right">24h Low</p>
              {detailCoin.market_data?.low_24h ? (
                <p>${detailCoin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
          {/* end about detail */}
        </div>

        {/* stats */}
        <div>
          <p className="text-xl font-bold">Market Stats</p>

          {/* row1 */}
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Market Rank</p>
              {detailCoin.market_cap_rank}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Hashing Algorithm</p>
              {detailCoin.hashing_algorithm ? (
                <p>{detailCoin.hashing_algorithm}</p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Trust Score</p>
              {detailCoin.tickers ? (
                <p>{detailCoin.liquidity_score.toFixed(2)}</p>
              ) : null}
            </div>
          </div>

          {/* row2 */}
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Price Change(24h)</p>
              {detailCoin.market_data ? (
                <p>
                  {detailCoin.market_data.price_change_percentage_24h.toFixed(
                    2
                  )}
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change(7d)</p>
              {detailCoin.market_data ? (
                <p>
                  {detailCoin.market_data.price_change_percentage_7d.toFixed(2)}
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change(14d)</p>
              {detailCoin.market_data ? (
                <p>
                  {detailCoin.market_data.price_change_percentage_14d.toFixed(
                    2
                  )}
                </p>
              ) : null}
            </div>
          </div>

          {/* row3 */}
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Price Change (30d)</p>
              {detailCoin.market_data ? (
                <p>
                  {detailCoin.market_data.price_change_percentage_30d.toFixed(
                    2
                  )}
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (60d)</p>
              {detailCoin.market_data ? (
                <p>
                  {detailCoin.market_data.price_change_percentage_60d.toFixed(
                    2
                  )}
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (1y)</p>
              {detailCoin.market_data ? (
                <p>
                  {detailCoin.market_data.price_change_percentage_1y.toFixed(2)}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-around p-8 text-accent">
            <FaTwitter />
            <FaFacebook />
            <FaGithub />
            <FaReddit />
          </div>
        </div>
        {/* stats end */}
      </div>

      {/* description */}
      <div className="py-4">
        <p className="text-xl font-bold">About {detailCoin.name}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              detailCoin.description ? detailCoin.description.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
  );
};

export default DetailCoin;
