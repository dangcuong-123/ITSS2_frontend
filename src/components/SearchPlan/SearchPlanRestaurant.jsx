import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import React, { useEffect } from "react";
import LayoutAdmin from "../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../style";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Stack from "@mui/material/Stack";
import "../../style/search_plan.css";
import "../../style/search.css";
import CardRestaurentTick from "../HomePage/CardRestaurantTick";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import ButtonSearch from "../Button";
import Input from "../Input";
import {
  getRestaurantLowerEqualPrice,
  searchRestaurant,
} from "../../services/RestaurantServices";
import { useLocation } from "react-router-dom";

const SearchPlanRestaurant = () => {
  const [price, setPrice] = useState(100);
  const [finalPrice, setFinalPrice] = useState(2000000);
  const [restaurant, setRestaurant] = useState();
  const location = useLocation();
  const { hotelSelect } = location.state;

  const marks = [
    {
      value: 0,
      label: "0đ",
    },
    {
      value: 25,
      label: "500.000đ",
    },
    {
      value: 50,
      label: "1.000.000đ",
    },
    {
      value: 75,
      label: "1.500.000đ",
    },
    {
      value: 100,
      label: "2.000.000đ",
    },
  ];

  const handleSearch = (e) => {
    searchRestaurant(e.target.value)
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((err) => {
        setRestaurant([]);
        // console.log(err);
      });
  };

  const handleApplyPrice = () => {
    setFinalPrice(price * 20000);
  };

  const handleChangePrice = (new_price) => {
    setPrice(new_price);
  };

  useEffect(() => {
    getRestaurantLowerEqualPrice(finalPrice)
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((err) => {
        setRestaurant([]);
        console.log(err);
      });
  }, [finalPrice]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <AdminTitle>Search Plan</AdminTitle>
          <div className="flex justify-between ml-2 mr-7">
            <Input
              placeholder="Where do you want to go ?"
              onChange={handleSearch}
            />
            <ButtonSearch color="font-bold mr-0">Search</ButtonSearch>
          </div>
          <div>
            <span className="text-2xl font-bold mb-5">
              Recommend Restaurant
            </span>
            <div className="m-5">
              <Stack spacing={2} direction="row">
                <Button variant="text" component={Link} to={"/search-plan"}>
                  Hotel
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to={"/search-plan-restaurant"}
                >
                  Restaurant
                </Button>
              </Stack>
            </div>
          </div>
          <div className="title-tools">
            {/* <div>
              <div>
                <form className=" mb-10">
                  <input
                    id="userInput"
                    className="search tc bg-lightest-purple placeholder-white"
                    type="search"
                    placeholder="search ..."
                    style={{
                      display: "block",
                      margin: "auto",
                      border: "1px solid white",
                      borderRadius: "30px",
                      height: "48px",
                      width: "300px",
                      outline: "none",
                      backgroundColor: "black",
                    }}
                    value={search}
                    onChange={(text) => onSearchChange(text)}
                  />
                </form>
              </div>
            </div> */}
          </div>
          <div>
            <span className="text-2xl font-bold mb-3">Cash</span>
            <Stack direction="row" alignItems="flex-start" spacing={6}>
              <Box width={"80vh"}>
                <Slider
                  aria-label="Price"
                  // getAriaValueText={valuetext}
                  step={25}
                  valueLabelDisplay="off"
                  marks={marks}
                  value={price}
                  onChange={(e) => handleChangePrice(e.target.value)}
                />
              </Box>
              <Button variant="outlined" onClick={handleApplyPrice}>
                Apply
              </Button>
            </Stack>
          </div>
          <div>
            <CardRestaurentTick
              restaurant={restaurant}
              hotelSelect={hotelSelect}
            />
          </div>
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default SearchPlanRestaurant;
