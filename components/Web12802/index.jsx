import * as React from 'react';
import Speedometer from "../Speedometer";
import "./Web12802.css";
import rideResult from './Result-new.json'
import EventMaps from "../EventMaps";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polygon, Polyline, FeatureGroup, LayersControl } from 'react-leaflet';
import rideOutline from './ride.json'
import Button from 'react-bootstrap/Button';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import speeding2 from './violation1.json';

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

  function getIcon(_iconSize) {
    return L.icon({
      iconUrl: require("./warning3.png"),
      _iconSize: _iconSize
    })
  }

  function getIcon2(_iconSize) {
    return L.icon({
      iconUrl: require("./warning-yellow.png"),
      _iconSize: _iconSize
  
    })
  }


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
          </div>
          <div className='safety-events-title-page'> Safety Events</div>

          <div className="events-and-title">
            <div>
              <div style={{
                display: 'block',
                width: 700,
                padding: 10,
                top: 10
               
              }}>
                <Dropdown>
                  <Dropdown.Toggle variant="success">
                   Safety Events
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="web-1280-2">
                      All
                    </Dropdown.Item>
                    <Dropdown.Item href="Wrong-way-driving">
                      Wrong-way driving
                    </Dropdown.Item>
                    <Dropdown.Item href="Driving-on-sidewalks">
                      Speeding in Intersection
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            {rideResult.map(data => {
              return (
                <>
                  <div key={data.properties.shem_angli} className="events-box border-1px-dove-gray">
                    <p className="safety1">Wrong-Way Driving at: {data.properties.shem_angli} for {Math.ceil(data.properties.Shape_len)} meters </p>
                    <div className="Event-Maps">
                      <MapContainer center={[data.properties.end_y, data.properties.end_x]} zoom={18}>
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {rideOutline.map(outline2 => {
                          return (
                            <Polyline positions={[[outline2.properties.start_y, outline2.properties.start_x], [outline2.properties.end_y, outline2.properties.end_x]]} />
                          )
                        })}
                        <Marker
                          position={[data.properties.end_y, data.properties.end_x]}
                          icon={getIcon(2)}>
                          <Popup>
                            <div>
                              <h6> Wrong-Way Driving </h6>
                              <p>{data.properties.shem_angli} STREET </p>
                            </div>
                          </Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                  </div>
                  <div style={{ margin: 30 }}> </div>
                </>
              )
            })}
                {speeding2.map(speeding => {
              return (
                <>
                  <div key={speeding.properties.value} className="events-box border-1px-dove-gray">
                    <p className="safety1">Speeding at {Math.ceil(speeding.properties.speed_x)} KM during Intersection </p>
                    <div className="Event-Maps">
                      <MapContainer center={[speeding.properties.y_coords, speeding.properties.x_coords]} zoom={18}>
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {rideOutline.map(outline2 => {
                          return (
                            <Polyline positions={[[outline2.properties.start_y, outline2.properties.start_x], [outline2.properties.end_y, outline2.properties.end_x]]} />
                          )
                        })}
                        <Marker
                          position={[speeding.properties.y_coords, speeding.properties.x_coords]}
                          icon={getIcon2(2)}>
                          <Popup>
                            <div>
                              <h6> Speeding in Intersection </h6>
                              <p> Driving at {Math.ceil(speeding.properties.speed_x)} KM during intersection  </p>
                            </div>
                          </Popup>
                        </Marker>
                      </MapContainer>
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

