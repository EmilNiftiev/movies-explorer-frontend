export const techStack = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

export const currentDate = new Date().getFullYear();

export const nameMinLength = 2;
export const nameMaxLength = 30;
export const searchMovieNameMinLength = 2;
export const searchMovieNameMaxLength = 30;
export const passwordMinLength = 8;
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const nameRegex = /^[а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ\-\s]*$/;
export const shortMovieDuration = 40;

export const validationMessages = {
  required: "Поле должно быть заполнено",
  nameMinLength: "Минимальная длина имени - 2 символа",
  nameMaxLength: "Максимальная длина имени - 2 символа",
  passwordMinLength: "Пароль должен быть не короче 8 символов",
};
