class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this.currentToken = "";
  }

  // Обрабатываем ответ
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    }
    return res.json();
  }

  // получить информацию о фильмах
  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._getResponseData);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
