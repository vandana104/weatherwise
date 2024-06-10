import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { RiSearchLine } from "react-icons/ri";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./Navbar.css";
import { fetchWeather } from "../../api";

const Navbar = ({ setSubmittedText }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

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

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
          <div
            className={`theme-toggler ${theme === "light" ? "light" : "dark"}`}
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <MdDarkMode className="darkmode-icon" />
            ) : (
              <MdLightMode className="lightmode-icon" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
