import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import CardRestaurant from "../../../components/Card/CardRestaurant";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import {
  getRestaurant,
  searchRestaurant,
} from "../../../services/RestaurantServices";
// import { getPlace, searchPlace } from "../../../services/PlaceServices";
import TableRestaurant from "../../../components/Table/TableRestaurants/TableRestaurant";

import { useTranslation } from "react-i18next";

const ListRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    getRestaurant()
      .then((res) => {
        setRestaurant(res.data);
        console.log(restaurant);
      })
      .catch((err) => {});
  }, []);
  const handleSearch = (e) => {
    searchRestaurant(e.target.value)
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((err) => {});
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <AdminTitle>{t("listRest.title")}</AdminTitle>
          <div className="flex justify-between ml-2 mr-7">
            <Input placeholder="Tên nhà hàng" onChange={handleSearch} />
            <Button color="font-bold mr-0">
              <Link to="/add-restaurant">{t("listRest.addRest")}</Link>
            </Button>
          </div>
          <TableRestaurant listRestaurants={restaurant} />
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default ListRestaurant;
