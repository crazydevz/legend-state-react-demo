import { useObservable } from "@legendapp/state/react";
import SearchBar from "./Searchbar";
import ProductTable from "./ProductTable";

function FilterableProductTable({ products }) {
  const filterText = useObservable("");
  const inStockOnly = useObservable(false);

  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;
