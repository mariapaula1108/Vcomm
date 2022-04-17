import React, { useEffect, useRef, Component } from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polygon, FeatureGroup, LayersControl } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";
import './EventMaps.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import rideResult from './Result-new.json'
import rideOutline from './ride.json'


export default class Maps extends Component {
  render() {
    return (

      <MapContainer center={[32.074241, 34.77362]} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {rideOutline.map(outline2 => {
          return (
            <Polyline positions={[[outline2.properties.start_y, outline2.properties.start_x], [outline2.properties.end_y, outline2.properties.end_x]]} />
          )
        })}
      </MapContainer>
    );
  }
}