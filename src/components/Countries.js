import { PropTypes } from "prop-types";
import Country from "./Country";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Countries = ({ fullCountries, mood }) => {
  //console.log(fullCountries)
  const [toggle, changeToggle] = useState(false);
  const toggleList = () => {
    changeToggle(!toggle);
  };
  const curr = document.getElementById("current");
  const items = document.querySelectorAll(".dropdown-list li");
  items.forEach((item) => {
    item.onclick = () => {
      curr.textContent = item.getAttribute("data-value");
      curr.setAttribute("data-value", item.getAttribute("data-value"));
      changeToggle(!toggle);
    };
  });
  return (
    <>
      <div className="select">
        <div
          className={`current-select ${mood ? "list-dark" : null}`}
          id="current"
          data-value="default"
          onClick={toggleList}
        >
          Filter By Region
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          style={mood ? { color: "#ffffff" } : null}
        />
        <ul
          className={`dropdown-list ${toggle ? " opt-show" : null} ${
            mood ? "list-dark" : null
          }`}
        >
          <li data-value="Africa">Africa</li>
          <li data-value="America">America</li>
          <li data-value="Asia">Asia</li>
          <li data-value="Europe">Europe</li>
          <li data-value="Oceania">Oceania</li>
        </ul>
      </div>
      <div className="countries">
        {curr?.getAttribute("data-value") === "default"
          ? fullCountries.map((country, index) => {
              return <Country country={country} mood={mood} key={index} />;
            })
          : fullCountries
              .filter((country) => {
                if (curr.getAttribute("data-value") === "America") {
                  return country.region === "Americas";
                } else {
                  return country.region === curr.textContent;
                }
              })
              .map((country, index) => {
                return <Country country={country} mood={mood} key={index} />;
              })}
      </div>
    </>
  );
};
export default Countries;
Countries.propTypes = {
  fullCountries: PropTypes.array,
  mood: PropTypes.bool,
};
