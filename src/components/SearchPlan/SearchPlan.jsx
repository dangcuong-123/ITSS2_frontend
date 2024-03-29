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
import CardHomeTick from "../HomePage/CardHomeTick";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import Input from "../Input";
import ButtonSearch from "../Button";
import { Snackbar, Alert } from "@mui/material";
import {
  getHotelLowerEqualPrice,
  searchHotel,
} from "../../services/HotelServices";
import { useTranslation } from "react-i18next";

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

const SearchPlan = () => {
  const [checkin, setCheckin] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date());
  const [price, setPrice] = useState(100);
  const [finalPrice, setFinalPrice] = useState(2000000);
  const [hotel, setHotel] = useState([]);
  const [open, setOpen] = useState(false);
  const handleSearch = (e) => {
    searchHotel(e.target.value)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {
        setHotel([]);
        // console.log(err);
      });
  };

  const handleChangePrice = (new_price) => {
    setPrice(new_price);
  };

  const handleApplyPrice = () => {
    setFinalPrice(price * 20000);
  };

  const compareDate = (date) => {
    if (checkin <= date) {
      setOpen(false);
      setCheckout(date);
    } else {
      setOpen(true);
      setCheckout(new Date());
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { t } = useTranslation();

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

  // console.log(open)
  // console.log(checkin, checkout)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <AdminTitle>Tìm Kiếm Plan</AdminTitle>
          <div className="flex justify-between ml-2 mr-7">
            <Input placeholder="Bạn muốn đi đâu ?" onChange={handleSearch} />
            <ButtonSearch color="font-bold mr-0">Tìm Kiếm</ButtonSearch>
          </div>
          <div>
            <span className="text-2xl font-bold mb-5">Gợi Ý Khách Sạn</span>
            <div className="m-5">
              <Stack spacing={2} direction="row">
                <Button variant="contained" component={Link} to={"/list-hotel"}>
                  Hotel
                </Button>
                <Button variant="text" component={Link} to={"/list-restaurant"}>
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
            <div>
              <span className="text-2xl font-bold mb-3">Ngày Đến</span>
              <div>
                <DatePicker onChange={setCheckin} value={checkin} />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold mb-3">Ngày Về</span>
              <div>
                <DatePicker
                  onChange={(date) => {
                    compareDate(date);
                  }}
                  value={checkout}
                />
              </div>
            </div>
          </div>
          <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert severity="error" onClose={handleClose}>
                Xin vui lòng phải đặt Ngày Về trước Ngày Đi!
              </Alert>
            </Snackbar>
          </div>
          <div>
            <span className="text-2xl font-bold mb-3">Giá Tiền</span>
            <Stack direction="row" alignItems="flex-start" spacing={6}>
              <Box width={"80vh"}>
                <Slider
                  aria-label="Price"
                  getAriaValueText={valuetext}
                  step={25}
                  valueLabelDisplay="off"
                  marks={marks}
                  value={price}
                  onChange={(e) => handleChangePrice(e.target.value)}
                />
              </Box>
              <Button variant="outlined" onClick={handleApplyPrice}>
                Áp Dụng
              </Button>
            </Stack>
          </div>
          <div>
            <CardHomeTick hotel={hotel} />
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
