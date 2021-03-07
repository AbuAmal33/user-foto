import React from 'react';
import Users from './Users';
import Albums from './Albums';
import Photos from './Photos';

function Content() {
  return (
    <div className="container">
      <div className="row">
        <Users />
        <Albums />
        <Photos />
      </div>
    </div>
  );
}

export default Content;
