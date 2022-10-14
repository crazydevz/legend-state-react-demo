function SearchBar({ filterText, inStockOnly }) {
  const onFilterTextChange = (evt) => filterText.set(evt.target.value);
  const onInStockOnlyChange = (evt) => inStockOnly.set(evt.target.checked);

  return (
    <form>
      <input
        type="input"
        value={filterText.get()}
        placeholder="Search..."
        onChange={onFilterTextChange}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly.get()}
          onChange={onInStockOnlyChange}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
