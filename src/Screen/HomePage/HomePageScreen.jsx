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
import {
  getHotelAndRestaurantList,
  showHomePage,
} from "../../services/HomeServices";

const listLocation = ["All", "Ha Long", "Ha Noi"];

const HomePageScreen = () => {
  // const [value, setValue] = useState("ha long");
  const [locations, setlocation] = useState("All");

  // get restaurant and hotel
  const [restaurant, setRestaurant] = useState([]);
  const [hotel, setHotel] = useState([]);

  const handleSearch = (new_value) => {
    setlocation("");
  };

  const handleChangeTab = (location) => {
    setlocation(location);
  };

  useEffect(() => {
    if (locations === "All") {
      showHomePage()
        .then((res) => {
          setRestaurant(res.data.restaurants);
          setHotel(res.data.hotels);
        })
        .catch((err) => {
          setRestaurant([]);
          setHotel([]);
        });
    } else {
      getHotelAndRestaurantList(locations)
        .then((res) => {
          setRestaurant(res.data.restaurants);
          setHotel(res.data.hotels);
          console.log(res.data.hotels);
        })
        .catch((err) => {
          setRestaurant([]);
          setHotel([]);
        });
    }
  }, [locations]);

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
                {listLocation.map((loc, idx) => {
                  return (
                    <Button
                      key={idx}
                      variant={loc === locations ? "contained" : "text"}
                      onClick={(e) => handleChangeTab(loc)}
                    >
                      {loc}
                    </Button>
                  );
                })}

                {/* <Button
                  variant={location == "hai phong" ? "contained" : "text"}
                  onClick={(e) => handleChangeTab("hai phong")}
                >
                  Hải Phòng
                </Button>
                <Button
                  variant={location == "ho chi minh" ? "contained" : "text"}
                  onClick={(e) => handleChangeTab("ho chi minh")}
                >
                  TP Hồ Chí Minh
                </Button> */}
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
                {/* <Button
                  variant={location == "ha noi" ? "contained" : "text"}
                  onClick={(e) => handleChangeTab("ha noi")}
                >
                  Hà Nội
                </Button>
                <Button
                  variant={location == "hai phong" ? "contained" : "text"}
                  onClick={(e) => handleChangeTab("hai phong")}
                >
                  Hải Phòng
                </Button>
                <Button
                  variant={location == "ho chi minh" ? "contained" : "text"}
                  onClick={(e) => handleChangeTab("ho chi minh")}
                >
                  TP Hồ Chí Minh
                </Button> */}
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
