import React from 'react'

const Container = ({children, id}) => {
  return (
    <div className="container mb-5" id={id}>
      <div className="row">
        <div className="col-11 col-md-8 mx-auto p-3 p-md-4 bg-light rounded shadow">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container
