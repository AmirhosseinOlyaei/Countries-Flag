import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [flag, setFlag] = useState("");
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/pratikbutani/20ded7151103bb30737e2ab1b336eb02/raw/be1391e25487ded4179b5f1c8eedb81b01226216/country-flag.json"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (event) => {
    setFlag(event.target.value);
  };

  return (
    <>
      <select
        onChange={handleChange}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-2 ring-gray-300 hover:bg-gray-50"
      >
        <option> Select Country</option>
        {countries.map((country) => (
          <option key={country.country} value={country.flag}>
            {country.country}
          </option>
        ))}
      </select>
      <div>
        {flag ? (
          <img src={flag} alt="flag" />
        ) : (
          <p className="text-gray-500">Select a country to see the flag</p>
        )}
      </div>
    </>
  );
}

export default App;
