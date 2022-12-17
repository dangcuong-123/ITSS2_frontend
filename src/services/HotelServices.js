import { apiService } from "../common/helpers";

export const getHotel = async () => {
  return await apiService.get("/hotel/show");
};

export const searchHotel = async (nameHotel) => {
  return await apiService.get(`/hotel/search_hotel_name?name=${nameHotel}`);
};
