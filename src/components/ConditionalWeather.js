import React from "react";

function ConditionalWeather() {
  const Weather = {
    temperature: 25,
    condition: "Sunny",
  };
  const tempColor = Weather.temperature > 20 ? "red" : "blue";
  return (
    <div>
      <h2>Weather Report</h2>
      <p>
        Temperature: 
        <span style={{ color: tempColor }}> {Weather.temperature}</span>
      </p>
      <p>Conditions: {Weather.condition}</p>
    </div>
  );
}

export default ConditionalWeather;
