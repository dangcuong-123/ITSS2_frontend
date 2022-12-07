import Search from "../../components/HomePage/Search";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import * as React from "react";
import LayoutAdmin from "../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../style";
import { useState } from "react";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import Stack from "@mui/material/Stack";
import "../../style/search_plan.css";
import "../../style/search.css";
import CardHome from "../HomePage/CardHomePage";
import Checkbox from '@mui/material/Checkbox';
import CardHomeTick from "../HomePage/CardHomeTick";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SearchPlan = () => {
    const handleSearch = () => { };
    const [checkin, setCheckin] = useState(new Date());
    const [checkout, setCheckout] = useState(new Date());
    const [search, onSearchChange] = useState()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <LayoutAdmin>
                    <AdminTitle>Search Plan</AdminTitle>
                    <div>
                        <Search onSearchChange={handleSearch} />
                    </div>
                    <div>
                        <span className="text-2xl font-bold mb-5">Recommend hotel</span>
                        <div className="m-5">
                            <Stack spacing={2} direction="row">
                                <Button variant="contained">Hotel</Button>
                                <Button variant="text">Restaurant</Button>
                            </Stack>
                        </div>
                    </div>
                    <div className="title-tools">
                        <div>
                            <div>
                                <form className=" mb-10">
                                    <input
                                        id="userInput"
                                        className="search tc bg-lightest-purple placeholder-white"
                                        type="search"
                                        placeholder="search ..."
                                        style={{
                                            display: "block",
                                            margin: "auto",
                                            border: "1px solid white",
                                            borderRadius: "30px",
                                            height: "48px",
                                            width: "300px",
                                            outline: "none",
                                            backgroundColor: "black",
                                        }}
                                        value={search}
                                        onChange={(text) => onSearchChange(text)}
                                    />
                                </form>
                            </div>
                        </div>
                        <div>
                            <span className="text-2xl font-bold mb-3">Check in</span>
                            <div>
                                <DatePicker onChange={setCheckin} value={checkin} />
                            </div>
                        </div>
                        <div>
                            <span className="text-2xl font-bold mb-3">Check out</span>
                            <div>
                                <DatePicker onChange={setCheckout} value={checkout} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="text-2xl font-bold mb-3">Cash</span>
                        <Box width={300}>
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        </Box>
                    </div>
                    <div>
                        <CardHomeTick/>
                    </div>
                    <div className="footer">
                        <span className="text-2xl font-bold mb-5" style={{
                            padding: '10px 20px 0 0'
                        }}>
                            you have chosen hotel!
                        </span>
                        <Button variant="contained" color="success">
                            Next
                        </Button>
                    </div>
                </LayoutAdmin>
            </Container>
        </React.Fragment>
    );
};

export default SearchPlan;