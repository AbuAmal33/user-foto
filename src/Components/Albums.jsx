import React from "react";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Album from "./Album";

function Albums(props) {
  const albums = useSelector((state) => state.albums.items);
  const filter = useSelector((state) => state.albums.filter);

  const id = parseInt(useParams().id);

  const filteredAlbums = albums
    .filter((album) => album.albumId === id)
    .filter((album) => album.url.indexOf(filter) > -1);

  if (!id) {
    return <div className="load">выберите пользователя из списка</div>;
  }

  return (
    <ul className="list-group mt-5 albums">
      {filteredAlbums.map((album) => {
        return <Album key={album.id} album={album} />;
      })}
    </ul>
  );
}

export default Albums;
