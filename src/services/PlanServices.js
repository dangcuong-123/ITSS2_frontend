import { apiService } from "../common/helpers";

export const createPlan = async (data) => {
  return await apiService.post("/plan/create", data);
};

export const showPlan = async () => {
  return await apiService.get("/plan/show");
};

export const getPlanByUserName = async (user_name) => {
  return await apiService.get(`/plan/get_plans_by_user_name?user_name=${user_name}`);
};

export const deletePlan = async (id) => {
  return await apiService.delete(`/plan/delete?id=${id}`);
};

export const getRecommendTransport = async (location_name) => {
  return await apiService.get(
    `/plan/recommend_transport_by_location_name?location_name=${location_name}`
  );
};
