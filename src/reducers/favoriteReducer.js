import { ADD_FAVORITE } from "../actions/favoriteActions";

const initialState = {
  favorites: [
    {
      id: 1234,
      title: "Forest Gump",
      director: "Robert Zemeckis",
      metascore: 100,
      genre: "Romantic Comedy",
      description:
        "Aging genius deals with drug ridden woman from his childhood whilst trying to take care of his sick mother. A childhood protegy turned war hero will have your heart strings strumming wondering is life really a box of chocolates.",
    },
  ],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
