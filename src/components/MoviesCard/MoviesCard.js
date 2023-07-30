import "./MoviesCard.css";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import mainApi from "../../utils/MainApi";
// import { useContext } from "react";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const MoviesCard = ({
  movie,
  setIsLoaderVisible,
  savedMovies,
  setSavedMovies,
  saved,
}) => {
  const location = useLocation();
  // const currentUser = useContext(CurrentUserContext);

  // Поставить лайк (Сохранить фильм)
  const handleLikeClick = () => {
    setIsLoaderVisible(true); // Отображаем лоадер
    mainApi
      .createMovie(
        movie.country,
        movie.director,
        movie.duration,
        movie.year,
        movie.description,
        `https://api.nomoreparties.co${movie.image.url}`,
        movie.trailerLink,
        movie.nameRU,
        movie.nameEN,
        `https://api.nomoreparties.co${movie.image.url}`,
        movie.id
      )
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoaderVisible(false);
      });
  };

  // Снять лайк с карточки (Удалить фильм)
  const handleButtonDislikeClick = () => {
    setIsLoaderVisible(true);
    const savedMovie = savedMovies?.find((item) => item.movieId === movie.id);
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        setSavedMovies((newMoviesList) =>
          newMoviesList.filter((m) => m.movieId !== movie.id)
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoaderVisible(false);
      });
  };

  // Удалить фильм со страницы "Сохраненные фильмы"
  const handleButtonDeleteClick = () => {
    setIsLoaderVisible(true);
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((newMoviesList) =>
          newMoviesList.filter((m) => m._id !== movie._id)
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoaderVisible(false);
      });
  };

  return (
    <section className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__name">{movie.nameRU}</p>
        <div className="movies-card__duration">{`${Math.floor(movie.duration / 60)}ч ${
          movie.duration % 60
        }м`}</div>
        {location.pathname === "/movies" ? (
          <Button
            text={""}
            type={"movies-like"}
            additionalClass={saved ? "button_type_movies-like_active" : ""}
            onClick={saved ? handleButtonDislikeClick : handleLikeClick}
          />
        ) : (
          <Button text={""} type={"delete-movie"} onClick={handleButtonDeleteClick} />
        )}
      </div>
      <a
        className="movies-card__link"
        rel="noreferrer"
        target="_blank"
        href={movie.trailerLink}
      >
        <img
          className="movies-card__image"
          src={
            movie.image.url
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }
          alt={movie.nameRU}
        />
      </a>
    </section>
  );
};

export default MoviesCard;
