import React from "react";
import './../styles/App.css';
import ConditionalWeather from "./ConditionalWeather";
const App = () => {
  return (
    <div id="main" className="main">
        {/* Do not remove the main div */}
        <ConditionalWeather/>
    </div>
  )
}

export default App;
