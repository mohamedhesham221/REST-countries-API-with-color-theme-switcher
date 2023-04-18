import './App.css';
import './mediascreen.css'
import SearchInp from './components/SearchInp';
import CountryBase from './components/CountryBase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import {Routes, Route} from "react-router-dom";

function App() {
  const [mood, setMood] = useState(false);

  const changeTheme = () => {
    setMood(!mood);
    let body = document.querySelector("body");
    if (mood === false) {
      body.style.backgroundColor = "#202c37";
    } else {
      body.style.backgroundColor = "#fafafa";
    }
  }

  return (
    <div>
      <div className={!mood? "header hd-light" : "header hd-dark"}>
      <h1 className={mood? "h1-dark" : null} >Where in the world?</h1>
      <div className="mode-selection" onClick={changeTheme}>
      <FontAwesomeIcon icon={!mood? faMoon : faSun} style={mood? {color: "#ffffff"} : null}/>
      <p className={mood? "h1-dark" : null} >{!mood? "Dark Mode" : "Light Mode"}</p>
      </div>
    </div>
    <Routes>
      <Route path='/' element={ <SearchInp mood={mood} />}/>
      <Route path="country-base" element={<CountryBase mood={mood} />} />
    </Routes>
    </div>
  );
}

export default App;
