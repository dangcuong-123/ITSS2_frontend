import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import LoginScreen from "../Screen/User/Login/LoginScreen";
import RegisterScreen from "../Screen/User/Login/RegisterScreen";
import PasswordForgotScreen from "../Screen/User/Login/PasswordForgotScreen";
import HomePageScreen from "../Screen/HomePage/HomePageScreen";
import Sidebar from "../components/Sidebar/Sidebar";
import AddRestaurant from "../Screen/Restaurant/Add1"
import EditRestaurant from "../Screen/Restaurant/Edit"
import AddHotel from "../Screen/Hotel/Add"
import EditHotel from "../Screen/Hotel/Edit";

const HomeSidebar = () => {
  return (
    <div className="relative">
      <Sidebar />
      <Routes>
        <Route path="home" element={<HomePageScreen />} />
      </Routes>
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="password_forgot" element={<PasswordForgotScreen />} />
        <Route path="addRes" element={<AddRestaurant></AddRestaurant>}/>
        <Route path="editRes" element={<EditRestaurant></EditRestaurant>}/>
        <Route path="addHotel" element={<AddHotel></AddHotel>}></Route>
        <Route path="editHotel" element={<EditHotel></EditHotel>}></Route>
        <Route path="/*" element={<HomeSidebar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
