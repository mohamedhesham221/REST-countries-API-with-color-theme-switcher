import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Data from "../assets/data.json";
import Countries from "./Countries";
import { useEffect, useState } from "react";
const SearchInp = ({ mood }) => {
  const [country, setCountry] = useState([]); 
  const searchCountry = (e) => {
    const filterd = Data.filter((x) => {
      return x.name.toLocaleLowerCase().includes(e.target.value);
    })
    setCountry(filterd);
  };
  useEffect(() => {
    const input = document.querySelector(".search-country input");
    if (!input.value.length) {
      setCountry(Data);
    }
  },[])
  return (
    <>
      <div
        className={
          mood ? "search-country inp-dark" : "search-country inp-light"
        }
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={mood ? { color: "#ffffff" } : { color: "#bdbdbd" }}
        />
        <input
          type="text"
          placeholder="Search for a country ..."
          aria-label="search country"
          style={mood ? { color: "#ffffff" } : null}
          onInput={searchCountry}
        />
      </div>
      <Countries fullCountries={country} mood={mood}/>
    </>
  );
};
export default SearchInp;

SearchInp.propTypes = {
  mood: PropTypes.bool,
};
