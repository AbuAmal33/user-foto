export const loadUsers = () => {
  return (dispatch) => {
    dispatch({
      type: 'Users/load/start',
    });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'Users/load/success',
          payload: json,
        });
      });
  };
};

export const loadAlbums = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'Albums/load/start',
    });
    fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'Albums/load/success',
          payload: json,
        });
      });
  };
};

export const loadPhotos = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'Photos/load/start',
    });
    fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'Photos/load/success',
          payload: json,
        });
      });
  };
};
