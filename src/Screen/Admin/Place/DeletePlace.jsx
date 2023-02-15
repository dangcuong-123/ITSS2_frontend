import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePlace } from "../../../services/PlaceServices";
import { useSnackbar } from "notistack";

export default function DeletePlace(id) {
  const { enqueueSnackbar } = useSnackbar();
  const handleClick = () => {
    if (window.confirm("Xóa nhá ?")) {
      deletePlace(id.id)
        .then((res) => {
          console.log("Deleted", id);
          window.location.reload(false);
        })
        .catch((e) => {
          console.log(e);
          enqueueSnackbar("Xóa thất bại", {
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
