import { enableLegendStateReact } from "@legendapp/state/react";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";
import { PRODUCTS } from "./constants/product-data";

enableLegendStateReact();

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
