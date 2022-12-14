import { apiService } from "../common/helpers";

export const getHotel = async () => {
  return await apiService.get("/hotel/show");
};
