const initialState = {
  items: [],
  loadingUsers: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Users/load/start':
      return {
        ...state,
        loadingUsers: true,
      };
    case 'Users/load/success':
      return {
        ...state,
        items: action.payload,
        loadingUsers: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
