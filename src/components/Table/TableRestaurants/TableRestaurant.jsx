import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getColumns } from "./ColumnTableRestaurant";
import PropTypes from "prop-types";

export default function TableRestaurant(props) {
  const { listRestaurants } = props;

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        columns={getColumns}
        rows={listRestaurants}
        getRowId={(row) => row.restaurant_id}
        disableSelectionOnClick={true}
      />
    </div>
  );
}

TableRestaurant.propTypes = {
  listRestaurants: PropTypes.array.isRequired,
};
