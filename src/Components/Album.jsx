import React from "react";

function Album(props) {
  return (
    <div className="foto">
      <img src={props.album.thumbnailUrl} />
    </div>
  );
}

export default Album;
