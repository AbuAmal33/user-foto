const initialState = {
  filter: "",
  items: [],
  loadingFotos: false,
};

const fotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fotos/load/start":
      return {
        ...state,
        loadingFotos: true,
      };
    case "fotos/load/success":
      return {
        ...state,
        items: action.payload,
        loadingFotos: false,
      };
    default:
      return state;
  }
};

export default fotosReducer;
