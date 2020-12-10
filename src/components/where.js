import React from 'react'
import Map from './map'
import Title from './title'

const location = {
  text: 'Café Campestre',
  lat: -23.632035336728777,
  lng: -46.54747183442259,
}

const Where = () => {
  return (
    <>
      <div className="container" id="where">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Title text="Localização" />
            <p>No local mais elegante do bairro.</p>
            <Map location={location} zoomLevel={17} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Where
