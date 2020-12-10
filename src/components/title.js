import React from 'react'
import Slide from 'react-reveal/Slide'

const Title = ({ text }) => {
  return (
    <Slide>
      <div className="text-center mb-4">
        <h5 className="text-white text-uppercase bg-dark px-2 py-1 d-inline">{text}</h5>
      </div>
    </Slide>
  )
}

export default Title
