class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _request(route, options) {
    return fetch(`${this._baseUrl}${route}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }

  register(name, email, password) {
    return this._request(`/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
  }

  login(email, password) {
    return this._request(`/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }

  checkToken(token) {
    return this._request(`/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getUser(token) {
    return this._request(`/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    });
  }

  udpateUser(name, email, token) {
    return this._request(`/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }

  getMovies(token) {
    return this._request(`/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    });
  }

  saveMovie(movie, token) {
    return this._request(`/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movie),
    });
  }

  deleteMovie(movieId, token) {
    return this._request(`/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://movies.diplom.api.nomoredomainsicu.ru',
  // baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;




// class MainApi {
//   constructor(config) {
//     this._url = config.baseUrl;
//     this._headers = config.headers;
//   }

//   _getResponseData(response) {
//     if (response.ok) {
//       return(response.json());
//     } else {
//       return(response.json())
//         .then((err) => {
//           const error = new Error(err.message);
//           error.status = response.status;
//           throw error;
//         })
//     }
//   }

//   getUserInfo() {
//     console.log('вызов 3')
//     return fetch(`${this._url}/users/me`, {
//       method: 'GET',
//       headers: this._headers
//     })
//       .then(this._getResponseData);
//   }

//   _getSavedMovies() {
//     console.log('вызов 4')
//     return fetch(`${this._url}/movies`, {
//       method: 'GET',
//       headers: this._headers
//     })
//       .then(this._getResponseData);
//   }

//   getAllNeededData() {
//     return Promise.all([this.getUserInfo(), this._getSavedMovies()]);
//   }

//   patchUserInfo(data) {
//     console.log('вызов 2')
//     return fetch(`${this._url}/users/me`, {
//       method: 'PATCH',
//       headers: this._headers,
//       body: JSON.stringify(data)
//     })
//     .then(this._getResponseData);
//   }

//   postNewMovie(data) {
//     return fetch(`${this._url}/movies`, {
//       method: 'POST',
//       headers: this._headers,
//       body: JSON.stringify({
        // country: data.country,
        // director: data.director,
        // duration: data.duration,
        // year: data.year,
        // description: data.description,
        // image: data.image,
        // trailerLink: data.trailerLink,
        // thumbnail: data.thumbnail,
        // movieId: data.movieId,
        // nameRU: data.nameRU,
        // nameEN: data.nameEN
//       })
//     })
//     .then(this._getResponseData);
//   }

//   deleteMovie(movieId) {
//     return fetch(`${this._url}/movies/${movieId}`, {
//       method: 'DELETE',
//       headers: this._headers
//     })
//     .then(this._getResponseData);
//   }

//   getToken() {
//     return this._headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
//   }
// }

// const mainApi = new MainApi({
//   // baseUrl: 'http://localhost:3000',
//   baseUrl: 'https://movies.diplom.api.nomoredomainsicu.ru',
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// export default mainApi;