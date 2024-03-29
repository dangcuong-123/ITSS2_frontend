import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import Card from "../../../components/User/Login/Card";
import EmailIcon from "../../../assets/User/Login/EmailIcon.svg";
import PasswordIcon from "../../../assets/User/Login/Password.svg";
// import ShowPassword from "../../../assets/User/Login/show.svg";
import Input from "../../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/UserServices";
import accountStore from "../../../store/AccountInfoStore";
import { useTranslation } from "react-i18next";
import GoogleLogin from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { register } from "../../../services/UserServices";
import GGLogout from "../Logout/GGLogout";
const LoginScreen = () => {
	const client_id =
		"593679324297-88hvr9r4b2cotl53aisek8v22lohf2es.apps.googleusercontent.com";
	const navigate = useNavigate();
	const { t } = useTranslation();

	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");

	const [password, setPassword] = useState("");

	// state handle show error message
	const [errorMessage, setErrorMessage] = useState("");
	const [open, setOpen] = useState(false);

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

	// handle login
	const handleLogin = (e) => {
		e.preventDefault();
		const data = {
			email,
			password,
		};
		login(data)
			.then((res) => {
				if (res.status === 200) {
					// use session storage to store user info
					accountStore.email = email;
					sessionStorage.setItem("username", res.data[0][0]);
					sessionStorage.setItem("accountInfo", JSON.stringify(data));
					navigate("/");
				}
			})
			.catch((err) => {
				setOpen(true);
				if (err?.response?.data?.message) {
					setErrorMessage("Invalid email or password");
				} else {
					setErrorMessage("Something went wrong");
				}
			});
	};

	const onSuccess = (res) => {
		// e.preventDefault();
		console.log("Login successfully ! current user: ", res.profileObj);
		const email = res.profileObj.email;
		const password = "123456789";
		const name = res.profileObj.name;
		const data = {
			email,
			password,
			name,
		};
		const data_login = {
			email,
			password,
		};
		register(data)
			.then((res) => {
				// console.log()
				if (res.status === 200) {
					console.log("Sign up successfully");
					login(data_login)
						.then((res) => {
							accountStore.email = email;
							sessionStorage.setItem("username", email);
							sessionStorage.setItem("accountInfo", JSON.stringify(data_login));
							navigate("/");
						})
						.catch((err) => {
							// setOpen(true);
							console.log(err);
						});
				}
			})
			.catch((err) => {
				if (err?.response?.data?.message === 400) {
					setErrorMessage("Email already exists");
				} else {
					setErrorMessage("Something went wrong");
				}
			});

		login(data_login)
			.then((res) => {
				accountStore.email = email;
				sessionStorage.setItem("username", email);
				sessionStorage.setItem("accountInfo", JSON.stringify(data_login));
				navigate("/");
			})
			.catch((err) => {
				// setOpen(true);
				console.log(err);
			});

		// navigate("/");
	};

	const onFailure = (res) => {
		console.log("Login failed! res: ", res);
	};

	useEffect(() => {
		function start() {
			gapi.client.init({
				clientId: client_id,
				scope: "",
			});
		}
		gapi.load("client:auth2", start);
	});
	return (
		<div className="flex flex-col justify-center items-center">
			<Card>
				{open && (
					<Snackbar
						open={open}
						autoHideDuration={6000}
						onClose={() => setOpen(false)}
						anchorOrigin={{ vertical: "top", horizontal: "right" }}
					>
						<Alert onClose={() => setOpen(false)} severity="error">
							{errorMessage}
						</Alert>
					</Snackbar>
				)}
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
						type={"text"}
						leftIcon={EmailIcon}
						placeholder="Please enter e-mail"
						onChange={handleEmailChange}
					/>
					<span className="ml-6 text-red-500 text-xs">{emailError}</span>
					<label className="text-[#2286C3]">Password</label>
					<Input
						type={"password"}
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
				<div>
					<GoogleLogin
						clientId={client_id}
						buttonText="Login"
						onSuccess={onSuccess}
						onFailure={onFailure}
						cookiePolicy={"single_host_origin"}
						// isSignedIn={true}
					/>
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
