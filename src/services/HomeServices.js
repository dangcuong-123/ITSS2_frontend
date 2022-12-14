import { apiService } from "../common/helpers";

export const showHomePage = async () => {
  return await apiService.get("/homepage/show");
};

export const getRestaurant = async () => {
  return await apiService.get("/restaurant/show");
};

export const getHotel = async () => {
  return await apiService.get("/hotel/show");
};
