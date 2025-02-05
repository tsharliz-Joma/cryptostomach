import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinById, fetchHistoricalData } from "../../api/helpers";
import { useEffect } from "react";
import { useCoinContext } from "../../hooks/useCoinContext";
import PriceGraph from "../../components/priceGraph/PriceGraph";

const Coin = () => {
  const { currency } = useCoinContext();
  const [coin, setCoin] = useState({});
  const [historicalData, setHistoricalData] = useState();
  const { coinId } = useParams();

  useEffect(() => {
    fetchCoinById(coinId)
      .then((data) => {
        setCoin(data);
        return fetchHistoricalData(coinId, currency);
      })
      .then((data) => setHistoricalData(data));
  }, [coinId, currency]);

  if (!coin) return <p>Loading...</p>;

  return (
    <div
      className="my-20 container  mx-auto p-6 desktop:max-w-4xl 
        bg-white/30 dark:bg-gray-900/30 
        backdrop-blur-md shadow-lg 
        border border-white/10 rounded-xl"
    >
      {/* Coin Header */}
      <div className="flex items-center gap-4">
        <img src={coin.image?.large} alt={coin.name} className="w-20 h-20" />
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {coin.name} ({coin.symbol?.toUpperCase()})
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{coin.category}</p>
        </div>
      </div>
      {/* Price & Market Data */}
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg grid gap-2">
        <p className="text-2xl font-semibold text-green-500">
          💰 ${coin.market_data?.current_price.usd.toLocaleString()}
        </p>
        <p
          className={`mt-2 text-lg ${
            coin.market_data?.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {coin.market_data?.price_change_percentage_24h >= 0 ? "📈" : "📉"} 24h Change:{" "}
          {coin.market_data?.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
      {/* Description */}
      <div className="mt-6 grid gap-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">📜 Description</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 tracking-[0.035rem] leading-5">
          {coin.description?.en.split(". ")[0]}.
        </p>
      </div>
      {/* Historical Chart Placeholder */}
      <div className="mt-6 grid gap-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">📊 Price History</h2>
        <PriceGraph historicalData={historicalData} />
      </div>
    </div>
  );
};

export default Coin;
