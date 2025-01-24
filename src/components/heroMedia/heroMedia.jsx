import PropTypes from "prop-types";

const HeroMedia = ({ media }) => {
  return (
    <div className="h-[50vh] relative">
      <div className="w-auto h-full overflow-hidden">
        <video src={media} autoPlay loop muted playsInline />
      </div>
    </div>
  );
};

HeroMedia.propTypes = {
  media: PropTypes.string.isRequired,
  mediaType: PropTypes.string,
};

export default HeroMedia;
