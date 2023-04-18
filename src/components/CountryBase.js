import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Marker from "./Marker";

const CountryBase = ({ mood }) => {
  const location = useLocation();
  const [mapZoom, setZoom] = useState(5);
  console.log(location.state);
  let langs = [];
  let subReg = [];
  const extractLangs = () => {
    location.state.languages.map((lang) => {
      return langs.push(lang.name);
    });
  };
  const extractSubRegs = () => {
    location.state.regionalBlocs.map((reg) => {
      return subReg.push(reg.name);
    });
  };
  extractSubRegs();
  extractLangs();
  useEffect(() => {
    if (window.matchMedia("(min-width: 375px)").matches) {
      setZoom(8);
    } 
    if (window.matchMedia("(min-width: 992px)").matches) {
      setZoom(5);
    }

  }, [])
  return (
    <>
      <Link to="/">
        <button className={`back ${mood ? "back-dark " : null}`}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
      </Link>
      <div className="country-info">
        <div className="country-info__flag">
          <img
            src={location.state.flag}
            alt={location.state.name + "'s flag"}
          />
        </div>
        <div className="country-info_desc">
        <p className={`country-title ${mood ? "country-info__text" : null}`}>
          {location.state.name}
        </p>
          <div className="basic-info">
            <ul>
              <li className={mood ? "country-info__text" : null}>
                <span>Native Name: </span>
                {location.state.nativeName}
              </li>
              <li className={mood ? "country-info__text" : null}>
                <span>Population: </span>
                {Intl.NumberFormat().format(location.state.population)}
              </li>
              <li className={mood ? "country-info__text" : null}>
                <span>Region: </span>
                {location.state.region}
              </li>
              <li className={mood ? "country-info__text" : null}>
                <span>Sub Region: </span>
                {location.state.subregion}
              </li>
              <li className={mood ? "country-info__text" : null}>
                <span>Capital: </span>
                {location.state.capital}
              </li>
            </ul>
          </div>
          <div className="additional-info">
            <ul>
              <li className={mood ? "country-info__text" : null}>
                <span>Top Level Domain:</span> {location.state.topLevelDomain}
              </li>
              <li className={mood ? "country-info__text" : null}>
                <span>Currencies:</span> {location.state.currencies[0].name}{" "}
                <span className={`symbol ${mood ? "symbol-dark" : null} `}>
                  {location.state.currencies[0].symbol}
                </span>
              </li>
              <li className={mood ? "country-info__text" : null}>
                <span>Languages:</span> {langs.join(", ")}
              </li>
              <li className={mood ? "country-info__text" : null}>
                <span>Regional Blocs:</span> {subReg.join(", ")}
              </li>
            </ul>
          </div>
          <div className="borders">
            <p className={mood ? "country-info__text" : null}>Border Countries:</p>
            {!location.state.borders ?
              <p className={mood ? "country-info__text" : null}>None</p> :
              <ul>
                {
                  location.state.borders.map((border, i) => {
                    return <li className={mood ? "border-back" : null} key={i}>{border}</li>
                  })
                }
              </ul>}

          </div>
        </div>
      </div>
      <div className="country-map" style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.KeySecure }}
          defaultCenter={{
            lat: location.state.latlng[0],
            lng: location.state.latlng[1],
          }}
          defaultZoom={mapZoom}
        >
          <Marker lat={location.state.latlng[0]} lng={location.state.latlng[1]} />
        </GoogleMapReact>
      </div>
    </>
  );
};
export default CountryBase;
CountryBase.propTypes = {
  mood: PropTypes.bool,
};
