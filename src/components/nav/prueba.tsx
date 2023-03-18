import { useState, useEffect } from "react";

export const Prueba = () => {
  const [prueba, setPrueba] = useState<any[]>([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "preuba";

  const getPrueba = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setPrueba(data);
  };

  useEffect(() => {
    getPrueba();
  }, []);

  return (
    <div>
      <h1 className="text-primary">Lista de Marcas</h1>
      <ul  className="categorias">
        {prueba.map((item) => (
          <li className="li" key={item.id}>
            <h3 id="name" className="text-danger">{item.name}</h3>
          </li>
        ))}
      
      </ul>
    </div>
  );
};
