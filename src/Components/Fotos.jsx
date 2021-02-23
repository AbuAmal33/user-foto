import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Foto from "./Foto";

function Fotos(props) {
  const fotos = useSelector((state) => state.fotos.items);
  const filter = useSelector((state) => state.fotos.filter);

  const id = parseInt(useParams().id);

  const filteredFotos = fotos
    .filter((foto) => foto.albumId === id)
    .filter((foto) => foto.url.indexOf(filter) > -1);

  return (
      <div className="foto_one">
        {filteredFotos.map((foto) => {
          return <Foto key={foto.id} foto={foto} />;
        })}
      </div>
  );
}

export default Fotos;
