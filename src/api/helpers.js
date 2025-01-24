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
