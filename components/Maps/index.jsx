import React, { useEffect, useRef, Component } from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polygon, FeatureGroup, LayersControl } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";
import './Maps.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import rideResult from './Result-new.json'


export default class Maps extends Component {
  render() {


    return (
      <MapContainer center={[32.07641, 34.77362]} zoom={13}>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {rideResult.map( data => {
            return(
            <Marker 
              key = {data.properties.shem_angli}
              position = {[data.properties.start_y, data.properties.start_x]}>
                <Popup position = {[data.properties.start_y, data.properties.start_x]}> 
                  <div> 
                    <h6> Wrong-Way Driving </h6>
                    <p>{data.properties.shem_angli} STREET </p>
                  </div>
                </Popup>
              </Marker>
          )
        })}
      </MapContainer>
    );
  }
}