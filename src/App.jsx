import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.component";
import Home from "./pages/home/HomePage";
import Coin from "./pages/Coin/CoinPage";
import Footer from "./modules/Footer/Footer";

const App = () => {
  return (
    <div className="App grid gap-[30px]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
