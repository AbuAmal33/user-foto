import React from 'react'
import { Link } from 'react-router-dom'

function Foto (props) {
  return (
    <div className="foto">
      <img src={props.foto.thumbnailUrl}/>
    </div>
  )
}

export default Foto;