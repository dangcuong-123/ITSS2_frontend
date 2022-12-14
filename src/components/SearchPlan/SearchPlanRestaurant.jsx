import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import * as React from "react";
import LayoutAdmin from "../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../style";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Stack from "@mui/material/Stack";
import "../../style/search_plan.css";
import "../../style/search.css";
// import CardHome from "../HomePage/CardHomePage";
import Checkbox from "@mui/material/Checkbox";
import CardRestaurentTick from "../HomePage/CardRestaurantTick";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import ButtonSearch from "../Button";
import Input from "../Input";
const SearchPlanRestaurant = () => {
  const handleSearch = () => {};
  // const [checkin, setCheckin] = useState(new Date());
  // const [checkout, setCheckout] = useState(new Date());
  const [search, onSearchChange] = useState();
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
            <span className="text-2xl font-bold mb-5">Recommend hotel</span>
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
            <div>
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
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold mb-3">Cash</span>
            <Box width={300}>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          </div>
          <div>
            <CardRestaurentTick />
          </div>
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default SearchPlanRestaurant;
