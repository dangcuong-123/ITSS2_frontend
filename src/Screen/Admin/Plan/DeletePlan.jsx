import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePlan } from "../../../services/PlanServices";
import { useSnackbar } from "notistack";

export default function DeletePlan(id) {
  const { enqueueSnackbar } = useSnackbar();
  const handleClick = () => {
    if (window.confirm("Delete?")) {
        deletePlan(id.id)
        .then((res) => {
          console.log("Deleted", id);
          window.location.reload(false);
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
      <DeleteIcon /> Xóa Plan
    </IconButton>
  );
}
