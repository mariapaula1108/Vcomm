import React from "react";
import Speedometer from "../Speedometer";
import "./Web12802.css";
import rideResult from './Result-new.json'
import EventMaps from "../EventMaps";

function Web12802(props) {
  const {
    whiteRectangle,
    tripSummaryTitle,
    mainTitle,
    vcommLogo,
    safetyEventsTitle,
    houseIcon2,
    houseIcon,
    group349,
    main,
    speedometerProps,
    safetyEventTitlePage,
    safetyEventsHappened,
  } = props;

  return (

    <div className="container-center-horizontal">
      <div className="web-1280-2 screen">
        <div className="dashboard">
          <div className="overlap-group-1">
            <div className="blue-rectangle-1 border-1px-dove-gray"></div>
            <img className="white-rectangle-1" src={whiteRectangle} />
            <div className="trip-summary-title-1">{tripSummaryTitle}</div>
            <Speedometer
              group351={speedometerProps.group351}
              path9205={speedometerProps.path9205}
              path9206={speedometerProps.path9206}
              className={speedometerProps.className}
            />
            <div className="main-title-1 poppins-semi-bold-white-20px">{mainTitle}</div>
            <img className="vcomm-logo-1" src={vcommLogo} />
            <div className="safety-events-title-1">{safetyEventsTitle}</div>
            <img className="house-icon-2-1" src={houseIcon2} />
            <img className="house-icon-1" src={houseIcon} />
            <div className="group-349" style={{ backgroundImage: `url(${group349})` }}></div>
            <div className="main poppins-semi-bold-white-20px">{main}</div>
          </div>
          <div className='safety-events-title-page'> {safetyEventTitlePage}</div>
          <div className="events-and-title">
            {rideResult.map(data => {
              return (
                <>
                  <div key={data.properties.shem_angli} className="events-box border-1px-dove-gray">
                    <p className="safety1">Wrong-Way Driving at: {data.properties.shem_angli} for {Math.ceil(data.properties.Shape_len)} meters </p>
                    <div className="Event-Maps">
                      <EventMaps style={{left: 50, height: 300}}/>
                      
                    </div>
                  </div>
                  <div style={{ margin: 30 }}> </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Web12802;

