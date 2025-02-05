import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.component";
import Home from "./pages/Home/HomePage";
import Coin from "./pages/Coin/CoinPage";
import Footer from "./modules/Footer/Footer";

const App = () => {
  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
