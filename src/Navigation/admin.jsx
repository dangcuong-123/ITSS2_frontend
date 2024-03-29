import { Routes, Route } from "react-router-dom";

import HomePageScreen from "../Screen/HomePage/HomePageScreen";
import AdminSidebar from "../components/Sidebar/AdminSidebar";
import ListRestaurant from "../Screen/Admin/Restaurant/ListRestaurant";
import DetailRestaurant from "../Screen/Admin/Restaurant/DetailRestaurant";
import AddRestaurant from "../Screen/Admin/Restaurant/AddRestaurant";
import EditRestaurant from "../Screen/Admin/Restaurant/EditRestaurant";
import ListHotel from "../Screen/Admin/Hotel/ListHotel";
import DetailHotel from "../Screen/Admin/Hotel/DetailHotel";
import AddHotel from "../Screen/Admin/Hotel/AddHotel";
import EditHotel from "../Screen/Admin/Hotel/EditHotel";
import SearchPlan from "../components/SearchPlan/SearchPlan";
import SearchPlanRestaurant from "../components/SearchPlan/SearchPlanRestaurant";
import DetailPlan from "../Screen/Admin/Plan/PlanDetail";
import Sites from "../Screen/Admin/Sites/Sites";
import AddSite from "../Screen/Admin/Sites/AddSite";
import ListPlace from "../Screen/Admin/Place/ListPlace";
import AddPlace from "../Screen/Admin/Place/AddPlace";
import EditPlace from "../Screen/Admin/Place/EditPlace";
import ListPlan from "../Screen/Admin/Plan/ListPlan";
import Profile from "../Screen/User/Profile/Profile";
const Admin = () => {
  console.log(
    '🚀 ~ file: router.jsx:20 ~ Home ~ sessionStorage.getItem("accountInfo")',
    sessionStorage.getItem("accountInfo")
  );
  return (
    <div className="relative">
      <AdminSidebar />
      <Routes>
        <Route path="/" element={<HomePageScreen />} />
        <Route path="search-plan" element={<SearchPlan />} />
        <Route
          path="search-plan/search-plan-restaurant"
          element={<SearchPlanRestaurant />}
        />
        <Route
          path="list-restaurant"
          element={<ListRestaurant></ListRestaurant>}
        ></Route>
        <Route
          path="detail-restaurant/:id"
          element={<DetailRestaurant></DetailRestaurant>}
        ></Route>
        <Route path="add-restaurant" element={<AddRestaurant />} />
        <Route
          path="list-restaurant/edit-restaurant/:id"
          element={<EditRestaurant></EditRestaurant>}
        />
        <Route path="list-hotel" element={<ListHotel></ListHotel>}></Route>
        <Route
          path="detail-hotel/:id"
          element={<DetailHotel></DetailHotel>}
        ></Route>
        <Route path="add-hotel" element={<AddHotel></AddHotel>}></Route>
        <Route path="edit-hotel/:id" element={<EditHotel></EditHotel>}></Route>
        <Route path="detail-plan" element={<DetailPlan></DetailPlan>}></Route>
        <Route path="sites" element={<Sites></Sites>}></Route>
        <Route path="add-site" element={<AddSite></AddSite>}></Route>
        <Route path="/list-places" element={<ListPlace></ListPlace>}></Route>
        <Route
          path="list-places/add-place"
          element={<AddPlace></AddPlace>}
        ></Route>
        <Route
          path="list-places/edit-place/:id"
          element={<EditPlace></EditPlace>}
        ></Route>
        <Route path="saved" element={<ListPlan></ListPlan>}></Route>
        <Route path="account" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
