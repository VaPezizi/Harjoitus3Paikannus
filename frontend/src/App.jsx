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

const ShowLocationsInList = ({locations}) => {
  let id = 1
  return (
    <div>
      <h2>Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={id++}>
            <p>Latitude: {location[0]}, Longitude: {location[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const ShowMap = ({locations}) => {
  let id = 1
  // Create an array of [latitude, longitude] pairs for the Polyline
  const positions = locations.map(location => [location[0], location[1]]);
  
  /*const positions = locations.map(location => [
    {
      "latitude": locations[0],
      "longitude": locations[1],
      "id": id++
    }
  ])*/

  console.log(positions)
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

    axios
    .get('http://localhost:3001/api/locations')
    .then (response => {
      console.log('promise fulfilled')
      // Extract the data array from the server response
      setLocations(response.data.data)
    })
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