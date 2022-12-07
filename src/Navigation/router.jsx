import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import LoginScreen from "../Screen/User/Login/LoginScreen";
import RegisterScreen from "../Screen/User/Login/RegisterScreen";
import PasswordForgotScreen from "../Screen/User/Login/PasswordForgotScreen";
import HomePageScreen from "../Screen/HomePage/HomePageScreen";
import Sidebar from "../components/Sidebar/Sidebar";
import SearchPlan from "../components/SearchPlan/SearchPlan";
import SearchPlanRestaurant from "../components/SearchPlan/SearchPlanRestaurant";
const HomeSidebar = () => {
  return (
    <div className="relative">
      <Sidebar />
      <Routes>
        <Route path="home" element={<HomePageScreen />} />
        <Route path="search-plan" element={<SearchPlan />} />
        <Route path="search-plan-restaurant" element={<SearchPlanRestaurant />} />

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
        <Route path="/*" element={<HomeSidebar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
