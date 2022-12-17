import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import CardHotel from "../../../components/Card/CardHotel";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import { getHotel, searchHotel } from "../../../services/HotelServices";

const ListHotel = () => {
  const handleSearch = (e) => {
    searchHotel(e.target.value)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {});
  };
  const [hotel, setHotel] = useState();

  useEffect(() => {
    getHotel()
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <AdminTitle>Hotel List</AdminTitle>
          <div className="flex justify-between ml-2 mr-7">
            <Input placeholder="Hotel's name" onChange={handleSearch} />
            <Button color="font-bold mr-0">
              <Link to="/add-hotel">Add Hotel</Link>
            </Button>
          </div>
          <CardHotel data={hotel} />
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default ListHotel;
