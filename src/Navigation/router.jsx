import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/User/Login/Header";
import LoginScreen from "../Screen/User/Login/LoginScreen";
import RegisterScreen from "../Screen/User/Login/RegisterScreen";
import RegisterUserInfoScreen from "../Screen/User/Login/RegisterUserInfoScreen";
import PasswordForgotScreen from "../Screen/User/Login/PasswordForgotScreen";
import HomePageScreen from "../Screen/HomePage/HomePageScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="register_user_info" element={<RegisterUserInfoScreen />} />
        <Route path="password_forgot" element={<PasswordForgotScreen />} />
        <Route path="home" element={<HomePageScreen />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
