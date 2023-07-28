import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import { shortMovieDuration, moviesPerPage, moviesToUpload } from "../../utils/constants";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const MoviesCardList = ({
  foundMovies,
  setIsLoaderVisible,
  isShortMovieChecked,
  savedMovies,
  setSavedMovies,
  searchSavedMovies,
  isMobile,
  isTablet,
}) => {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);

  // Отображение результатов поиска в зависимости от чекбокса короткометражек
  const filteredMovies = isShortMovieChecked
    ? foundMovies.filter((movie) => movie.duration <= shortMovieDuration)
    : foundMovies;

  function getSavedMovieCard(arr, movie) {
    return arr.find((item) => {
      return item.movieId === movie.id;
    });
  }

  // ------------------------ Раздел "Сохраненные фильмы" ------------------------------

  // Фильмы, которые сохранил текущий пользователь
  const savedByCurrentUser = savedMovies.filter(
    (movie) => movie.owner === currentUser._id
  );

  // Фильтруем сохраненные фильмы по длительности
  const filteredSavedMovies = isShortMovieChecked
    ? savedByCurrentUser.filter((movie) => movie.duration <= shortMovieDuration)
    : savedByCurrentUser;

  // Показать сохраненные фильмы при поиске
  const filteredSavedMoviesWithSearch =
    searchSavedMovies !== ""
      ? filteredSavedMovies.filter((movie) =>
          movie.nameRU.toLowerCase().includes(searchSavedMovies?.toLowerCase())
        )
      : filteredSavedMovies;

  // ------------------------- Настройка работы кнопки "Ещё" ----------------------
  // Стейт количества отображаемых фильмов
  const [displayedMoviesState, setDisplayedMoviesState] = useState({
    showedMovies: moviesPerPage.onDesktop,
    loadMoreMovies: moviesToUpload.onDesktop,
  });
  // Количество отображаемых карточек в зависимости от разрешения экрана
  useEffect(() => {
    if (isMobile) {
      setDisplayedMoviesState({
        showedMovies: moviesPerPage.onMobile,
        loadMoreMovies: moviesToUpload.onMobile,
      });
    } else if (isTablet) {
      setDisplayedMoviesState({
        showedMovies: moviesPerPage.onTablet,
        loadMoreMovies: moviesToUpload.onTablet,
      });
    } else {
      setDisplayedMoviesState({
        showedMovies: moviesPerPage.onDesktop,
        loadMoreMovies: moviesToUpload.onDesktop,
      });
    }
  }, [isTablet, isMobile]);
  // Функция-обработчик кнопки "Ещё"
  const handleUploadClick = () => {
    setDisplayedMoviesState((prevState) => ({
      ...prevState,
      showedMovies:
        displayedMoviesState.showedMovies + displayedMoviesState.loadMoreMovies,
    }));
  };

  return (
    <section>
      {/* До начала поиска отображаем надпись "ничего не найдено" */}
      {location.pathname === "/movies" &&
        localStorage.getItem("foundedMovies") &&
        filteredMovies.length === 0 && (
          <p className="movies-not-found">Ничего не найдено</p>
        )}
      {/* --------------------------------------------------------------- */}
      {/* На странице сохраненных фильмов - "У Вас нет сохранённых фильмов" */}
      {location.pathname === "/saved-movies" &&
        filteredSavedMoviesWithSearch.length === 0 && (
          <p className="movies-not-found">У Вас нет сохранённых фильмов</p>
        )}

      {/* --------------------------------------------------------------- */}
      {location.pathname === "/movies" && (
        <ul className="movies-card-list">
          {filteredMovies?.slice(0, displayedMoviesState.showedMovies).map((movie) => (
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
          {filteredSavedMoviesWithSearch?.map((savedMovie) => (
            <MoviesCard
              setIsLoaderVisible={setIsLoaderVisible}
              setSavedMovies={setSavedMovies}
              key={savedMovie._id}
              movie={savedMovie}
            />
          ))}
        </ul>
      )}
      {location.pathname === "/movies" &&
        displayedMoviesState.showedMovies < filteredMovies.length && (
          <Button text={"Ещё"} type={"more"} onClick={handleUploadClick} />
        )}
    </section>
  );
};

export default MoviesCardList;
