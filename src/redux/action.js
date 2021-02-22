export const loadUsers = () => {
  return dispatch => {
    dispatch ({
      type: 'users/load/start'
    });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        dispatch ({
          type: 'users/load/success',
          payload: json
        })
      })
  }
}

export const loadAlbums = () => {
  return dispatch => {
    dispatch ({
      type: 'albums/load/start'
    });
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        dispatch ({
          type: 'albums/load/success',
          payload: json
        })
      })
  }
}