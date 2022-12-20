import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import Card from "../../../components/User/Login/Card";
import Input from "../../../components/Input";
import EmailIcon from "../../../assets/User/Login/EmailIcon.svg";
import PasswordIcon from "../../../assets/User/Login/Password.svg";
import user from "../../../assets/User/Login/user.svg";
import { useNavigate } from "react-router-dom";
import { register } from "../../../services/UserServices";
// import ShowPassword from "../../../assets/User/Login/show.svg";
import { Link } from "react-router-dom";
import { Button } from "antd";
import accountStore from "../../../store/AccountInfoStore";

const RegisterScreen = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");

	const [password, setPassword] = useState("");

	const [userName, setUserName] = useState("");

	const [passwordError, setPasswordError] = useState("");

	// handle email change
	const handleEmailChange = (e) => {
		// check valid email
		const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
		if (emailRegex.test(e.target.value)) {
			setEmail(e.target.value);
			setEmailError("");
		} else {
			setEmailError("Invalid email");
		}
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
		if (e.target.value === password) {
			setPasswordError("");
		} else {
			setPasswordError("Confirm Password not match");
		}
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
					navigate("/login");
					accountStore.updateAccountInfo(data);
					<Snackbar open={true} autoHideDuration={6000}>
						<Alert severity="success">This is a success message!</Alert>
					</Snackbar>;
				}
			})
			.catch((err) => {
				console.log(err);
				if (err) {
					<Snackbar open={true} autoHideDuration={6000}>
						<Alert severity="error">This is a error message!</Alert>
					</Snackbar>;
				}
			});
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<Card>
				<span className="text-sm text-[#2286C3] mb-4">Register</span>
				<div className="w-4/5 flex flex-col justify-center">
					<Input
						type={"text"}
						leftIcon={user}
						placeholder="User Name"
						onChange={handleUserNameChange}
					/>
					<Input
						type={"text"}
						leftIcon={EmailIcon}
						placeholder="Email Address"
						onChange={handleEmailChange}
					/>
					<span className="ml-6 text-red-500 text-xs">{emailError}</span>
					<Input
						type={"password"}
						leftIcon={PasswordIcon}
						placeholder="Password"
						onChange={handlePasswordChange}
					/>
					<Input
						type="password"
						leftIcon={PasswordIcon}
						placeholder="Password confirmation"
						onChange={handleConfirmPasswordChange}
					/>
					<span className="ml-6 text-red-500 text-xs">{passwordError}</span>
					<Button
						style={{ float: "right" }}
						className="bg-gradient-to-r p-5 m-5 from-[#64B5F6] to-[#2286C3] py-3 text-white shadow-lg text-center"
						onClick={handleRegister}
					>
						Register
					</Button>
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
