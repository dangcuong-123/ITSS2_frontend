import { apiService } from "../common/helpers";

export const login = async (data) => {
  return await apiService.post("/authenticate/login", data);
};

export const register = async (data) => {
  return await apiService.post("/authenticate/signup", data);
};

export const editProfile = async (data) => {
  return await apiService.put("/authenticate/edit_profile", data);
};
