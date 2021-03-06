import axios from 'axios';
import { apiConfig } from '../config';

// 网上测试
const baseUrl = apiConfig.translateApi;
// 本地发布
// const baseUrl = 'http://192.168.1.111:9000'
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Access-Control-Allow-origin'] = 'http://192.168.1.233:3000';
const service = axios.create({
  baseURL: baseUrl,
  timeout: 30000
})

service.interceptors.request.use(config => {
  return config;
}, error => {
  console.log('Request Error' + error);
  return Promise.reject(error);
});

service.interceptors.response.use(response => {
  return response;
}, error => {
  console.log('Response Error' + error);
  return Promise.reject(error);
});

export default service;
