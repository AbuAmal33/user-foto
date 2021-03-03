import React from "react";
import Users from "./Users";
import Albums from "./Albums";
import Fotos from "./Fotos";

function Content(props) {
  return (
    <div className="container">
      <div className="row">
        <Users />
        <Albums />
        <Fotos />
      </div>
    </div>
  );
}

export default Content;
