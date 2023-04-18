import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Country = ({ country, mood}) => {
  const navigate = useNavigate();
  const sendCountry = () => {
    navigate("country-base", {
      state: country
    })
    const backBtn = document.querySelector(".back");
    window.scrollTo({
      top: backBtn?.getBoundingClientRect().top + window.scrollY,
      behavior: "smooth"
    }) 
  }
  return (
    <>
      <div className={`country ${mood ? "dark-country": null}`} onClick={sendCountry}>
        <div className="country-flag">
          <img src={country.flags.png} alt={country.name + "'s flag"} />
        </div>
        <div className="country-desc">
          <p>{country.name}</p>
          <p>
            <span>Population:</span>{" "}
            {Intl.NumberFormat().format(country.population)}
          </p>
          <p>
            <span>Region:</span> {country.region}
          </p>
          <p>
            <span>Capital:</span> {!country.capital? "Unknown" : country.capital}
          </p>
        </div>
      </div>
    </>
  );
};
export default Country;
Country.propTypes = {
  country: PropTypes.object,
};
