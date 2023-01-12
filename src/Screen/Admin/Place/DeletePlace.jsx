import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePlace } from "../../../services/PlaceServices";

export default function DeletePlace(id) {
  const handleClick = () => {
    deletePlace(id)
      .then((res) => {
        console.log("Deleted ", id);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <IconButton color="error" onClick={handleClick}>
      <DeleteIcon />
    </IconButton>
  );
}
