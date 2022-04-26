import React, { useEffect, useRef, Component } from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polygon, FeatureGroup, LayersControl, Polyline } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";
import './Maps.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import rideResult from './Result-new.json'
import rideOutline from './ride.json'
import speeding from './violation1.json'

function getIcon(_iconSize) {
  return L.icon({
    iconUrl: require("./warning2.png"),
    _iconSize: _iconSize

  })
}

function getIcon2(_iconSize) {
  return L.icon({
    iconUrl: require("./warning3.png"),
    _iconSize: _iconSize

  })
}


export default class Maps extends Component {
  render() {


    return (
      <MapContainer center={[32.074241, 34.77362]} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {rideOutline.map(outline => {
          return (
            <Polyline positions={[[outline.properties.start_y, outline.properties.start_x], [outline.properties.end_y, outline.properties.end_x]]} />
          )
        })}
        {rideResult.map(data => {
          return (
            <>
              <Marker
                icon={getIcon(20)}
                key={data.properties.shem_angli}
                position={[data.properties.start_y, data.properties.start_x]}>
                <Popup position={[data.properties.start_y, data.properties.start_x]}>
                  <div>
                    <h6> Wrong-Way Driving </h6>
                    <p>{data.properties.shem_angli} STREET </p>
                  </div>
                </Popup>
              </Marker>

              {speeding.map(data2 => {
                return (
                  <Marker
                    icon={getIcon2(20)}
                    key={data2.properties.distance}
                    position={[data2.properties.y_coords, data2.properties.x_coords]}>
                    <Popup position={[data2.properties.y_coords, data2.properties.x_coords]}>
                      <div>
                        <h6> Speeding at Intersection</h6>
                        <p> Driving {Math.ceil(data2.properties.speed_x)} KM at Intersection </p>
                      </div>
                    </Popup>
                  </Marker>
                )
              })}
            </>
          )
        })}
      </MapContainer>
    );
  }
}