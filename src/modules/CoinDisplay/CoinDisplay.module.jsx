import PropTypes from "prop-types";

const CoinDisplay = ({ currency, coins }) => {
 
  return (
    <div className="m-auto max-w-screen-md bg-gradient-to-r from-purple-500/15 to-purple-700/15 rounded-t-[15px] shadow-md relative">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-tableLayoutCol py-4 px-5 text-sm  sm:text-base border-b-2 border-[#3c3c3c] items-center">
        <p>#</p>
        <p>Coins</p>
        <p className="hidden sm:block">Price</p>
        <p className="text-right sm:text-center">24H Change</p>
        <p className="hidden md:block text-right">Market Cap</p>
      </div>
      {coins.slice(0, 10).map((coin, index) => (
        <div
          key={coin.id}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-tableLayoutCol py-4 px-5 border-b-2 border-[#3c3c3c] items-center"
        >
          <p>{index + 1}</p>
          <div className="flex items-center gap-2">
            <img className="w-6 h-6 sm:w-8 sm:h-8" src={coin.image} alt={`${coin.name}-image`} />
            <p className="truncate">{coin.name}</p>
          </div>
          <p className="hidden sm:block">
            {currency.symbol}
            {coin.current_price.toLocaleString()}
          </p>
          <p
            className={`text-right sm:text-center ${
              coin.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className="hidden md:block text-right">
            {currency.symbol}
            {coin.market_cap.toLocaleString()}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

CoinDisplay.propTypes = {
  coins: PropTypes.array.isRequired,
  currency: PropTypes.object.isRequired,
}

export default CoinDisplay;
