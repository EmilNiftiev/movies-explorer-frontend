import "./SearchForm.css";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";
import moviesApi from "../../utils/MoviesApi";
import {
  searchMovieNameMinLength,
  searchMovieNameMaxLength,
} from "../../utils/constants";

const SearchForm = ({
  setIsLoaderVisible,
  setTooltipState,
  setMovies,
  setFoundMovies,
}) => {
  // ------------------- Валидация ---------------------
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  // -------------------- Сабмит -----------------------
  const onSubmit = (searchdata) => {
    setIsLoaderVisible(true); // Отображаем лоадер
    moviesApi
      .getMovies() // Получаем все фильмы
      .then((movies) => {
        setMovies(movies); // Загрузить фильмы
        // Фильтруем по тексту в поиске
        const foundedMovies = movies.filter(
          (movie) =>
            movie.nameRU
              .toLowerCase()
              .includes(searchdata.movieName.toLowerCase()) // movieName - значение инпута
        );
        // Если массив не пустой, то записываем найденное в лок. хран.
        if (foundedMovies.length !== 0) {
          localStorage.setItem("foundedMovies", JSON.stringify(foundedMovies)); // Добавляем найденный фильм в лок. хран.
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
              minLength: {
                value: searchMovieNameMinLength,
                message: "Минимальная длина - 2 символа",
              },
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
        <FilterCheckbox />
      </form>
    </section>
  );
};

export default SearchForm;
