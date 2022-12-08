import { Routes, Route } from "react-router-dom";

import HomePageScreen from "../Screen/HomePage/HomePageScreen";
import AdminSidebar from "../components/Sidebar/AdminSidebar";
import SearchPlan from "../components/SearchPlan/SearchPlan";
import SearchPlanRestaurant from "../components/SearchPlan/SearchPlanRestaurant";
import ListHotel from "../Screen/Hotel/ListHotel";
import ListRestaurant from "../Screen/Restaurant/ListRestaurant";
import DetailRestaurant from "../Screen/Restaurant/DetailRestaurant";
import DetailHotel from "../Screen/Hotel/DetailHotel";

const User = () => {
  return (
    <div className="relative">
      <AdminSidebar />
      <Routes>
        <Route path="*" element={<HomePageScreen />} />
        <Route path="search-plan" element={<SearchPlan />} />
        <Route path="search-plan-restaurant" element={<SearchPlanRestaurant />} />
        <Route path="list-hotel" element={<ListHotel></ListHotel>}></Route>
        <Route path="detail-hotel" element={<DetailHotel></DetailHotel>}></Route>
        <Route path="detail-restaurant" element={<DetailRestaurant></DetailRestaurant>}></Route>
        <Route path="list-restaurant" element={<ListRestaurant></ListRestaurant>}></Route>
      </Routes>
    </div>
  );
};

export default User;
