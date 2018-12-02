import axios from 'axios';
import store from '../store';

const setIsLoading = status => store.dispatch('toggleIsLoadingss', status);

const customAxios = axios.create();

customAxios.interceptors.request.use((config) => {
  // Do something before request is sent
  setIsLoading(true);
  return config;
}, (error) => {
  // Do something with request error
  setIsLoading(false);
  return Promise.reject(error);
});

// Add a response interceptor
customAxios.interceptors.response.use((response) => {
  // Do something with response data
  setIsLoading(false);
  return response.data;
}, (error) => {
  // Do something with response error
  setIsLoading(false);
  return Promise.reject(error);
});

export default customAxios;
