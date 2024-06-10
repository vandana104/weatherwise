import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ReactSwitch from "react-switch";
import "./Navbar.css";
import { RiSearchLine } from "react-icons/ri";
import { fetchWeather } from "../../api";
import { MdDarkMode } from "react-icons/md";

const Navbar = ({ setSubmittedText }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  const themeToggler = () => {
    
  }

  const handleSearch = async () => {
    if (searchText.trim() === "") {
      alert("Please enter a city name");
      return;
    }

    try {
      const data = await fetchWeather(searchText);

      if (data.cod === "404") {
        alert("An error occurred. Please try again later.");
        return;
      }

      setSubmittedText(searchText);
    } catch (error) {
      console.error(error);
      alert("City not found. Please enter a valid city name");
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <h1>WeatherWise</h1>
        </div>
        <div className="navbar-center">
          <input
            type="text"
            placeholder="Enter location"
            className="search-bar"
            value={searchText}
            onChange={handleInputChange}
          />
          <RiSearchLine className="search" onClick={handleSearch} />
        </div>
        <div className="navbar-right">
          {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> */}
          <div className="theme-toggler">
            {" "}
            <MdDarkMode className="darkmode" onClick={themeToggler} />
            {/* <MdDarkMode className="darkmode" onClick={toggleTheme} /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
