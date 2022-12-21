import axios from "axios";

const defaultConfig = {
  baseURL: "http://13.230.246.62:8080/",
  timeout: 10000,
};

export const createApiPjc = () => {
  const instance = axios.create(defaultConfig);
  return instance;
};

export const apiService = createApiPjc();
