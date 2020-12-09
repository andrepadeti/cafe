import React from "react"

const Title = ({ text }) => {
  return (
    <>
      <div className="text-center mb-4">
        <h5 className="text-white bg-dark px-2 py-1 d-inline">{text}</h5>
      </div>
    </>
  )
}

export default Title
