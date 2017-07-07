'use strict';

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

// const API_ROOT = 'http://127.0.0.1:3001/api';
const API_ROOT = 'http://103.45.2.131:3001/api';

const responseBody = res => res.body;

const handle = (err, response) => {
  // console.log('handle err: '  + JSON.parse(JSON.stringify(err))['status']);
  // console.log('handle response: '  + JSON.stringify(response));
};

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
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  custom_get: url =>
      superagent.get(url),
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const encode = encodeURIComponent;
const omitSlug = article => Object.assign({}, article, { slug: undefined });

const Ping = {
  ping: url =>
    requests.custom_get(url)
};


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


const User = {
  all: () =>
    requests.get(`/users`),
  del: username =>
    requests.del(`/users/${username}`),
  create: (user_name, password, email) =>
    requests.post('/users', {user: {
      user_name: user_name,
      password: password,
      email: email
    }}),
  get: (user_name) =>
    requests.get(`/users/${user_name}`),
  update: (user_name, password) =>
    requests.put(`/users/${user_name}`, {user:{password}})
};

const Node = {
  all: (countUser) =>
      requests.get(`/nodes?countUser=${countUser}`),
  del: id =>
      requests.del(`/nodes/${id}`),
  create: node =>
      requests.post(`/nodes`, {node: node}),
  get: id =>
      requests.get(`/nodes/${id}`),
  update: node =>
      requests.put(`/nodes/${node.id}`, {node: node}),
  users: nodeid =>
      requests.get(`/nodes/${nodeid}/users`),
  addUser: (node, nodeuser) =>
      requests.post(`/nodes/${node.id}/users`, {nodeuser: nodeuser}),
  delUser: (node, user) =>
      requests.del(`/nodes/${node.id}/users/${user.id}`),
  suspendUser: (node, user) =>
      requests.get(`/nodes/${node.id}/users/${user.id}/suspend`),
  syncUser: (node, user) =>
      requests.get(`/nodes/${node.id}/users/${user.id}/sync`),
  recoverUser: (node, user) =>
      requests.get(`/nodes/${node.id}/users/${user.id}/sync`)
 };

const DashBoard = {
  statistics: () =>
      requests.get(`/comm/statistics`),
 };



export default {
  Auth,
  User,
  Node,
  Ping,
  DashBoard,
  setToken: _token => { token = _token; }
};
