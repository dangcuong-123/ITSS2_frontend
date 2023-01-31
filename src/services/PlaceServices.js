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
  { key: "bien", value: "Biển" },
  { key: "nui", value: "Núi" },
  { key: "hang dong", value: "Hang động" },
  { key: "chua", value: "Chùa" },
  { key: "danh lam thang canh", value: "Danh lam thắng cảnh" },
  { key: "di tich lich su", value: "Di tích lịch sử" },
];

export const PROVINCE_OPTIONS = [
  "An Giang",
  "Bà rịa – Vũng tàu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cần Thơ",
  "Cao Bằng",
  "Đà Nẵng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "Tiền Giang",
  "Thành phố Hồ Chí Minh",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
];
