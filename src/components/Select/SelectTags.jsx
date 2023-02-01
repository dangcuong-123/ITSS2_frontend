import React, { useEffect, useState } from "react";
import { Select, MenuItem, Checkbox, ListItemText } from "@mui/material";
export default function SelectTags(props) {
  const { tagOptions, handleSelectTags } = props;
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    console.log(tagOptions);
    setSelectedTags(tagOptions.map((a) => a.value));
  }, [tagOptions]);

  const handleSelect = (selectedTags) => {
    setSelectedTags(selectedTags);
    handleSelectTags(selectedTags);
  };
  return (
    <Select
      id="tags"
      name="tags"
      value={selectedTags}
      label="Phân loại"
      onChange={(e) => {
        const value = e.target.value;
        if (value[value.length - 1] === "all") {
          handleSelect(
            selectedTags.length === tagOptions.length
              ? []
              : tagOptions.map((a) => a.value)
          );
          return;
        }
        handleSelect(value);
      }}
      multiple
      renderValue={(selected) => {
        if (selected.length === tagOptions.length) {
          return <div>Tất cả</div>;
        }
        return selected.join(", ");
      }}
      className="py-1"
    >
      <MenuItem key="all" value="all">
        <Checkbox
          checked={
            tagOptions.length > 0 && selectedTags.length === tagOptions.length
          }
        />
        <ListItemText primary="All" />
      </MenuItem>
      {tagOptions.map(({ value, key }) => (
        <MenuItem key={key} value={value}>
          <Checkbox checked={selectedTags.indexOf(value) > -1} />
          <ListItemText primary={value} />
        </MenuItem>
      ))}
    </Select>
  );
}
