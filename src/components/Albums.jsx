import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import Album from "./Album";
import { useEffect } from "react";
import { loadAlbums } from '../redux/action'
import { BoxLoading } from "react-loadingg"

function Albums(props) {
  const albums = useSelector((state) => state.albums.items);
  const loadingAlbums = useSelector((state) => state.albums.loadingAlbums);
  const dispatch = useDispatch();


  const id = parseInt(useParams().id);

  const filteredAlbums = albums.filter((album) => album.userId === id);

  useEffect(() => {
    if (id !== undefined) {
        dispatch(loadAlbums(id))
      }
    }, [dispatch, id]);

  if (!id) {
    return <div className="load">выберите пользователя из списка</div>;
  }

  return (
    <div className="col-md-4">
      {loadingAlbums ? (
        <BoxLoading />
      ) : (
        <ul className="list-group mt-5 albums">
          {filteredAlbums.map((album) => {
            return <Album key={album.id} album={album} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default Albums;
