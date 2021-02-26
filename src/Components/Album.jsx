import React from "react";
import { Link } from "react-router-dom"

function Album(props) {
  return (
    <div className="album">
      <li className="list-group-item">
        <Link to={`/${props.album.id}`}>{props.album.title}</Link>
      </li>
    </div>
  );
}

export default Album;
