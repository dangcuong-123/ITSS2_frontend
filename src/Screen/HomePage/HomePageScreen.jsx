import Search from "../../components/HomePage/Search";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import * as React from 'react';
import Stack from '@mui/material/Stack';

const HomePageScreen = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <div>
                    <Search />
                </div>
                <div>
                    <span>
                        Recommend hotel
                    </span>
                    <div>
                        <Stack spacing={2} direction="row">
                            <Button variant="text">Hà Nội</Button>
                            <Button variant="contained">Hải Phòng</Button>
                            <Button variant="text">TP Hồ Chí Minh</Button>
                        </Stack>
                    </div>
                </div>
                <div>
                    <span>
                        Recommend restaurant
                    </span>
                    <div>
                        <Stack spacing={2} direction="row">
                            <Button variant="text">Hà Nội</Button>
                            <Button variant="text">Hải Phòng</Button>
                            <Button variant="contained">TP Hồ Chí Minh</Button>
                        </Stack>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default HomePageScreen;
