import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getColumns } from "./ColumnTablePlace";
import PropTypes from "prop-types";

export default function TablePlace(props) {
  const { listPlaces } = props;

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        columns={getColumns}
        rows={listPlaces}
        getRowId={(row) => row.location_id}
        disableSelectionOnClick={true}
      />
    </div>
  );
}

TablePlace.propTypes = {
  listPlaces: PropTypes.array.isRequired,
};
