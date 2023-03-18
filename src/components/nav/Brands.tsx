import { useState, useEffect } from "react";

export const Brands = () => {
  const [brands, setBrands] = useState<any[]>([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "brands";

  const getBrands = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setBrands(data);
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div>
      <h1 className="text-primary">Lista de Marcas</h1>
      <ul  className="categorias">
        {brands.map((item) => (
          <li className="li" key={item.id}>
            <h3 id="name" className="text-danger">{item.name}</h3>
          </li>
        ))}
      
      </ul>
    </div>
  );
};
