import { apiService } from "../common/helpers";

export const showHomePage = async () => {
  return await apiService.get("/homepage/show");
};

export const getHotelAndRestaurantList = async (location_name) => {
  return await apiService.get(
    `/homepage/search_location_name?name=${location_name}`
  );
};

export const searchByTags = async (data) => {
  return await apiService.post(
    `/homepage/search_by_location_province_and_tags`,
    data
  );
};
