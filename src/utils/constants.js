// --------- Список технологий для компонента Tech -----------
export const techStack = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Git",
  "Express.js",
  "mongoDB",
];

// --------- Получить текущую дату -----------
export const currentDate = new Date().getFullYear();

// --------- Константы и паттерны для валидации -----------
export const nameMinLength = 2;
export const nameMaxLength = 30;
export const searchMovieNameMinLength = 2;
export const searchMovieNameMaxLength = 30;
export const passwordMinLength = 8;
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const nameRegex = /^[а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ\-\s]*$/;

// --------- Длительность короткометражного фильма -----------
export const shortMovieDuration = 40;

// --------- Сообщения-предупреждения для валидации -----------
export const validationMessages = {
  required: "Поле должно быть заполнено",
  nameMinLength: "Минимальная длина имени - 2 символа",
  nameMaxLength: "Максимальная длина имени - 2 символа",
  passwordMinLength: "Пароль должен быть не короче 8 символов",
};

// --------- Константы для обработчика кнопки "Ещё" на странице "Фильмы" ---------
export const moviesPerPage = {
  onDesktop: 7,
  onTablet: 7,
  onMobile: 5,
};
export const moviesToUpload = {
  onDesktop: 3,
  onTablet: 3,
  onMobile: 2,
};
