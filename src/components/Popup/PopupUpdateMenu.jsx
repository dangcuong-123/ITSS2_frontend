import * as React from 'react';
import UpdateMenu from './UpdateMenu';
import Button from "../Button";
import PropTypes from 'prop-types';

export default function PopupUpdateMenu(props) {
  const { nameBtn, styleBtn, ...other } = props;
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
    <>
        <Button color={`font-bold ${styleBtn}`} onClick={handleClickListItem}>{nameBtn}</Button>
         <UpdateMenu
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />
    </>
  );
}
  
  PopupUpdateMenu.propTypes = {
    nameBtn: PropTypes.string.isRequired,
    styleBtn: PropTypes.string.isRequired,
  };