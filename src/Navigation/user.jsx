import { Routes, Route } from "react-router-dom";

import HomePageScreen from "../Screen/HomePage/HomePageScreen";
import UserSidebar from "../components/Sidebar/UserSidebar";
import SearchPlan from "../components/SearchPlan/SearchPlan";
import SearchPlanRestaurant from "../components/SearchPlan/SearchPlanRestaurant";
import ListHotel from "../Screen/Admin/Hotel/ListHotel";
import ListRestaurant from "../Screen/Admin/Restaurant/ListRestaurant";
import DetailRestaurant from "../Screen/Admin/Restaurant/DetailRestaurant";
import DetailHotel from "../Screen/Admin/Hotel/DetailHotel";

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
          path="detail-hotel"
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
      </Routes>
    </div>
  );
};

export default User;