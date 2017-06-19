'use strict';

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://103.45.2.131:3001/api';

const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const encode = encodeURIComponent;
const omitSlug = article => Object.assign({}, article, { slug: undefined });

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (user_name, password) =>
    requests.post('/users/login', { user: { user_name, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { user_name: username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};


const Product = {
  all: () =>
    requests.get(`/products`)
};


export default {
  Auth,
  Product,
  setToken: _token => { token = _token; }
};
