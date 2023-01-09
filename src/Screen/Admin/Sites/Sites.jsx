import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useTranslation } from 'react-i18next';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Icon from "react-crud-icons";
// import "react-crud-icons/dist/react-crud-icons.css";
import "./icon.css";
const Sites = () => {
    function createData(sites, province, address, type, transportation, action) {
        return { sites, province, address, type, transportation, action };
    }
    const [hotel, setHotel] = useState();
    const [hotelLength, setHotelLength] = useState();
    const { t } = useTranslation()

    const rows = [
        createData('Biển Cát Bà', "Hải Phòng", "address", "Biển", "Ô tô", 1),
        createData('Biển Cát Bà', "Hải Phòng", "address", "Biển", "Ô tô", 1),
        createData('Biển Cát Bà', "Hải Phòng", "address", "Biển", "Ô tô", 1),

    ];

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <LayoutAdmin>
                    <AdminTitle>{t('sites.title')}</AdminTitle>
                    <div className="flex justify-between ml-2 mr-7">
                        <Input placeholder={t('sites.search')} />
                        <Button color="font-bold mr-0">
                            {t('sites.search')}
                        </Button>
                    </div>
                    <div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 10}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Sites</TableCell>
                                        <TableCell align="left">Province</TableCell>
                                        <TableCell align="left">Address</TableCell>
                                        <TableCell align="left">Type</TableCell>
                                        <TableCell align="left">Transportation</TableCell>
                                        <TableCell align="left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            
                                            <TableCell align="left">{row.sites}</TableCell>
                                            <TableCell align="left">{row.province}</TableCell>
                                            <TableCell align="left">{row.address}</TableCell>
                                            <TableCell align="left">{row.type}</TableCell>
                                            <TableCell align="left">{row.transportation}</TableCell>
                                            <TableCell align="left">
                                                <div className="icon">
                                                    <div>
                                                        <Icon
                                                            name="browse"
                                                            theme="light"
                                                            size="tiny" />
                                                    </div>

                                                    <div>
                                                        <Icon
                                                            name="edit"
                                                            theme="light"
                                                            size="tiny" />
                                                    </div>

                                                    <div>
                                                        <Icon
                                                            name="delete"
                                                            theme="light"
                                                            size="tiny" />
                                                    </div>
                                                </div>
                                                
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </LayoutAdmin>
            </Container>
        </React.Fragment>
    );
};

export default Sites;
