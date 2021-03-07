import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
  return (
    <div className="photo">
      <img src={props.photo.thumbnailUrl} />
    </div>
  );
}

Photo.propTypes = {
  thumbnailUrl: PropTypes.string,
};

export default Photo;
