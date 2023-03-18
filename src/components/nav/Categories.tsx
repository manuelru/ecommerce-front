import { useState, useEffect } from "react";

export const Categories = () => {
  const [categories, setCategories] = useState<any[]>([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "brands";

  const getCategories = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <h1 className="text-primary">Lista de Marcas</h1>
      <ul  className="categorias">
        {categories.map((item) => (
          <li className="li" key={item.id}>
            <h3 id="name" className="text-danger">{item.name}</h3>
          </li>
        ))}
      
      </ul>
    </div>
  );
};
