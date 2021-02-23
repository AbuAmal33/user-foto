import React from "react";
import Users from "./Users";
import Albums from "./Albums";
import Fotos from './Fotos'

function Content(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Users />
        </div>
        <div className="col-md-4">
          <Albums />
        </div>
        <div className="col-md-4">
          <Fotos />
        </div>
      </div>
    </div>
  );
}

export default Content;
