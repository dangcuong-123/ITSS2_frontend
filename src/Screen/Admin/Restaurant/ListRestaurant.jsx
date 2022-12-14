import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";

const ListRestaurant = () => {
  const handleSearch = () => {};
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <AdminTitle>Restaurant List</AdminTitle>
          <div className="flex justify-between ml-2 mr-7">
            <Input placeholder="Restaurant's name" onChange={handleSearch} />
            <Button color="font-bold mr-0">
              <Link to="/add-restaurant">
              Add Restaurant
              </Link>
            </Button>
          </div>
          <Card NameCard="Restaurant" />
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default ListRestaurant;
