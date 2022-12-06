import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/User/Login/Header";
import LoginScreen from "../Screen/User/Login/LoginScreen";
import RegisterScreen from "../Screen/User/Login/RegisterScreen";
import RegisterUserInfoScreen from "../Screen/User/Login/RegisterUserInfoScreen";
import PasswordForgotScreen from "../Screen/User/Login/PasswordForgotScreen";

import AddRestaurant from "../Screen/Restaurant/Add1"
import EditRestaurant from "../Screen/Restaurant/Edit"
import AddHotel from "../Screen/Hotel/Add"
import EditHotel from "../Screen/Hotel/Edit";


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="register_user_info" element={<RegisterUserInfoScreen />} />
        <Route path="password_forgot" element={<PasswordForgotScreen />} />
        <Route path="addRes" element={<AddRestaurant></AddRestaurant>}/>
        <Route path="editRes" element={<EditRestaurant></EditRestaurant>}/>
        <Route path="addHotel" element={<AddHotel></AddHotel>}></Route>
        <Route path="editHotel" element={<EditHotel></EditHotel>}></Route>
        
       
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
