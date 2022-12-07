import Search from "../../components/HomePage/Search";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import * as React from "react";
import Stack from "@mui/material/Stack";
import LayoutAdmin from "../../components/Sidebar/AdminContainer";
import CardHome from "../../components/HomePage/CardHomePage";
import { AdminTitle } from "../../style";

const HomePageScreen = () => {
  const handleSearch = () => {};
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <AdminTitle>HOME PAGE</AdminTitle>
          <div>
            <Search onSearchChange={handleSearch} />
          </div>
          <div>
            <span className="text-2xl font-bold mb-5">Recommend hotel</span>
            <div className="m-5">
              <Stack spacing={2} direction="row">
                <Button variant="text">Hà Nội</Button>
                <Button variant="contained">Hải Phòng</Button>
                <Button variant="text">TP Hồ Chí Minh</Button>
              </Stack>
            </div>
            <CardHome />
          </div>
          <div className="mt-5">
            <span className="text-2xl font-bold mb-5">
              Recommend restaurant
            </span>
            <div className="m-5">
              <Stack spacing={2} direction="row">
                <Button variant="text">Hà Nội</Button>
                <Button variant="text">Hải Phòng</Button>
                <Button variant="contained">TP Hồ Chí Minh</Button>
              </Stack>
            </div>
            <CardHome />
          </div>
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default HomePageScreen;
