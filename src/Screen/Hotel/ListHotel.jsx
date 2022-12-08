import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../style";
import Card from "../../components/Card/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";

const ListHotel = () => {
  const handleSearch = () => {};
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <AdminTitle>Hotel List</AdminTitle>
          <div className="flex justify-between ml-2 mr-7">
            <Input placeholder="Hotel's name" onChange={handleSearch} />
            <Button color="font-bold mr-0">Add Hotel</Button>
          </div>
          <Card NameCard="Hotel"/>
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default ListHotel;
