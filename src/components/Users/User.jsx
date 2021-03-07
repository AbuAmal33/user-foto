import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

function User(props) {
  const isOpenedUser = parseInt(useParams().userId) === props.user.id;

  return (
    <div className="user">
      <li
        className={cx('list-group-item', {
          'list-group-item-info': isOpenedUser,
        })}
      >
        <Link to={`/${props.user.id}`}>{props.user.name}</Link>
      </li>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default User;
