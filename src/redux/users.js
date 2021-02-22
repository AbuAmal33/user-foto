const initialState = {
  items: [],
  loadingUsers: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "users/load/start":
      return {
        ...state,
        loadingUsers: true,
      };
    case "users/load/success":
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
