import React from 'react'
import Map from './map'
import Title from './title'

const location = {
  text: 'Café Campestre',
  lat: -23.632035336728777,
  lng: -46.54747183442259,
}

// google maps zoom level depends on whether mobile or desktop
const mql = window.matchMedia(`(max-width: 577px)`)
const zoomLevel = mql.matches ? 15 : 17

const Where = () => {
  return (
    <>
      <div className="container" id="where">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Title text="Localização" />
            <p>No local mais elegante do bairro.</p>
            <Map location={location} zoomLevel={zoomLevel} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Where
