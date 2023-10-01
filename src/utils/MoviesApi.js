class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _request(route, options) {
    return fetch(`${this._baseUrl}${route}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getBeatMovies() {
    return this._request('/beatfilm-movies', {
      method: 'GET',
      headers: this._headers,
    });
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
});




// class MoviesApi {
//   constructor(config) {
//     this._url = config.baseUrl;
//     this._headers = config._headers;
//   }

//   _getResponseData(response) {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(`Ошибка: ${response.status}`);
//   }

//   getAllMovies() {
//     return fetch(`${this._url}`, {
//       method: 'GET',
//       headers: this._headers
//     })
//       .then(this._getResponseData);
//   }
// }

// const moviesApi = new MoviesApi({
//   baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${localStorage.getItem('jwt')}`
//   }
// });

// export default moviesApi;