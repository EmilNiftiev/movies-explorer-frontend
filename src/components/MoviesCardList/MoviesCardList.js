import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import { shortMovieDuration } from "../../utils/constants";

const MoviesCardList = ({
  foundMovies,
  setIsLoaderVisible,
  isShortMovieChecked,
  savedMovies,
  setSavedMovies,
}) => {
  const location = useLocation();

  // Отображение результатов поиска в зависимости от чекбокса короткометражек
  const filteredMovies = isShortMovieChecked
    ? foundMovies.filter((movie) => movie.duration <= shortMovieDuration)
    : foundMovies;

  function getSavedMovieCard(arr, movie) {
    return arr.find((item) => {
      return item.movieId === movie.id;
    });
  }

  return (
    <section>
      {/* До начала поиска отображаем надпись "ничего не найдено" */}
      {location.pathname === "/movies" && filteredMovies.length === 0 && (
        <p className="movies-not-found">Ничего не найдено</p>
      )}
      {/* --------------------------------------------------------------- */}
      {/* На странице сохраненных фильмов - "У Вас нет сохранённых фильмов" */}
      {location.pathname === "/saved-movies" && (
        <p className="movies-not-found">У Вас нет сохранённых фильмов</p>
      )}
      {/* --------------------------------------------------------------- */}
      {location.pathname === "/movies" && (
        <ul className="movies-card-list">
          {filteredMovies?.slice().map((movie) => (
            <MoviesCard
              setIsLoaderVisible={setIsLoaderVisible}
              key={movie.id}
              movie={movie}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              saved={getSavedMovieCard(savedMovies, movie)}
            />
          ))}
        </ul>
      )}
      {location.pathname === "/saved-movies" && (
        <ul className="movies-card-list">
          <MoviesCard
            setIsLoaderVisible={setIsLoaderVisible}
            setSavedMovies={setSavedMovies}
          />
        </ul>
      )}
      {location.pathname === "/movies" && filteredMovies.length !== 0 && (
        <Button text={"Ещё"} type={"more"} />
      )}
    </section>
  );
};

export default MoviesCardList;
