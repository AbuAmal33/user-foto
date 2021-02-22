import React from 'react'
import {  useSelector } from 'react-redux'
import User from './User'

function Users (props) {
  const users = useSelector(state => state.users.items);

  return (
      <ul className="list-group mt-5">
        {users.map(user => {
          return <User key={user.id} user={user}/>
        })}
      </ul>
  )
}

export default Users