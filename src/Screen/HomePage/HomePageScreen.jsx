import React, { useState, useEffect } from "react";
import Search from "../../components/HomePage/Search";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import LayoutAdmin from "../../components/Sidebar/AdminContainer";
import HotelCard from "../../components/HomePage/HotelCard";
import RestaurantCard from "../../components/HomePage/RestaurantCard";
import { AdminTitle } from "../../style";
import axios from "axios";

const HomePageScreen = () => {
	const baseURL = process.env.REACT_APP_BASE_URL;

	// const [search, setSearch] = useState("");
	const handleSearch = () => {};

	// get restaurant and hotel
	const [restaurant, setRestaurant] = useState([]);
	const [hotel, setHotel] = useState([]);

	const getRestaurant = async () => {
		await axios
			.get(baseURL + "/restaurant/show")
			.then((res) => {
				setRestaurant(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getHotel = async () => {
		await axios
			.get(baseURL + "/hotel/show")
			.then((res) => {
				setHotel(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getRestaurant();
		getHotel();
	}, []);

	return (
		<React.Fragment>
			<CssBaseline />
			<Container fixed>
				<LayoutAdmin>
					<AdminTitle>HOME PAGE</AdminTitle>
					<div>
						<Search onSearchChange={handleSearch} />
					</div>
					<div>
						<span className="text-2xl font-bold mb-5">Recommend hotel</span>
						<div className="m-5">
							<Stack spacing={2} direction="row">
								<Button variant="text">Hà Nội</Button>
								<Button variant="contained">Hải Phòng</Button>
								<Button variant="text">TP Hồ Chí Minh</Button>
							</Stack>
						</div>
						<HotelCard hotel={hotel} />
					</div>
					<div className="mt-5">
						<span className="text-2xl font-bold mb-5">
							Recommend restaurant
						</span>
						<div className="m-5">
							<Stack spacing={2} direction="row">
								<Button variant="text">Hà Nội</Button>
								<Button variant="text">Hải Phòng</Button>
								<Button variant="contained">TP Hồ Chí Minh</Button>
							</Stack>
						</div>
						<RestaurantCard restaurant={restaurant} />
					</div>
				</LayoutAdmin>
			</Container>
		</React.Fragment>
	);
};

export default HomePageScreen;
