import { apiService } from "../common/helpers";

export const getPlace = async () => {
  return await apiService.get("/location/show");
};

export const searchPlace = async (namePlace) => {
  return await apiService.get(`/place/search_place_name?name=${namePlace}`); //TODO
};

export const getTags = async () => {
  return await apiService.get("/location/get_tags_name");
};

export const createPlace = async (place) => {
  return await apiService.post("/location/create", {
    place,
  });
};

export const editPlace = async (place) => {
  return await apiService.put("/location/edit", {
    place,
  });
};

export const deletePlace = async (id) => {
  return await apiService.delete(`/location/delete?id=${id}`);
};

export const getLocationById = async (id) => {
  return await apiService.get(`/location/get_location_by_id/${id}`);
};

export const TRANSPORT_OPTIONS = [
  { key: "train", value: "Tàu hỏa" },
  { key: "car", value: "Ô tô" },
  { key: "ship", value: "Tàu thủy" },
  { key: "motorbike", value: "Xe máy" },
];

export const TAG_OPTIONS = [
  { key: "bien", value: "bien" },
  { key: "nui", value: "nui" },
  { key: "hang dong", value: "hang dong" },
  { key: "chua", value: "chua" },
  { key: "danh lam thang canh", value: "danh lam thang canh" },
];

export const PROVINCE_OPTIONS = ["Ha Noi", "Quang Ninh"];
export const PROVINCE_OPTIONS_ALL = PROVINCE_OPTIONS.unshift("Tất cả");
