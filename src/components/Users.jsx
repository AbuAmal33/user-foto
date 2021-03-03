import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

function Users(props) {
  const users = useSelector((state) => state.users.items);

  return (
    <div className="col-md-4">
      <ul className="list-group mt-5">
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
}

export default Users;
