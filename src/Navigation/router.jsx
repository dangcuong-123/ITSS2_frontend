import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import User from "./user";
import Admin from "./admin";
import LoginScreen from "../Screen/User/Login/LoginScreen";
import RegisterScreen from "../Screen/User/Login/RegisterScreen";
import PasswordForgotScreen from "../Screen/User/Login/PasswordForgotScreen";

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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
