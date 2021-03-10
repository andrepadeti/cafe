import React from 'react'
import Slide from 'react-reveal/Slide'

const Title = ({ text }) => {
  return (
    <Slide>
      <div className="text-center mb-4 mb-md-5 mt-4 mt-md-0 py-2 border-bottom border-top border-pink border-2 ">
        <h1 className="handwriting pink">{text}</h1>
      </div>
    </Slide>
  )
}

export default Title
