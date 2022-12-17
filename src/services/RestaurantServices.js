import { apiService } from "../common/helpers";

export const getRestaurant = async () => {
  return await apiService.get("/restaurant/show");
};

export const searchRestaurant = async (nameRestaurant) => {
  return await apiService.get(
    `/restaurant/search_restaurant_name?name=${nameRestaurant}`
  );
};
