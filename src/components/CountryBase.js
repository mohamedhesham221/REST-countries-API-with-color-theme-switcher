import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useEffect } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

const CountryBase = ({ mood }) => {
  const location = useLocation();
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
    // eslint-disable-next-line import/no-webpack-loader-syntax
    mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
    mapboxgl.accessToken = "pk.eyJ1IjoibW9oYW1lZGhlc2hhbTIyIiwiYSI6ImNsZ3AxdWx5MTBrbHQzaW10dzBibDl1d28ifQ.UmmcWx5WF1agqghsdmoUCw";
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [location.state.latlng[1], location.state.latlng[0]], // starting position [lng, lat]
      zoom: 7, // starting zoom

    });
    const marker = new mapboxgl.Marker().setLngLat([location.state.latlng[1], location.state.latlng[0]]).addTo(map)
  }, [location.state.latlng])
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
      <div id="map" style={{ width: "100%", height: "100vh" }}>
      </div>
    </>
  );
};
export default CountryBase;
CountryBase.propTypes = {
  mood: PropTypes.bool,
};
