import * as React from 'react';
import UpdateMenu from './UpdateMenu';
import Button from "../Button";

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Test');
  
    const handleClickListItem = () => {
      setOpen(true);
    };
  
    const handleClose = (newValue) => {
      setOpen(false);
  
      if (newValue) {
        setValue(newValue);
      }
    };
  
    return (
      <div>
          <Button color="color-green font-bold" onClick={handleClickListItem}>Add Menu</Button>
          <UpdateMenu
            id="ringtone-menu"
            keepMounted
            open={open}
            onClose={handleClose}
            value={value}
          />
      </div>
    );
  }
  
  