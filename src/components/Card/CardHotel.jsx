import React from "react";
import "../../style/search.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import PopupUpdateMenu from "../Popup/PopupUpdateMenu";
import { deleteHotelById } from "../../services/HotelServices";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const CardHotel = ({ data }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickDelete = (id) => {
    console.log(id)
    const deleteHotel = {"id": id}
    fetch(`http://35.78.85.107:8080/hotel/delete_hotel?id=${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deleteHotel)
    }).then(() => {
      console.log("Delete hotel complete");
      // alert("Add hotel complete");
    }).catch((err) => {
      console.log(err)
    })

    setOpen(false)
  }

  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {data?.map((card, ids) => {
            return (
              <div key={ids} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
                <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="relative pb-48 overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={card.image_url}
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      {card.hotel_name}
                    </span>
                    <div className="flex justify-between">
                      <h2 className="mt-2 mb-2  font-bold">
                        {card.hotel_address}
                      </h2>
                      <div className="mt-3 flex items-center">
                        <span className="font-bold text-xl">
                          {card.hotel_fee} VND
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button color="from-[#7CFC00] to-[#008000] font-bold mx-1 px-1 py-1">
                      <Link to="/admin/detail-hotel">Detail</Link>
                    </Button>
                    <Button color="from-[#64B5F6] to-[#2286C3] mx-1 font-bold px-1 py-1">
                      <Link to={`/edit-hotel/${card.hotel_id}`}>Edit</Link>
                    </Button>
                    <Button onClick={handleClickOpen} color="from-[#f6646e] to-[#961919] mx-1 font-bold px-1 py-1">
                      Delete
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"You want to delete the hotel!"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                         You want to delete the hotel!!
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>No</Button>
                        <Button onClick={() => handleClickDelete(card.hotel_id)} autoFocus>
                          Yes
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardHotel;
