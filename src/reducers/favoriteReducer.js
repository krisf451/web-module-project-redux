import {
  ADD_FAVORITES,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoriteActions";

const initialState = {
  favorites: [
    {
      id: 1234,
      title: "Forest Gump",
      director: "Robert Zemeckis",
      metascore: 100,
      genre: "Romantic Comedy",
      description:
        "Aging genius deals with drug ridden woman from his childhood whilst trying to take care of his sick mother. A childhood protegy turned war hero will have your heart strings strumming and wondering if life really is like a box of chocolates.",
    },
  ],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      if (state.favorites.find((movie) => movie.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
};

export default reducer;
