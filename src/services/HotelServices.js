import { apiService } from "../common/helpers";

export const getHotel = async () => {
  return await apiService.get("/hotel/show");
};

export const getHotelLowerEqualPrice = async (price) => {
  return await apiService.get(`/hotel/search_hotel_lower_equal_price?price=${price}`);
};
