import React from "react";

const Button = ({ result, newResult }) => {
  return <button onClick={() => newResult(result.name)}>Show</button>;
};

const Countries = ({ result, newResult }) => {
  if (result.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (result.length > 1) {
    return result.map(country => (
      <li key={country.name}>
        {country.name} <Button result={country} newResult={newResult} />
      </li>
    ));
  }
  return result.map(country => (
    <div key="country">
      <h1 key={country.name}>{country.name}</h1>
      <p key={country.capital}>Capital: {country.capital}</p>
      <p key={country.population}>Population: {country.population}</p>
      <h2 key="languages">Languages</h2>
      {country.languages.map(language => (
        <p key={language.name}>{language.name}</p>
      ))}
      <p key={country.flag}>
        <img src={country.flag} alt="flag" />
      </p>
    </div>
  ));
};
export default Countries;
