const initialState = {
  detail: {},
  ratingHistory: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE_DETAIL":
      return { ...state, detail: action.payload };
    case "ADD_RATING_HISTORY":
      return {
        ...state,
        ratingHistory: [...state.ratingHistory, action.payload],
      };
    default:
      return state;
  }
};

export default movieReducer;
