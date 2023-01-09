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

const Admin = () => {
	return (
		<div className="relative">
			<AdminSidebar />
			<Routes>
				<Route path="/" element={<HomePageScreen />} />
				<Route path="search-plan" element={<SearchPlan />} />
				<Route
					path="search-plan-restaurant"
					element={<SearchPlanRestaurant />}
				/>
				<Route
					path="list-restaurant"
					element={<ListRestaurant></ListRestaurant>}
				></Route>
				<Route
					path="detail-restaurant"
					element={<DetailRestaurant></DetailRestaurant>}
				></Route>
				<Route path="add-restaurant" element={<AddRestaurant />} />
				<Route
					path="edit-restaurant"
					element={<EditRestaurant></EditRestaurant>}
				/>
				<Route path="list-hotel" element={<ListHotel></ListHotel>}></Route>
				<Route
					path="detail-hotel"
					element={<DetailHotel></DetailHotel>}
				></Route>
				<Route path="add-hotel" element={<AddHotel></AddHotel>}></Route>
				<Route path="edit-hotel" element={<EditHotel></EditHotel>}></Route>
				<Route path="detail-plan" element={<DetailPlan></DetailPlan>}></Route>
			</Routes>
		</div>
	);
};

export default Admin;
