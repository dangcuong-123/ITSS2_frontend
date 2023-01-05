import { apiService } from "../common/helpers";

export const createPlan = async (data) => {
  return await apiService.post("/plan/create", data);
};
