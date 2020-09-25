import axios from 'axios'

axios.defaults.baseURL = '';
axios.defaults.timeout = 5000;

export const getList = (url) => {
  return axios.get({
    url,
  })
}