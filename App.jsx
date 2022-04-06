import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Web12801 from "./components/Web12801";
import Web12802 from "./components/Web12802";
import safetyEvents from './result.json';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/:path(|web-1280-1)">
            <Web12801 {...web12801Data} />
          </Route>
          <Route path="/web-1280-2">
            <Web12802 {...web12802Data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
const speedometer1Data = {
    group351: "/img/speedometer-out.png",
    path9205: "/img/speedometer-arrow.png",
    path9206: "/img/speedometer-bar.png",
};

const web12801Data = {
    whiteRectangle: "/img/white-rectangle-1@1x.png",
    tripSummaryTitle: "Trip Summary",
    mainTitle: "Main",
    vcommLogo: "/img/vcomm-logo-1@1x.png",
    safetyEventsTitle: "Safety Events",
    houseIcon2: "/img/house-icon-2@1x.png",
    houseIcon: "/img/house-icon@1x.png",
    speedometerProps: speedometer1Data,
    rideOverviewTitle: "Ride Overview",
    rideTimeTitle: "Ride Time",
    ridemap: "/img/ride-map.png",
    scoreBar: "img/score-bar.png",
};

const speedometer2Data = {
    group351: "/img/speedometer-out-white.png",
    path9205: "/img/speedometer-arrow-white.png",
    path9206: "/img/speedometer-bar-white.png",
    className: "speedometer-1",
};

const web12802Data = {
    whiteRectangle: "/img/white-rectangle-1@1x.png",
    tripSummaryTitle: "Trip Summary",
    mainTitle: "Main",
    vcommLogo: "/img/vcomm-logo-1@1x.png",
    safetyEventsTitle: "Safety Events",
    houseIcon2: "/img/house-icon-2-1@1x.png",
    houseIcon: "/img/house-icon-1@1x.png",
    group349: "/img/white-rectangle-select@1x.png",
    main: "Main",
    speedometerProps: speedometer2Data,
    safetyEventTitlePage: "Safety Events",
    safetyEventsHappened: "Safety Events happened at these locations:",
};

