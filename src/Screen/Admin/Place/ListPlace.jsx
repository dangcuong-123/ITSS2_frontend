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
    // searchPlace(e.target.value)
    //   .then((res) => {
    //     setPlace(res.data);
    //   })
    //   .catch((err) => {});
  };
  const [place, setPlace] = useState();
  const [placeLength, setPlaceLength] = useState();

//   useEffect(() => {
//     getPlace()
//       .then((res) => {
//         setPlace(res.data);
//         setPlaceLength(res.data.length);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <AdminTitle>Place List</AdminTitle>
          <div className="flex justify-between ml-2 mr-7">
            <Input placeholder="Place's name" onChange={handleSearch} />
            <Button color="font-bold mr-0">
              <Link to="/add-place">Add Place</Link>
            </Button>
          </div>
          <TablePlace/>
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default ListPlace;
