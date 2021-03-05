import React from 'react'
import Slide from 'react-reveal/Slide'

const Title = ({ text }) => {
  return (
    <Slide>
      <div className="text-center mt-4 mb-5">
        <h2 className="handwriting pink px-3 py-1">{text}</h2>
      </div>
    </Slide>
  )
}

export default Title
