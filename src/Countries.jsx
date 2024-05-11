import React, { useState, useEffect } from "react";

const Tile = ({ flagUrl, name, altName }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "8px",
        flexDirection: "column",
        width: "200px",
      }}
    >
      <img src={flagUrl} alt={altName} style={{ width: "100px", height: "100px" }} />
      <h2>{name}</h2>
    </div>
  );
};

function Countries() {
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of countries
        setCountries(data);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      {countries.map((country) => (
        <Tile key={country.cca3} flagUrl={country.flags.png} name={country.name.common} altName={country.flags.svg} />
      ))}
    </div>
  );
}

export default Countries;
