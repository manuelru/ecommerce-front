import { useState, useEffect } from "react";

export const Genders = () => {
    
  const [genders, setGenders] = useState<any[]>([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "genders";

  const getGenders = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setGenders(data);
  };

  useEffect(() => {
    getGenders();
  }, []);

  return (
    <div>
      <h1 className="text-primary">Lista de Generos</h1>
      <ul  className="countries">
        {genders.map((item) => (
          <li className="li"  key={item.id}>
            <h3 id="name" className="text-danger">{item.name}</h3>
          </li>
        ))}
      
      </ul>
    </div>
  );
};
