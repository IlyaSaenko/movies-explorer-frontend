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
        password: password
      }),
    });
  }

  login(email, password) {
    return this._request(`/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });
  }

  checkToken(token) {
    return this._request(`/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    });
  }

  getUser(token) {
    return this._request(`/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
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
        email: email
      }),
    });
  }

  getMovies(token) {
    return this._request(`/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
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
      body: JSON.stringify(movie)
    });
  }

  deleteMovie(movieId, token) {
    return this._request(`/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    });
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://movies.diplom.api.nomoredomainsicu.ru',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default mainApi;