class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // Обрабатываем ответ
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    }
    return res.json();
  }

  #currentToken = "";
  set currentToken(value) {
    this.#currentToken = value;
  }

  // Регистрация
  register = (name, email, password) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._getResponseData);
  };

  // Логин
  login = (password, email) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    })
      .then(this._getResponseData)
      .then((data) => {
        if (data) {
          localStorage.setItem("token", data.token);
          return data;
        }
      });
  };

  checkToken = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._getResponseData)
      .then((data) => data);
  };

  // Получить информацию о фильмах
  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.#currentToken}`,
      },
    }).then(this._getResponseData);
  }

  // Получить информацию о пользователе
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.#currentToken}`,
      },
    }).then(this._getResponseData);
  }

  // Отправить информацию о пользователе
  setUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.#currentToken}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._getResponseData);
  }

  // создать карточку с фильмом
  createMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId
  ) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.#currentToken}`,
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    }).then(this._getResponseData);
  }

  // Удалить карточку с фильмом
  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.#currentToken}`,
      },
    }).then(this._getResponseData);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.emilniftiev.diplom.nomoreparties.sbs",
});

export default mainApi;
