const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
      <label>
        <span>Find contacts by</span>
        <input value={filter} onChange={e => setFilter(e.target.value)} />
      </label>
    </div>
  );
};

export default SearchBox;
