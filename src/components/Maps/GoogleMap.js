import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Geocode from 'react-geocode'
import dotevn from 'dotenv'

dotevn.config()

// const _key = 'AIzaSyAXQgIkuRMVnmvJsAGvpjmLio18eXm1ERc'
const key = process.env.GOOGLE_KEY

Geocode.setApiKey(key)

Geocode.setLocationType('ROOFTOP')

const mapStyles = {
  height: '60vh',
  width: '100%',
  marginBottom: '2%'
}

export const GoogleMapContainer = () => {
  const [currentPosition, setCurrentPosition] = useState({})

  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition)
  }

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    setCurrentPosition({ lat, lng })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  })

  return (
    <LoadScript
      googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}>
        {
          currentPosition.lat
            ? <Marker
              position={currentPosition}
              onDragEnd={(e) => onMarkerDragEnd(e)}
              draggable={true} />
            : null
        }
      </GoogleMap>
    </LoadScript>
  )
}
