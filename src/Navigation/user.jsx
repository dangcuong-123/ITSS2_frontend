import { Routes, Route } from "react-router-dom";

import HomePageScreen from "../Screen/HomePage/HomePageScreen";
import AdminSidebar from "../components/Sidebar/AdminSidebar";
import SearchPlan from "../components/SearchPlan/SearchPlan";
import SearchPlanRestaurant from "../components/SearchPlan/SearchPlanRestaurant";
import ListHotel from "../Screen/Hotel/ListHotel";
import ListRestaurant from "../Screen/Restaurant/ListRestaurant";

const User = () => {
  return (
    <div className="relative">
      <AdminSidebar />
      <Routes>
        <Route path="*" element={<HomePageScreen />} />
        <Route path="search-plan" element={<SearchPlan />} />
        <Route path="search-plan-restaurant" element={<SearchPlanRestaurant />} />
        <Route path="list-hotel" element={<ListHotel></ListHotel>}></Route>
        <Route path="list-restaurant" element={<ListRestaurant></ListRestaurant>}></Route>
      </Routes>
    </div>
  );
};

export default User;
