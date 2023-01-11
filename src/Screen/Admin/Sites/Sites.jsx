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
import { Link } from "react-router-dom";
// import "react-crud-icons/dist/react-crud-icons.css";
import "./icon.css";
import { getSite } from "../../../services/SiteServices";
const Sites = () => {
    function createData(sites, province, address, type, transportation, action) {
        return { sites, province, address, type, transportation, action };
    }
    const { t } = useTranslation() ;
    function returnVehicle(vehicle, value) {
        if (value == 1) return vehicle ;
        return ;
    }
    const [site, setSite] = useState([]);
    console.log(site)
    useEffect(() => {
      getSite()
        .then((res) => {    
          setSite(res.data);
        })
        .catch((err) => {});
    }, []);
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
                        <Button color="font-bold mr-0">
                        <Link to="/add-site">{t('sites.add')}</Link>
                        </Button>
                    </div>
                    <div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 10}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">ID</TableCell>
                                        <TableCell align="left">Tên địa danh</TableCell>
                                        <TableCell align="left">Địa chỉ</TableCell>
                                        <TableCell align="left">Mô tả </TableCell>
                                        <TableCell align="left">Type</TableCell>
                                        <TableCell align="left">Phương tiện</TableCell>
                                        <TableCell align="left">Hành động</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {site.map((row, id) => (
                                        <TableRow
                                            key={id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            
                                            <TableCell align="left">{row.location_id}</TableCell>
                                            <TableCell align="left">{row.location_name}</TableCell>
                                            <TableCell align="left">{row.location_address}</TableCell>
                                            <TableCell align="left">{row.location_description}</TableCell>
                                            <TableCell align="left">{row.tags}</TableCell>
                                            <TableCell align="left">{returnVehicle("Thuyền",row.ship)} {returnVehicle("Ô tô",row.car)} {returnVehicle("Tàu hỏa",row.train)} {returnVehicle("Xe máy",row.motorbike)}</TableCell>
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
