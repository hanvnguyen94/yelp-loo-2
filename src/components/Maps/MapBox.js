// import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { useState, useRef, useCallback } from 'react'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import dotenv from 'dotenv'

dotenv.config()

const MAPBOX = process.env.MAPBOX_KEY

const MapBoxContainer = () => {
  const [viewport, setViewport] = useState({
    latitude: 43.6218,
    longitude: -72.2492,
    zoom: 8
  })
  const mapRef = useRef()
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  )

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 }

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      })
    },
    [handleViewportChange]
  )

  return (
    <div style={{ marginBottom: '3%' }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="60vh"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX}
          position="top-left"
        />
      </MapGL>
    </div>
  )
}

export default MapBoxContainer
