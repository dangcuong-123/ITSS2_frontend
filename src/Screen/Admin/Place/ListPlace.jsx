import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import TablePlace from "../../../components/Table/TablePlace";
// import { getPlace, searchPlace } from "../../../services/PlaceServices";

const ListPlace = () => {
  const handleSearch = (e) => {
    console.log("SEARCH: ", e.target.value);
    setPlaces(searchListPlaces);
    // searchPlace(e.target.value)
    //   .then((res) => {
    //     setPlaces(res.data);
    //   })
    //   .catch((err) => {});
  };
  const [places, setPlaces] = useState(listPlaces);

  useEffect(() => {
    setPlaces(listPlaces);
    // getPlace()
    //   .then((res) => {
        // setPlaces(res.data);
    //     setPlacesLength(res.data.length);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <AdminTitle>Place List</AdminTitle>
          <div className="flex justify-between ml-2 mr-7">
            <Input placeholder="Place's name" onChange={handleSearch} />
            <Button color="font-bold mr-0">
              <Link to="add-place">Add Place</Link>
            </Button>
          </div>
          <TablePlace listPlaces={places}/>
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default ListPlace;

const searchListPlaces = [
  { id: 1, nameOfPlace: 'Côn Sơn Kiếp Bạc', province: 'Hải Dương', address: 'Chùa Côn Sơn Cộng Hòa Chí Linh', classify: 'Núi/Chùa/Danh lam thắng cảnh', transport: 'Xe máy/oto'},
]

const listPlaces = [
  { id: 1, nameOfPlace: 'Côn Sơn Kiếp Bạc', province: 'Hải Dương', address: 'Chùa Côn Sơn Cộng Hòa Chí Linh', classify: 'Núi/Chùa/Danh lam thắng cảnh', transport: 'Xe máy/oto'},
  { id: 2, nameOfPlace: 'ABC', province: 'Hải Dương', address: 'Chùa Côn Sơn Cộng Hòa Chí Linh', classify: 'Núi/Chùa/Danh lam thắng cảnh', transport: 'Xe máy/oto'},
]