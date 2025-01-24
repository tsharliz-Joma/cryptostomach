import { useContext } from "react";
import { CoinContext } from "../context/ContextProvider";

export const useCoinContext = () => useContext(CoinContext);
