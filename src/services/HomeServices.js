import { apiService } from "../common/helpers";

export const showHomePage = async () => {
  return await apiService.get("/homepage/show");
};
