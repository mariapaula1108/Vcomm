import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon, FeatureGroup, LayersControl } from 'react-leaflet';
import './events.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import coordinates from '../Maps/coordinates.json'
import rideData from '../Maps/result.json'



export default class events extends Component {
    render() {
        return (
        <div>
            {rideData.map(data => {
                return (
                    <>
                         <div className="events-box border-1px-dove-gray"></div>
                         <div className="safety-events-box-title" Safety Event ></div>
                        <div className = "ride-time-box" ></div>
                    </>
                )
            })}

        </div>)
    }
}

