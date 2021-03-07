import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from './User';
import { BabelLoading } from 'react-loadingg';
import { loadUsers } from '../../redux/action';

function Users() {
  const users = useSelector((state) => state.users.items);
  const loadingUsers = useSelector((state) => state.users.loadingUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div className="col-md-4">
      {loadingUsers ? (
        <BabelLoading />
      ) : (
        <ul className="list-group mt-5">
          {users.map((user) => {
            return <User key={user.id} user={user} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default Users;
