import { apiService } from "../common/helpers";

export const login = async (data) => {
  return await apiService.post("/authenticate/login", data);
};

export const getRestaurant = async () => {
  return await apiService.get("/restaurant/show");
};

export const getHotel = async () => {
  return await apiService.get("/hotel/show");
};
