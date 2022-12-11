import React, { useState } from "react";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";
import Card from "../../../components/User/Login/Card";
import Input from "../../../components/Input";
import EmailIcon from "../../../assets/User/Login/EmailIcon.svg";
import PasswordIcon from "../../../assets/User/Login/Password.svg";
import user from "../../../assets/User/Login/user.svg";
import { useNavigate } from "react-router-dom";
import { register } from "../services/UserServices";
// import ShowPassword from "../../../assets/User/Login/show.svg";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // handle user name change
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  // handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // handle register
  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      userName,
    };
    register(data)
      .then((res) => {
        if (res.status === 200) {
          alert("Register Success");
          navigate("/login");
          // <Snackbar autoHideDuration={6000}>
          // 	<Alert severity="success">{res?.data}</Alert>
          // </Snackbar>;
        }
      })
      .catch((err) => {
        if (err) {
          alert("Register Fail");
          // <Snackbar autoHideDuration={6000}>
          // 	<Alert severity="error">{err?.response?.data?.message}</Alert>
          // </Snackbar>;
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Card>
        <span className="text-sm text-[#2286C3] mb-4">Register</span>
        <div className="w-4/5 flex flex-col justify-center">
          <Input
            leftIcon={user}
            placeholder="User Name"
            onChange={handleUserNameChange}
          />
          <Input
            leftIcon={EmailIcon}
            placeholder="Email Address"
            onChange={handleEmailChange}
          />
          <Input
            leftIcon={PasswordIcon}
            placeholder="Password"
            type="password"
            onChange={handlePasswordChange}
          />
          <Input
            leftIcon={PasswordIcon}
            placeholder="Password confirmation"
            type="password"
            onChange={handleConfirmPasswordChange}
          />
          <Link
            style={{ float: "right" }}
            className="bg-gradient-to-r p-5 m-5 from-[#64B5F6] to-[#2286C3] py-3 text-white shadow-lg text-center"
            onClick={handleRegister}
          >
            Register
          </Link>
        </div>
      </Card>
      <Link
        to="/login"
        className="text-center text-[#64B5F6] mt-6 text-lg font-medium"
      >
        Login here
      </Link>
    </div>
  );
};

export default RegisterScreen;
