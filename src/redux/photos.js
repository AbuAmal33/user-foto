const initialState = {
  filter: '',
  items: [],
  loadingPhotos: false,
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Photos/load/start':
      return {
        ...state,
        loadingPhotos: true,
      };
    case 'Photos/load/success':
      return {
        ...state,
        items: action.payload,
        loadingPhotos: false,
      };
    default:
      return state;
  }
};

export default photosReducer;
