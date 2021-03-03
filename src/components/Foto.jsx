import React from 'react'

function Foto (props) {
  return (
    <div className="foto">
      <img src={props.foto.thumbnailUrl}/>
    </div>
  )
}

export default Foto;