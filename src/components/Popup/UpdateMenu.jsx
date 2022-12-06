import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

const items = [
  { name: "Items One", price: 200000 },
  { name: "Items Teo", price: 100000 },
  { name: "Items Three", price: 1200000 },
  { name: "Items Three", price: 1200000 },
  { name: "Items Three", price: 1200000 },
  { name: "Items Three", price: 1200000 }
]

export default function UpdateMenu(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>Menu</DialogTitle>
      <DialogContent dividers>
        <List>
          {items.map(item => (
            <ListItem>
              <ListItemText primary={`${item.name} - ${item.price}`} />
              <Stack direction="row" spacing={2}><ClearIcon />
              <EditIcon /></Stack>
            </ListItem>
          ))}
        </List>

      </DialogContent>
      <DialogActions>
        <Stack spacing={1}>
          <Stack direction="row" spacing={2}>
            <TextField label="Food name" variant="outlined" size='small'/>
            <TextField label="Price" variant="outlined" size='small'/>
            <Button color="success" variant="contained" size='small'>
            Add
          </Button>
          </Stack>
          <Button onClick={handleCancel} sx={{ mx: "auto" }} color="error">
            Close
          </Button>
        </Stack>

      </DialogActions>
    </Dialog>
  );
}

UpdateMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};