import { apiService } from "../common/helpers";

export const getPlace = async () => {
  return await apiService.get("/place/show"); //TODO
};

export const searchPlace = async (namePlace) => {
  return await apiService.get(`/place/search_place_name?name=${namePlace}`); //TODO
};

