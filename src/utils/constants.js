// --------- Список технологий для компонента Tech -----------
export const TECH_STACK = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

// --------- Получить текущую дату -----------
export const CURRENT_DATE = new Date().getFullYear();

// --------- Константы и паттерны для валидации -----------
export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 30;
export const SEARCH_MOVIE_NAME_MAX_LENGTH = 30;
export const PASSWORD_MIN_LENGTH = 8;
export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const NAME_REGEX = /^[а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ\-\s]*$/;

// --------- Длительность короткометражного фильма -----------
export const SHORT_MOVIE_DURATION = 40;

// --------- Сообщения-предупреждения для валидации -----------
export const validationMessages = {
  REQUIRED: "Поле должно быть заполнено",
  NAME_MIN_LENGTH: "Минимальная длина имени - 2 символа",
  NAME_MAX_LENGTH: "Максимальная длина имени - 2 символа",
  PASSWORD_MIN_LENGTH: "Пароль должен быть не короче 8 символов",
};

// --------- Константы точек перестроения экрана ---------
export const TABLET_WIDTH = "(max-width: 768px)";
export const MOBILE_WIDTH = "(max-width: 480px)";

// --------- Константы для начального отображения карточек на странице "Фильмы" ---------
export const moviesPerPage = {
  ON_DESKTOP: 7,
  ON_TABLET: 7,
  ON_MOBILE: 5,
};

// --------- Константы для обработчика кнопки "Ещё" на странице "Фильмы" ---------
export const moviesToUpload = {
  ON_DESKTOP: 7,
  ON_TABLET: 7,
  ON_MOBILE: 5,
};

/* Отображение карточек я делал исходя из ТЗ в тренажере, формулировка в котором
слегка отличается от того, которое присылали Вы. https://dropmefiles.com/ivMH4
Сейчас исправил на тот вариант, к которому мы пришли в разговоре с наставником
нашей группы. Если это снова не правильный вариант, дайте, пожалуйста, подсказку
по поводу количества, т.к. это никак не относится к функционалу, это всего лишь
значение константы. Спасибо! */
