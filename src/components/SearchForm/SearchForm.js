import "./SearchForm.css";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";
import moviesApi from "../../utils/MoviesApi";
import { searchMovieNameMaxLength } from "../../utils/constants";
import { useLocation } from "react-router-dom";

const SearchForm = ({
  setIsLoaderVisible,
  setTooltipState,
  setMovies,
  setFoundMovies,
  isShortMovieChecked,
  setIsShortMovieChecked,
  location,
  getSearchSavedMovies,
}) => {
  // ------------------- Валидация ---------------------
  const { pathname } = useLocation();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    values: {
      movieName: pathname === "/movies" ? localStorage.getItem("searchInputValue") : "",
    },
  });

  // -------------------- Сабмит -----------------------
  const onSubmit = (searchdata) => {
    if (location === "saved") {
      getSearchSavedMovies(searchdata.movieName);
    } else {
      setIsLoaderVisible(true); // Отображаем лоадер
      moviesApi
        .getMovies() // Получаем все фильмы
        .then((movies) => {
          setMovies(movies); // Загрузить фильмы
          // Фильтруем по тексту в поиске
          const foundedMovies = movies.filter(
            (movie) =>
              movie.nameRU.toLowerCase().includes(searchdata.movieName.toLowerCase()) // movieName - значение инпута
          );
          // Если массив не пустой, то записываем найденное в лок. хран.
          if (foundedMovies.length !== 0) {
            // Обновляем стейт
            setFoundMovies(foundedMovies);
            // Если ничего не найдено, покажем предупреждение
          } else {
            setTooltipState({
              isVisible: true,
              isSuccessful: false,
              text: "Ничего не найдено!",
            });
          }
          localStorage.setItem("foundedMovies", JSON.stringify(foundedMovies)); // Добавляем найденный фильм в лок. хран.
          localStorage.setItem("checkboxState", isShortMovieChecked);
          localStorage.setItem("searchInputValue", searchdata.movieName);
        })
        .catch((err) => {
          console.log(err);
          setTooltipState({
            isVisible: true,
            isSuccessful: false,
            text: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
          });
        })
        .finally(() => {
          setIsLoaderVisible(false);
        });
    }
  };

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="search-form__container">
          <input
            className="search-form__input"
            name="search"
            placeholder="Фильм"
            {...register("movieName", {
              required: "Нужно ввести ключевое слово",
              maxLength: {
                value: searchMovieNameMaxLength,
                message: "Максимальная длина - 30 символов",
              },
            })}
          />

          <Button
            type="search"
            buttonType="submit"
            additionalClass={!isValid && "button_disabled"}
          />
        </div>
        <div className="search-form__errors-container">
          {errors?.movieName && (
            <p className="search-form__error-message">
              {errors?.movieName?.message ||
                "Произошла ошибка! Пожалуйста, попробуйте еще раз."}
            </p>
          )}
        </div>
        <FilterCheckbox
          isShortMovieChecked={isShortMovieChecked}
          setIsShortMovieChecked={setIsShortMovieChecked}
        />
      </form>
    </section>
  );
};

export default SearchForm;
