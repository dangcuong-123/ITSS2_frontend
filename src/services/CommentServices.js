import { apiService } from "../common/helpers";

export const getCommentsRestaurantById = async (id) => {
  return await apiService.get(
    `/comment/get_comments_by_restaurant_id?hotel_id=${id}`
  );
};

export const getCommentsHotelById = async (id) => {
  return await apiService.get(
    `/comment/get_comments_by_hotel_id?hotel_id=${id}`
  );
};

export const createComment = async (data) => {
  return await apiService.post(`/comment/create`, data);
};
