import axios from 'axios';
import firebase from 'firebase/compat/app';

const axiosClient = axios.create({
  timeout: 30000,
});

axiosClient.interceptors.request.use(async (config) => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    const token = await currentUser.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  },
);

export default axiosClient;
