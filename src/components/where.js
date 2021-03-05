import React, { useEffect, useState } from 'react'
import Map from './map'
import Title from './title'
import Container from './container'

const location = {
  text: 'Café Campestre',
  lat: -23.631975801212228,
  lng: -46.54757678944422,
}

const Where = () => {
  const [zoomLevel, setZoomLevel] = useState(null)
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
      {zoomLevel && (
        <Container id='where'>
          <Title text="Localização" />
          <p>No local mais elegante do bairro.</p>
          <Map location={location} zoomLevel={zoomLevel} />
        </Container>
      )}
    </>
  )
}

export default Where
