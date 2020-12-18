import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'

const LocationPin = ({ text }) => {
  return (
    <div className="map-pin">
      <FontAwesomeIcon icon="coffee" />
      <p className='backdrop-filter d-inline-block'>{text}</p>
    </div>
  )
}

const Map = ({ location, zoomLevel }) => (
  <Fade>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_MAPS }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.text}
        />
      </GoogleMapReact>
    </div>
  </Fade>
)

export default Map
