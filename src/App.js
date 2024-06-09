import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import "./App.css";
import WeatherCard from "./components/Card/WeatherCard";

const App = () => {
  const [submittedText, setSubmittedText] = useState("delhi");
  useEffect(() => {
    setSubmittedText("delhi");
  }, []);
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className="App" id={theme}>
        {/* <div className="App" > */}
        <Navbar setSubmittedText={setSubmittedText} />
        {submittedText && <WeatherCard searchText={submittedText} />}
      </div>
    </ThemeProvider>
  );
};

export default App;

// todo 1.responsive
// day night
//toggle dark and light,
// multiple locations
