import React from "react";
import { Link } from "react-router-dom";

function User(props) {
  return (
    <div className="user">
      <li className="list-group-item">
        <Link to={`/${props.user.id}`}>{props.user.name}</Link>
      </li>
    </div>
  );
}

export default User;
