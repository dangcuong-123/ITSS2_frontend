import transportLists from "./GetTransports";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeletePlace from "../../../Screen/Admin/Place/DeletePlace";
import { GridCellParams } from "@mui/x-data-grid";
import GridCellExpand, { renderCellExpand } from "../GridCelExpand";

export const getColumns = [
  {
    field: "location_name",
    headerName: "Địa danh",
    width: 200,
    disableColumnMenu: true,
    renderCell: (params) => renderCellExpand(params),
  },
  {
    field: "loc_province",
    headerName: "Tỉnh",
    width: 200,
    disableColumnMenu: true,
  },
  {
    field: "location_address",
    headerName: "Địa chỉ",
    width: 400,
    disableColumnMenu: true,
    renderCell: (params) => renderCellExpand(params),
  },
  {
    field: "classify",
    headerName: "Phân loại",
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => tagsList(params.row.tags),
  },
  {
    field: "transports",
    headerName: "Phương tiện di chuyển",
    width: 250,
    disableColumnMenu: true,
    renderCell: (params) => transportLists(params.row),
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
          to={`edit-place/${params.row.location_id}`}
          color="info"
        >
          <EditIcon />
        </IconButton>
        <DeletePlace id={params.row.location_id} />
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
