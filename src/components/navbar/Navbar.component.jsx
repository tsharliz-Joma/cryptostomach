import { useState } from "react";
import { useCoinContext } from "../../hooks/useCoinContext.js";
import { MdArrowOutward } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useCoinContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCurrencyChange = (event) => {
    switch (event.target.value) {
      case "aud":
        {
          setCurrency({ name: "aud", symbol: "$" });
        }
        break;
      case "usd":
        {
          setCurrency({ name: "usd", symbol: "$" });
        }
        break;
      case "eur":
        {
          setCurrency({ name: "eur", symbol: "€" });
        }
        break;
      default: {
        setCurrency({ name: "aud", symbol: "$" });
      }
    }
  };

  return (
    <div className="navbar z-10 flex flex-wrap justify-between items-center py-4 px-5 border-b-2 border-[#3c3c3c] text-[#ddd]">
      <div className="flex gap-5">
        <FaBitcoin className="text-[#f7931a] text-5xl" />
        <h2 className="text-3xl text-bold ">Crypto Clause</h2>
        {/* <img className="w-40" src={logo} alt="Logo" /> */}
      </div>
      <div>
        <ul className={`mobile:hidden md:flex gap-10 list-none w-full md:w-auto`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div className="dropdown mobile:w-52 flex justify-end dropdown-bottom md:hidden">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-primary text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RxHamburgerMenu />
          </button>
          <ul
            tabIndex={0}
            className={`w-52 dropdown-content menu gap-1 py-2 grid bg-base-100 ${
              menuOpen ? "" : "hidden"
            } md:flex  w-full md:w-auto`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Features">Features</Link>
            </li>
            <li>
              <Link to="/Pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <select
          onChange={handleCurrencyChange}
          className="text-white py-1 px-2 border-2 rounded-md border-white bg-transparent"
          name="currency"
          id=""
        >
          <option className="bg-[#09005c]" value="aud">
            AUD
          </option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
        <button className="flex items-center gap-2.5  px-6 py-2.5 text-md rounded-[20px] text-[#393939] bg-white border-none">
          Sign up
          <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
