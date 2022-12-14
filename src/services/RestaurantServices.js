import { apiService } from "../common/helpers";

export const getRestaurant = async () => {
  return await apiService.get("/restaurant/show");
};
