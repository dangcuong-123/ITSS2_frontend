import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteRestaurant } from "../../../services/RestaurantServices";
import { useSnackbar } from "notistack";
import React, { useState } from "react";

export default function DeleteRestaurant(id) {
  const { enqueueSnackbar } = useSnackbar();
  const [successMessage, setSuccessMessage] = useState("");
	const [openSuccess, setOpenSuccess] = useState(null);
  const handleClick = () => {
    if (window.confirm("Delete?")) {
      deleteRestaurant(id.id)
        .then((res) => {
          console.log("Deleted", id);
          
          window.location.reload(false);
          setOpenSuccess(true);
          setTimeout(() => {
            setSuccessMessage("Xóa nhà hàng thành công!");        
          }, 1000);
        })
        .catch((e) => {
          console.log(e);
          enqueueSnackbar("Delete failed", {
            variant: "error",
          });
        });
    }
  };
  return (
    <IconButton color="error" onClick={handleClick}>
      <DeleteIcon />
    </IconButton>
  );
}
