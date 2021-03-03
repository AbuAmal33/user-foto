import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Foto from "./Foto";
import { loadFotos } from '../redux/action'
import { useEffect } from "react"
import { BoxLoading } from "react-loadingg"

function Fotos(props) {
  const fotos = useSelector((state) => state.fotos.items);
  const loadingFotos = useSelector((state => state.fotos.loadingFotos));
  const dispatch = useDispatch();

  const albumId = parseInt(useParams().albumId);

  const filteredFotos = fotos.filter((foto) => foto.albumId === albumId);

  useEffect(() => {
    if (albumId !== undefined) {
      dispatch(loadFotos(albumId))
    }
  }, [dispatch, albumId]);

  return (
    <div className="col-md-4">
      {loadingFotos ? (
        <BoxLoading />
      ) : (
        <div className="foto_one">
          {filteredFotos.map((foto) => {
            return <Foto key={foto.id} foto={foto} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Fotos;
