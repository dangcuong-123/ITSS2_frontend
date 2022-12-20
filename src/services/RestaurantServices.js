import { apiService } from "../common/helpers";

export const getRestaurant = async () => {
  return await apiService.get("/restaurant/show");
};

export const searchRestaurant = async (nameRestaurant) => {
  return await apiService.get(
    `/restaurant/search_restaurant_name?name=${nameRestaurant}`
  );
};

export const getRestaurantById = async (id) => {
  return await apiService.get(`/restaurant/search_restaurant_id/${id}`);
};

export const getRestaurantLowerEqualPrice = async (price) => {
  return await apiService.get(
    `/restaurant/search_restaurant_lower_equal_price?price=${price}`
  );
};
