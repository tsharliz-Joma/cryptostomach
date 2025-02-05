import axios from "axios";

export const fetchCoins = async ({ currency }) => {
  const options = {
    Authorization: `Bearer ${import.meta.env.VITE_COIN_GECKO_API_KEY}`,
    headers: { accept: "application/json" },
  };
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCoinById = async (coinId) => {
  const options = {
    Authorization: `Bearer ${import.meta.env.VITE_COIN_GECKO_API_KEY}`,
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": `${import.meta.env.VITE_COIN_GECKO_API_KEY}`,
    },
  };
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchHistoricalData = async (coinId, currency) => {
  const options = {
    Authorization: `Bearer ${import.meta.env.VITE_COIN_GECKO_API_KEY}`,
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": `${import.meta.env.VITE_COIN_GECKO_API_KEY}`,
    },
  };
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
