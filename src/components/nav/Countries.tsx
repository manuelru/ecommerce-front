import { useState, useEffect } from "react";

export const Countries = () => {
  const [countries, setCountries] = useState<any[]>([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "countries";

  const getCountries = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <h1 className="text-primary">Lista de paises</h1>
      <ul  className="countries">
        {countries.map((item) => (
          <li className="li" key={item.id}>
            <h3 id="name" className="text-danger" >{item.name}</h3>
          </li>
        ))}
      
      </ul>
    </div>
  );
};
