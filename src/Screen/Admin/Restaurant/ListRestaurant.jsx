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

const ListRestaurant = () => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestaurant()
      .then((res) => {
        setRestaurant(res.data);
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
          <AdminTitle>Restaurant List</AdminTitle>
          <div className="flex justify-between ml-2 mr-7">
            <Input placeholder="Restaurant's name" onChange={handleSearch} />
            <Button color="font-bold mr-0">
              <Link to="/add-restaurant">Add Restaurant</Link>
            </Button>
          </div>
          <CardRestaurant data={restaurant} />
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default ListRestaurant;
