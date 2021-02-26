import React from "react";
import Users from "./Users";
import Albums from "./Albums";
import Fotos from './Fotos'
import { Route } from "react-router-dom"

function Content(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Route path={"/:id?"}>
            <Users />
          </Route>
        </div>
        <div className="col-md-4">
          <Route path={"/:id?"}>
            <Albums />
          </Route>
        </div>
        <div className="col-md-4">
          <Fotos />
        </div>
      </div>
    </div>
  );
}

export default Content;
