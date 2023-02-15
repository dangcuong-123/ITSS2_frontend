import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import TablePlace from "../../../components/Table/TablePlaces/TablePlace";
import { getPlace, searchPlace } from "../../../services/PlaceServices";

const ListPlace = () => {
  const handleSearch = (e) => {
    console.log("SEARCH: ", e.target.value);
    // searchPlace(e.target.value)
    //   .then((res) => {
    //     setPlaces(res.data);
    //   })
    //   .catch((err) => {});
  };
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlace()
      .then((res) => {
        setPlaces(res.data);
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
          <AdminTitle>Danh sách địa điểm</AdminTitle>
          <div className="flex justify-between ml-2 mr-7">
            <Input placeholder="Địa điểm" onChange={handleSearch} />
            <Button color="font-bold mr-0">
              <Link to="add-place">Thêm địa điểm</Link>
            </Button>
          </div>
          <TablePlace listPlaces={places} />
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default ListPlace;
