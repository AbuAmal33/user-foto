import React from 'react'
import Users from './Users'
import Albums from './Albums'

function Content (props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Users />
        </div>
        <div className="col-md-8">
          <Albums />
        </div>
      </div>
    </div>
  )
}

export default Content