import HeroMedia from "../../components/heroMedia/heroMedia";
import SearchForm from "../SearchForm/SeachForm.component";
import Video from "/hero-video.mp4";
import PropTypes from "prop-types";

const Hero = ({ onChange, onSubmit, allCoins }) => {
  return (
    <div className="hero text-center relative">
      <HeroMedia media={Video} />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center"></div>
      <div className="hero-content grid gap-[30px] ">
        <div className="text-center">
          <h1 className="text-bold text-6xl leading-[120%]">
            Crypto Clause
            <br />
            Price Pointer
          </h1>
          <p className="text-lg color-[#e3e3e3] leading-[1.5] ">
            Keep you eyes on the price, check in on the market
            <br />
            Get started by signing up.
          </p>
        </div>
        <SearchForm allCoins={allCoins} onChange={onChange} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

Hero.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  allCoins: PropTypes.array.isRequired,
};

export default Hero;
