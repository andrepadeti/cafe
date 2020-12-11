import React from 'react'
import Slide from 'react-reveal/Slide'

const Title = ({ text }) => {
  return (
    <Slide>
      <div className="text-center mb-4">
        <h3 className="handwriting  px-3 py-1 fw-bolder">
          {text}
        </h3>
      </div>
    </Slide>
  )
}

export default Title
