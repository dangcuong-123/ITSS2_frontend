import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import * as React from "react";
import LayoutAdmin from "../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../style";
import { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";
import Stack from "@mui/material/Stack";
import "../../style/search_plan.css";
import "../../style/search.css";
// import CardHome from "../HomePage/CardHomePage";
import CardHomeTick from "../HomePage/CardHomeTick";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import Input from "../Input";
import ButtonSearch from "../Button";
import { getHotelLowerEqualPrice } from "../../services/HotelServices";

const marks = [
  {
    value: 0,
    label: '0đ',
  },
  {
    value: 25,
    label: '500.000đ',
  },
  {
    value: 50,
    label: '1.000.000đ',
  },
  {
    value: 75,
    label: '1.500.000đ',
  },
  {
    value: 100,
    label: '2.000.000đ',
  },
];


const SearchPlan = () => {
  const handleSearch = () => {};
  const [checkin, setCheckin] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date());
  const [search, onSearchChange] = useState();
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [price, setPrice] = useState(100);
  const [finalPrice, setFinalPrice] = useState(2000000);
  const [hotel, setHotel] = useState([]);

  const handleChangePrice = (new_price) => {
    setPrice(new_price);
  }

  const handleApplyPrice = () => {
    setFinalPrice(price*20000);
  }

  useEffect(() => {
    getHotelLowerEqualPrice(finalPrice)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {
        setHotel([]);
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
            <span className="text-2xl font-bold mb-5">Recommend hotel</span>
            <div className="m-5">
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  component={Link}
                  to={"/search-plan"}
                >
                  Hotel
                </Button>
                <Button variant="text">Restaurant</Button>
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
            <div>
              <span className="text-2xl font-bold mb-3">Check in</span>
              <div>
                <DatePicker onChange={setCheckin} value={checkin} />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold mb-3">Check out</span>
              <div>
                <DatePicker onChange={setCheckout} value={checkout} />
              </div>
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold mb-3">Cash</span>
            <Stack direction="row" alignItems="flex-start" spacing={6}>
            <Box width={400}>
            <Slider
              aria-label="Price"
              getAriaValueText={valuetext}
              step={25}
              valueLabelDisplay="off"
              marks={marks}
              value={price} 
              onChange={e => handleChangePrice(e.target.value)}
            />
            </Box>
            <Button variant="outlined" onClick={handleApplyPrice}>Apply</Button>
            </Stack>
          </div>
          <div>
            <CardHomeTick hotel={hotel}/>
          </div>
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

function valuetext(value) {
  return `${value}đ`;
}

export default SearchPlan;
