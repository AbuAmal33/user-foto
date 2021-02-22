import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Album from "./Album";

function Albums(props) {
  const albums = useSelector((state) => state.albums.items);
  const filter = useSelector((state) => state.albums.filter);
  const dispatch = useDispatch();

  const id = parseInt(useParams().id);

  const filteredAlbums = albums
    .filter((album) => album.albumId === id)
    .filter((album) => album.url.indexOf(filter) > -1);

  if (!id) {
    return <div className="load">выберите пользователя из списка</div>;
  }

  return (
    <div className="albums">
      {filteredAlbums.map((album) => {
        return <Album key={album.id} album={album} />;
      })}
    </div>
  );
}

export default Albums;
