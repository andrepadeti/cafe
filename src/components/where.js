import React, { useEffect, useState } from 'react'
import Map from './map'
import Title from './title'

const location = {
  text: 'Soderinni Gourmet',
  lat: -23.631975801212228,
  lng: -46.54757678944422,
}

const Where = () => {
  const [zoomLevel, setZoomLevel] = useState()
  // in gatsby, window is not defined in production build, therefore:
  useEffect(() => {
    if (typeof window != `undefined`) {
      // google maps zoom level depends on whether mobile or desktop
      const mediaQuery = window.matchMedia(`(max-width: 577px)`)
      setZoomLevel(mediaQuery.matches ? 15 : 17)
    }
  }, [])

  return (
    <>
      <div className="container" id="where">
        <div className="row">
          <div className="col-11 col-md-8 mx-auto py-2 mb-5 bg-light rounded shadow">
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
