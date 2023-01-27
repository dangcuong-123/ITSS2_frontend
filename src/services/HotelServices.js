import { apiService } from "../common/helpers";

export const getHotel = async () => {
  return await apiService.get("/hotel/show");
};

export const searchHotel = async (nameHotel) => {
  return await apiService.get(`/hotel/search_hotel_name?name=${nameHotel}`);
};

export const getHotelById = async (id) => {
  return await apiService.get(`/hotel/search_hotel_id/${id}`);
};

export const getHotelLowerEqualPrice = async (price) => {
  return await apiService.get(
    `/hotel/search_hotel_lower_equal_price?price=${price}`
  );
};

export const getCommentsHotelById = async (id) => {
  return await apiService.get(
    `/comment/get_comments_by_hotel_id?hotel_id=${id}`
  );
};
