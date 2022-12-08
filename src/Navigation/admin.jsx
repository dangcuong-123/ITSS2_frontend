import { Routes, Route } from "react-router-dom";

import HomePageScreen from "../Screen/HomePage/HomePageScreen";
import AdminSidebar from "../components/Sidebar/AdminSidebar";
import AddRestaurant from "../Screen/Restaurant/AddRestaurant"
import EditRestaurant from "../Screen/Restaurant/EditRestaurant"
import AddHotel from "../Screen/Hotel/AddHotel"
import EditHotel from "../Screen/Hotel/EditHotel";
import SearchPlan from "../components/SearchPlan/SearchPlan";
import SearchPlanRestaurant from "../components/SearchPlan/SearchPlanRestaurant";

const Admin = () => {
  return (
    <div className="relative">
      <AdminSidebar />
      <Routes>
        <Route path="home" element={<HomePageScreen />} />
        <Route path="search-plan" element={<SearchPlan />} />
        <Route path="search-plan-restaurant" element={<SearchPlanRestaurant />} />
        <Route path="add-restaurant" element={<AddRestaurant/>}/>
        <Route path="edit-restaurant" element={<EditRestaurant></EditRestaurant>}/>
        <Route path="add-hotel" element={<AddHotel></AddHotel>}></Route>
        <Route path="edit-hotel" element={<EditHotel></EditHotel>}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
