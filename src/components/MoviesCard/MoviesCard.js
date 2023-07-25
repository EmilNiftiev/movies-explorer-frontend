import "./MoviesCard.css";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import mainApi from "../../utils/MainApi";

const MoviesCard = ({ movie, setIsLoaderVisible, savedMovies, setSavedMovies }) => {
  const location = useLocation();

  // Сохранить фильм
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

  return (
    <section className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__name">{movie.nameRU}</p>
        <div className="movies-card__duration">{`${Math.floor(movie.duration / 60)}ч ${
          movie.duration % 60
        }м`}</div>
        {location.pathname === "/movies" ? (
          <Button text={""} type={"movies-like"} onClick={handleLikeClick} />
        ) : (
          <Button text={""} type={"delete-movie"} />
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
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.nameRU}
        />
      </a>
    </section>
  );
};

export default MoviesCard;
