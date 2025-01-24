import PropTypes from "prop-types";

const SearchForm = ({ onSubmit, onChange, allCoins }) => {
  
  return (
    <form onSubmit={onSubmit} className="p-[8px] bg-white rounded-[10px] flex gap-[10px]">
      <input
        list="crypto-list"
        type="text"
        placeholder="Search crypto..."
        className="input input-bordered grow outline-none pl-[10px]"
        onChange={onChange}
        required
      />
      <datalist id="crypto-list">
        {allCoins.map((coin, index) => (
          <option key={index} value={coin.name} />
        ))}
      </datalist>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  allCoins: PropTypes.array.isRequired,
};

export default SearchForm;
