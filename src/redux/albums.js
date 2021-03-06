const initialState = {
  filter: '',
  items: [],
  loadingAlbums: false,
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Albums/load/start':
      return {
        ...state,
        loadingAlbums: true,
      };
    case 'Albums/load/success':
      return {
        ...state,
        items: action.payload,
        loadingAlbums: false,
      };
    default:
      return state;
  }
};

export default albumsReducer;
