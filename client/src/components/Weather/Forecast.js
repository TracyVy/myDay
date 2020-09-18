import React, { useState } from "react";
import Conditions from "./Conditions";
import classes from "./Forecast.module.css";
import { Card } from "react-bootstrap";

console.log(process.env.REACT_APP_API_KEY);

function Forecast() {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("imperial");
  const [responseObj, setResponseObj] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const uriEncodedCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    setLoading(true);

    fetch(
      // Current Forecast
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      // `https://community-open-weather-map.p.rapidapi.com/forecast?q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.cod !== 200) {
          throw new Error();
        }
        setResponseObj(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      });
  }

  return (
    <div className={classes.forecastApp}>
      <Card responsive>
        <Card.Body>
          <Card.Title>Find Current Weather</Card.Title>

          <form onSubmit={getForecast} className={classes.forecastForm}>
            <input
              type="text"
              placeholder="Enter City"
              maxLength="50"
              className={classes.forecastTextInput}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label className={classes.Radio}>
              <input
                type="radio"
                name="units"
                checked={unit === "imperial"}
                value="imperial"
                onChange={(e) => setUnit(e.target.value)}
              />
              Fahrenheit
            </label>
            <label className={classes.Radio}>
              <input
                type="radio"
                name="units"
                checked={unit === "metric"}
                value="metric"
                onChange={(e) => setUnit(e.target.value)}
              />
              Celcius
            </label>

            <button className={classes.forecastButton} type="submit">
              Get Forecast
            </button>
          </form>

          <Conditions
            responseObj={responseObj}
            error={error}
            loading={loading}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Forecast;
