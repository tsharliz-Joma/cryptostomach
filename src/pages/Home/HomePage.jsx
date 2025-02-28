import { useState, useEffect } from "react";
import Hero from "../../modules/Hero/Hero.module";
import CoinDisplay from "../../modules/CoinDisplay/CoinDisplay.module";
import { useCoinContext } from "../../hooks/useCoinContext";
import { Suspense } from "react";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinnner";

const HomePage = () => {
  const { allCoins, currency } = useCoinContext();
  const [input, setInput] = useState("");
  const [displayCoins, setDisplayCoins] = useState([]);

  useEffect(() => {
    setDisplayCoins(allCoins);
  }, [allCoins]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const coins = allCoins.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoins(coins);
  };

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setInput(query);
    const filteredCoins = allCoins.filter((coin) => coin.name.toLowerCase().includes(query));
    setDisplayCoins(filteredCoins);
  };

  return (
    <div className="pb-20 grid relative">
      <Hero onChange={handleChange} onSubmit={handleSubmit} allCoins={allCoins} />
      <Suspense fallback={<LoadingSpinner />}>
        <CoinDisplay currency={currency} coins={displayCoins} />
      </Suspense>
    </div>
  );
};

export default HomePage;
