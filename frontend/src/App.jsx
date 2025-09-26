import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client'

const ShowLocationsInList = ({locations}) => {

  return (
    <div>
      <h2>Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <p>Time: {location.id}, Latitude: {location.latitude}, Longitude: {location.longitude}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const ShowMap = ({locations}) => {

  // Create an array of [latitude, longitude] pairs for the Polyline
  const positions = locations.map(location => [location.latitude, location.longitude]);

  return (
    <MapContainer
      center={[62.7903, 22.8406]}
      zoom={6}
      style={{height: "400px"}}
      >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={positions} color="blue" />
    </MapContainer>
  )
}

const App = () => {
  const [locations, setLocations] = useState([])

  console.log('App')

  useEffect(() => {
    console.log('useEffect')

    
    
  } , [])

  return (
    <div>
      <h1>Leaflet Location Map</h1>
      {locations.length > 0 && (
        <>
          <ShowMap locations={locations}/>
          <ShowLocationsInList locations={locations} />
        </>
      )}
    </div>
  )
}

export default App