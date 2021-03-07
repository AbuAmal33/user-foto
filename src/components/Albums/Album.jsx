import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Album(props) {
  const userId = useParams().userId;
  const isOpenedAlbum = parseInt(useParams().albumId) === props.album.id;

  return (
    <div className="album">
      <li
        className={cx('list-group-item', {
          'list-group-item-info': isOpenedAlbum,
        })}
      >
        <Link to={`/${userId}/${props.album.id}`}>{props.album.title}</Link>
      </li>
    </div>
  );
}

Album.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Album;
