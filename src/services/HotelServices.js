import { apiService } from "../common/helpers";

export const getHotel = async () => {
  return await apiService.get("/hotel/show");
};

export const getHotelById = async (id) => {
  return await apiService.get(`/hotel/search_hotel_id/${id}`);
};

export const getHotelLowerEqualPrice = async (price) => {
  return await apiService.get(`/hotel/search_hotel_lower_equal_price?price=${price}`);
};
