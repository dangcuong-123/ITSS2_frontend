import Button from "@mui/material/Button";

export const getColumns = [
  {
    field: 'nameOfPlace',
    headerName: "Địa danh",
    width: 200,
    disableColumnMenu: true,
  },
  {
    field: 'province',
    headerName: "Tỉnh",
    width: 200,
    disableColumnMenu: true,
  },
  {
    field: 'address',
    headerName: "Địa chỉ",
    width: 400,
    disableColumnMenu: true,
  },
  {
    field: 'classify',
    headerName: "Phân loại",
    width: 300,
    disableColumnMenu: true,
  },
  {
    field: 'transport',
    headerName: "Phương tiện di chuyển",
    width: 250,
    disableColumnMenu: true,
  },
  {
    field: 'manipulation',
    headerName: "Thao tác",
    width: 200,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <Button variant="text">
        Hotel
      </Button>
    ),
  },
];
