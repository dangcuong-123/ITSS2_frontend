import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import UpdateMenu from '../components//Popup/UpdateMenu'

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
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List component="div" role="group">
          <ListItem button divider disabled>
            <ListItemText primary="" />
          </ListItem>
          <ListItem
            button
            divider
            aria-haspopup="true"
            aria-controls="ringtone-menu"
            aria-label="phone ringtone"
            onClick={handleClickListItem}
          >
            <ListItemText primary="Test" secondary={value} />
          </ListItem>
          <UpdateMenu
            id="ringtone-menu"
            keepMounted
            open={open}
            onClose={handleClose}
            value={value}
          />
        </List>
      </Box>
    );
  }
  
  