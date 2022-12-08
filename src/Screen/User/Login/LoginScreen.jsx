import React, { useState } from "react";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";
import Card from "../../../components/User/Login/Card";
import EmailIcon from "../../../assets/User/Login/EmailIcon.svg";
import PasswordIcon from "../../../assets/User/Login/Password.svg";
// import ShowPassword from "../../../assets/User/Login/show.svg";
import Input from "../../../components/Input";
import { Link, useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    axios
      .post(`http://35.78.85.107:8080/authenticate/login`, data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/search-plan");
        }
      })
      .catch((err) => {
        if (err) {
          <Snackbar autoHideDuration={6000}>
            <Alert severity="error">{err.response.data.message}</Alert>
          </Snackbar>;
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Card>
        <div className="w-4/5 flex flex-col justify-center">
          <div className="flex items-center my-3">
            <div className="flex-grow h-px bg-[#2286C3]"></div>
            <span className="text-[#2286C3] text-sm font-medium px-4">
              LOGIN
            </span>
            <div className="flex-grow h-px bg-[#2286C3]"></div>
          </div>
          <label className="text-[#2286C3]">E-mail</label>
          <Input
            leftIcon={EmailIcon}
            placeholder="Please enter e-mail"
            onChange={handleEmailChange}
          />
          <label className="text-[#2286C3]">Password</label>
          <Input
            leftIcon={PasswordIcon}
            placeholder="Please enter password"
            onChange={handlePasswordChange}
          />
          <div>
            <Link
              to="/password_forgot"
              className="text-center text-[#64B5F6] mt-5 text-lg font-medium"
            >
              <u>Forgot password ?</u>
            </Link>
          </div>
          <Link
            // to="/home"
            style={{ float: "right" }}
            className="bg-gradient-to-r p-5 m-5 from-[#64B5F6] to-[#2286C3] py-3 text-white shadow-lg text-center"
            onClick={handleLogin}
          >
            Login
          </Link>
        </div>
      </Card>

      <Link
        to="/register"
        className="text-center text-[#64B5F6] mt-6 text-lg font-medium"
      >
        Create a new account
      </Link>
    </div>
  );
};

export default LoginScreen;
