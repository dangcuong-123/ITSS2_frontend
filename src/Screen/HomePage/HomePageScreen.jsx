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
import { getHotelAndRestaurantList } from "../../services/HomeServices";

const HomePageScreen = () => {
  const [value, setValue] = useState("ha noi");
  const [locationDefault, setlocationDefault] = useState("ha noi");
  // get restaurant and hotel
  const [restaurant, setRestaurant] = useState([]);
  const [hotel, setHotel] = useState([]);

  const handleSearch = (new_value) => {
    setlocationDefault("")
    setValue(new_value);
  };

  const handleChangeTab = (location) => {
    setlocationDefault(location)
    setValue(location);
  }

  useEffect(() => {
    getHotelAndRestaurantList(value)
      .then((res) => {
        setRestaurant(res.data.restaurants);
        setHotel(res.data.hotels);
        console.log(res.data.hotels);
      })
      .catch((err) => {
        setRestaurant([]);
        setHotel([]);
        console.log(err);
      });
  }, [value]);

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
                <Button variant={locationDefault == "ha noi" ? "contained" : "text"} onClick={e => handleChangeTab("ha noi")}>Hà Nội</Button>
                <Button variant={locationDefault == "hai phong" ? "contained" : "text"} onClick={e => handleChangeTab("hai phong")}>Hải Phòng</Button>
                <Button variant={locationDefault == "ho chi minh" ? "contained" : "text"} onClick={e => handleChangeTab("ho chi minh")}>TP Hồ Chí Minh</Button>
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
                <Button variant={locationDefault == "ha noi" ? "contained" : "text"} onClick={e => handleChangeTab("ha noi")}>Hà Nội</Button>
                <Button variant={locationDefault == "hai phong" ? "contained" : "text"} onClick={e => handleChangeTab("hai phong")}>Hải Phòng</Button>
                <Button variant={locationDefault == "ho chi minh" ? "contained" : "text"} onClick={e => handleChangeTab("ho chi minh")}>TP Hồ Chí Minh</Button>
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
