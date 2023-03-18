import { useEffect, useState } from "react";
import { Categories } from "./components/nav/Categories";
import { Nav } from "./components/nav/Nav";
import { Countries } from "./components/nav/Countries";
import { Genders } from "./components/nav/Genders";
import { Brands } from "./components/nav/Brands";

function App() {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Countries/>
      <Genders/>
      <Brands/>
      <Categories/>
      <h1>Hola mundo react</h1>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default App;
