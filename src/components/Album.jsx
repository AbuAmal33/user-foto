import React from "react";
import { Link, useParams } from "react-router-dom"

function Album(props) {
  const userId = useParams().id;
  const openedAlbumId = parseInt(useParams().id);

  return (
    <div className="album">
      <li className={`list-group-item ${openedAlbumId === props.album.id ? 'list-group-item-info' : ''}`}>
        <Link to={`/${userId}/${props.album.id}`}>{props.album.title}</Link>
      </li>
    </div>
  );
}

export default Album;
