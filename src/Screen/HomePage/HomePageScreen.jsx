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
import accountStore from "../../store/AccountInfoStore";
import {
  Snackbar,
  Alert,
  Select,
  MenuItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { getTags, TAG_OPTIONS } from "../../services/PlaceServices";
const listLocation = ["All", "Quang Ninh", "Ha Noi"];

const HomePageScreen = () => {
  const navigate = useNavigate();
  const [locations, setlocation] = useState("All");
  const [tagOptions, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // get restaurant and hotel
  const [restaurant, setRestaurant] = useState([]);
  const [hotel, setHotel] = useState([]);

  // set success message when login success
  const [openSuccess, setOpenSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSearch = (new_value) => {
    setlocation("");
  };
  const { t } = useTranslation();

  const handleChangeTab = (location) => {
    setlocation(location);
  };

  useEffect(() => {
    if (sessionStorage.getItem("accountInfo")) {
      setOpenSuccess(true);
      setSuccessMessage("Login successfully");
    }

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
        })
        .catch((err) => {
          setRestaurant([]);
          setHotel([]);
        });
    }
  }, [locations]);

  // if (sessionStorage.getItem("accountInfo")) {
  // 	navigate("/home");
  // }
  useEffect(() => {
    getTags()
      .then((res) => {
        var tags_arr = [];
        res.data.forEach((element) => {
          var tag = TAG_OPTIONS.filter((obj) => obj.key === element)[0];
          var x = {
            key: element,
            value: tag.value,
          };
          tags_arr.push(x);
        });
        setTags(tags_arr);
        setSelectedTags(tags_arr.map((a) => a.value));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <AdminTitle>{t("homepage.title")}</AdminTitle>
          <div>
            <Search onSearchChange={handleSearch} />
            <div className="w-1/4 relative flex w-full ml-6 mb-3 border-1 border-[#2286C3]">
              <FormControl
                size="small"
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
                                 rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
              >
                <InputLabel id="label">Phân loại</InputLabel>
                <Select
                  id="tags"
                  name="tags"
                  value={selectedTags}
                  label="Phân loại"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value[value.length - 1] === "all") {
                      setSelectedTags(
                        selectedTags.length === tagOptions.length
                          ? []
                          : tagOptions.map((a) => a.value)
                      );
                      return;
                    }
                    setSelectedTags(value);
                  }}
                  multiple
                  renderValue={(selected) => {
                    if (selected.length === tagOptions.length) {
                      return <em>Tất cả</em>;
                    }
                    return selected.join(", ");
                  }}
                  className="py-1"
                >
                  <MenuItem key="all" value="all">
                    <Checkbox
                      checked={
                        tagOptions.length > 0 &&
                        selectedTags.length === tagOptions.length
                      }
                    />
                    <ListItemText primary="All" />
                  </MenuItem>
                  {tagOptions.map(({ value, key }) => (
                    <MenuItem key={key} value={value}>
                      <Checkbox checked={selectedTags.indexOf(value) > -1} />
                      <ListItemText primary={value} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            {openSuccess && (
              <Snackbar
                open={openSuccess}
                autoHideDuration={10000}
                onClose={() => setOpenSuccess(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert onClose={() => setOpenSuccess(false)} severity="success">
                  {successMessage}
                </Alert>
              </Snackbar>
            )}
            <span className="text-2xl font-bold mb-5">
              {t("homepage.recommendHotel")}
            </span>
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
              </Stack>
            </div>
            <HotelCard hotel={hotel} />
          </div>
          <div className="mt-5">
            <span className="text-2xl font-bold mb-5">
              {t("homepage.recommendRestaurant")}
            </span>
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
