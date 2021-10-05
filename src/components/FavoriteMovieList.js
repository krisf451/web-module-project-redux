import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { removeFavorite } from "../actions/favoriteActions";

const FavoriteMovieList = (props) => {
  const { favorites, displayFavorites } = props;
  // console.log(props.favorites);
  if (displayFavorites) {
    return (
      <div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {favorites.map((movie) => {
          return (
            <div key={movie.id}>
              <Link
                className="btn btn-light savedButton"
                to={`/movies/${movie.id}`}
              >
                {movie.title}
                <span>
                  <span
                    onClick={() => props.removeFavorite(movie.id)}
                    className="material-icons"
                  >
                    remove_circle
                  </span>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};
const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteState.favorites,
    displayFavorites: state.favoriteState.displayFavorites,
  };
};
export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);
