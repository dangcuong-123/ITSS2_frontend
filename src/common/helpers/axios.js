import axios from "axios";

const defaultConfig = {
  baseURL: "http://35.78.85.107:8080/",
  timeout: 10000,
};

export const createApiPjc = () => {
  const instance = axios.create(defaultConfig);
  return instance;
};

export const apiService = createApiPjc();
