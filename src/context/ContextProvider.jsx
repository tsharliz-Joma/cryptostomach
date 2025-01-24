import { createContext, useEffect, useState, useCallback, useMemo } from "react";
import { fetchCoins } from "../api/helpers";
import PropTypes from "prop-types";

export const CoinContext = createContext();

const ContextProvider = ({ children }) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({
    name: "aud",
    symbol: "$",
  });

  const stableCurrency = useMemo(() => currency, [currency]);

  const fetchCoinsCallback = useCallback(() => {
    fetchCoins({ currency: stableCurrency }).then((data) => setAllCoins(data));
  }, [stableCurrency]);

  useEffect(() => {
    fetchCoinsCallback();
  }, [fetchCoinsCallback]);

  const contextValue = { allCoins, currency, setCurrency };

  return <CoinContext.Provider value={contextValue}>{children}</CoinContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
