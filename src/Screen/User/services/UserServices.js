import { apiService } from "../../../common/helpers";

export const login = async (data) => {
  return await apiService.post("/authenticate/login", data);
};

export const register = async (data) => {
  return await apiService.post("/authenticate/signup", data);
};
