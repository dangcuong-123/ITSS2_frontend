import React, { useState } from "react";
import { Checkbox, ListItemText, Autocomplete, TextField } from "@mui/material";
import { PROVINCE_OPTIONS } from "../../services/PlaceServices";
export default function SelectProvince(props) {
  const { handleSelectProvince } = props;
  const provinceOptions = PROVINCE_OPTIONS;
  const [selectedProvince, setSelectedProvince] = useState("Hà Nội");

  const handleSelect = (selectedProvince) => {
    setSelectedProvince(selectedProvince);
    handleSelectProvince(selectedProvince);
  };
  return (
    <Autocomplete
      id="province"
      options={provinceOptions}
      getOptionLabel={(option) => option}
      value={selectedProvince}
      onChange={(e, data) => {
        handleSelect(data);
      }}
      autoHighlight
      renderInput={(params) => (
        <TextField {...params} label="Tỉnh" name="province" />
      )}
    />
  );
}
