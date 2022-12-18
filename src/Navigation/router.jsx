import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import User from "./user";
import Admin from "./admin";
import LoginScreen from "../Screen/User/Login/LoginScreen";
import RegisterScreen from "../Screen/User/Login/RegisterScreen";
import PasswordForgotScreen from "../Screen/User/Login/PasswordForgotScreen";
import DetailPlan from "../Screen/Admin/Plan/PlanDetail";
import AddHotel from "../Screen/Admin/Hotel/AddHotel";
import EditHotel from "../Screen/Admin/Hotel/EditHotel";
import AddRestaurant from "../Screen/Admin/Restaurant/AddRestaurant";
import EditRestaurant from "../Screen/Admin/Restaurant/EditRestaurant";


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="password_forgot" element={<PasswordForgotScreen />} />
        <Route path="/*" element={<User />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="detail-plan" element={<DetailPlan></DetailPlan>}></Route>
        <Route path="add-hotel" element={<AddHotel></AddHotel>}/>
        <Route path="edit-hotel/:id" element={<EditHotel></EditHotel>}/>
        <Route path="add-restaurant" element={<AddRestaurant></AddRestaurant>}/>
        <Route path="edit-restaurant" element={<EditRestaurant></EditRestaurant>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
