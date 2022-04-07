import React from "react";
import { Link } from "react-router-dom";
import Speedometer from "../Speedometer";
import "./Web12801.css";
import ridedatescore from './score-and-count.json';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maps from "../Maps";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import { MapContainer, TileLayer } from 'react-leaflet';
import rideResult from './Result-new.json'


function Web12801(props) {
  const {
    whiteRectangle,
    tripSummaryTitle,
    mainTitle,
    vcommLogo,
    safetyEventsTitle,
    houseIcon2,
    houseIcon,
    speedometerProps,
    rideOverviewTitle,
    rideTimeTitle,
    ridemap,
    rideScore,
    scoreBar,

  } = props;



  return (
    <>
      <div className="container-center-horizontal">
        <div className="web-1280-1 screen">
          <div className="overlap-group">
            <div className="blue-rectangle border-1px-dove-gray"></div>
            <img className="white-rectangle" src={whiteRectangle} />
            <h1 className="trip-summary-title">{tripSummaryTitle}</h1>
            <Speedometer
              group351={speedometerProps.group351}
              path9205={speedometerProps.path9205}
              path9206={speedometerProps.path9206}
            />
            <div className="main-title poppins-semi-bold-white-20px">{mainTitle}</div>
            <img className="vcomm-logo" src={vcommLogo} />
            <Link to="/web-1280-2">
              <div className="safety-events-title">{safetyEventsTitle}</div>
            </Link>
            <img className="house-icon-2" src={houseIcon2} />
            <img className="house-icon" src={houseIcon} />
          </div>
          <div className="ride-overview-box border-1px-dove-gray">
            <div className="ride-overview"> {rideOverviewTitle} </div>
            <div className="ride-time-box border-1px-dove-gray">
              <div className="ride-time-date"> {ridedatescore.datetime} </div>
              <div className="ride-time"> {rideTimeTitle} </div>
              </div>
              <div className = "map-container">
                <Maps style ={{position: "stati"}}/>
            </div>
            <Link to="/web-1280-2">
              <Button className="tripdetails-button">Trip Details</Button>
            </Link>
          </div>
          <div className="score-bar" >
            <CircularProgressbar
              value={ridedatescore.score}
              text={ridedatescore.score}
              styles={buildStyles({ pathColor: '#88CA5E', textColor: '#88CA5E', trailColor: '#FF2E2E' })}
            />
          </div>
          <div className="ride-overview-box border-1px-dove-gray">
            <div className="score-title">Score </div>
            <div className="score-count"> Number of safety events: {ridedatescore.count} </div>
            <Link to="/web-1280-2">
              <Button className="score-button">See More</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Web12801;


