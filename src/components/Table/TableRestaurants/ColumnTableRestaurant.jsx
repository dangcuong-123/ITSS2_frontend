// import transportLists from "./GetTransports";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeletePlace from "../../../Screen/Admin/Place/DeletePlace";
import { GridCellParams } from "@mui/x-data-grid";
import GridCellExpand, { renderCellExpand } from "../GridCelExpand";
import DeleteRestaurant from "../../../Screen/Admin/Restaurant/DeleteRestaurant";

export const getColumns = [
  {
    field: "restaurant_name",
    headerName: "Tên Nhà Hàng",
    width: 200,
    disableColumnMenu: true,
    renderCell: (params) => renderCellExpand(params),
  },
  {
    field: "restaurant_fee",
    headerName: "Giá thành",
    width: 200,
    disableColumnMenu: true,
    renderCell: (params) => renderCellExpand(params),
  },
  {
    field: "restaurant_address",
    headerName: "Địa chỉ",
    width: 400,
    disableColumnMenu: true,
    renderCell: (params) => renderCellExpand(params),
  },
  {
    field: "restaurant_open_time",
    headerName: "Giở mở cửa",
    width: 250,
    disableColumnMenu: true,
    renderCell: (params) => renderCellExpand(params),
  },
  {
    field: "menu_description",
    headerName: "Mô tả Menu",
    width: 250,
    disableColumnMenu: true,
    renderCell: (params) => renderCellExpand(params),
  },
  {
    field: "manipulation",
    headerName: "Thao tác",
    width: 200,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <>
        <IconButton
          component={Link}
          to={`edit-restaurant/${params.row.restaurant_id}`}
          color="info"
        >
          <EditIcon />
        </IconButton>
        <DeleteRestaurant id={params.row.restaurant_id} />
      </>
    ),
  },
];

const tagsList = (list) => {
  var tags_arr = [];
  list.forEach((element) => {
    tags_arr.push(element);
  });
  return tags_arr.join("/");
};
