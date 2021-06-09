import {apiServeMesto} from './constants.js';
const {CONECT_SERVER, TOKEN, COHORT_ID, PATHS} = apiServeMesto;

// Попросили назвать класс с маленькой буквы
class api {
  #baseUrl
  #headers
  #pathUser
  #pathCards
  #cardLikes
  constructor({baseUrl, headers, paths: {user, cards, cardLikes}}) {
    this.#baseUrl = baseUrl;
    this.#headers = headers;
    this.#pathUser = user;
    this.#pathCards = cards;
    this.#cardLikes = cardLikes;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _serverConnectionGet(path) {
    return fetch(`${this.#baseUrl}/${path}`, {
      headers: this.#headers
    })
    .then(this._checkResponse);
  }

  _serverConnectionSend(path, method, body) {
    return fetch(`${this.#baseUrl}/${path}`, {
      method,
      headers: this.#headers,
      body: JSON.stringify(body)
    })
    .then(this._checkResponse);
  }

  _serverConnectionEdit(path, method, dataItem) {
    return fetch(`${this.#baseUrl}/${path}/${dataItem}`, {
      method,
      headers: this.#headers
    })
    .then(this._checkResponse);
  }



  getInitialCards() {
    return this._serverConnectionGet(this.#pathCards);
  }

  getInitialUser() {
    return this._serverConnectionGet(this.#pathUser);
  }

  patchUpdateProfile(name, about) {
    return this._serverConnectionSend(this.#pathUser, 'PATCH', {
      name,
      about
    });
  }

  postAddCard(name, link) {
    return this._serverConnectionSend(this.#pathCards, 'POST', {
      name,
      link
    });
  }


  deleteCard(cardId) {
    return this._serverConnectionEdit(this.#pathCards, 'DELETE', cardId);
  }

  putAppendLike(cardId) {
    return this._serverConnectionEdit(this.#cardLikes, 'PUT', cardId);
  }

  deleteLike(cardId) {
    return this._serverConnectionEdit(this.#cardLikes, 'DELETE', cardId);
  }

  patchUpdateUserAvatar(avatarUrl) {
    return this._serverConnectionSend(`${this.#pathUser}/avatar`, 'PATCH', {avatar: avatarUrl});
  }
}

export default new api({
  baseUrl: `${CONECT_SERVER}/${COHORT_ID}`,
  headers: {
    authorization: TOKEN,
    'Content-Type': 'application/json'
  },
  paths: PATHS
});
