import { apiService } from "../common/helpers";

export const getSite = async () => {
  return await apiService.get("/location/show");
};

export const searchSite = async (nameSite) => {
  return await apiService.get(
    `/location/search_Site_name?name=${nameSite}`
  );
};

export const getSiteById = async (id) => {
  return await apiService.get(`/location/search_Site_id/${id}`);
};

export const getSiteLowerEqualPrice = async (price) => {
  return await apiService.get(
    `/location/search_Site_lower_equal_price?price=${price}`
  );
};
