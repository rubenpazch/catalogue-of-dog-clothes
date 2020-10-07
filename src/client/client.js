import axios from 'axios';
import _ from 'lodash';
import { API_KEY, BASE_URL, LANGUAGE } from '../constants/ApplicationConstant';

const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use(userParam => {
  const commonParams = {
    params: {
      api_key: API_KEY,
      language: LANGUAGE,
    },
  };
  return _.merge({}, userParam, commonParams);
},
error => Promise.reject(error));

export { client as default };
