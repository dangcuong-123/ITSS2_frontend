import { Routes, Route } from "react-router-dom";

import HomePageScreen from "../Screen/HomePage/HomePageScreen";
import UserSidebar from "../components/Sidebar/UserSidebar";
import SearchPlan from "../components/SearchPlan/SearchPlan";
import SearchPlanRestaurant from "../components/SearchPlan/SearchPlanRestaurant";
import ListHotel from "../Screen/Admin/Hotel/ListHotel";
import ListRestaurant from "../Screen/Admin/Restaurant/ListRestaurant";
import DetailRestaurant from "../Screen/Admin/Restaurant/DetailRestaurant";
import DetailHotel from "../Screen/Admin/Hotel/DetailHotel";
import DetailPlan from "../Screen/Admin/Plan/PlanDetail";
import Profile from "../Screen/User/Profile/Profile";

const User = () => {
  return (
    <div className="relative">
      <UserSidebar />
      <Routes>
        <Route path="*" element={<HomePageScreen />} />
        <Route path="search-plan" element={<SearchPlan />} />
        <Route
          path="search-plan-restaurant"
          element={<SearchPlanRestaurant />}
        />
        <Route path="list-hotel" element={<ListHotel></ListHotel>}></Route>
        <Route
          path="detail-hotel/:id"
          element={<DetailHotel></DetailHotel>}
        ></Route>
        <Route
          path="detail-restaurant"
          element={<DetailRestaurant></DetailRestaurant>}
        ></Route>
        <Route
          path="list-restaurant"
          element={<ListRestaurant></ListRestaurant>}
        ></Route>
        <Route path="detail-plan" element={<DetailPlan></DetailPlan>}></Route>
        <Route path="profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
};

export default User;
