import React, { useState } from "react";
import data1 from "./mock-data.json";
import { nanoid } from "nanoid";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import Select from 'react-select'
import { Snackbar, Alert } from "@mui/material"

const AddHotel = () => {
  const [contacts1, setContacts1] = useState(data1);
  const [addHotel, setAddHotel] = useState({
    name: "",
    address: "",
    intro: "",
    roomInfo: "",
    price: "",
  });
  const options = [
    { value: 'ha noi', label: 'Ha noi' },
    { value: 'ha long', label: 'Ha long' },
    { value: 'hai phong', label: 'Hai phong' }
  ]
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState('')

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [intro, setIntro] = useState("");
  const [roomInfo, setRoomInfo] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [province, setProvince] = useState("")
  const handleAddHotel = (e) => {
    e.preventDefault();
    const fielName = e.target.getAttribute("name");
    const fielValue = e.target.value;
    const newAddHotel = { ...addHotel };
    newAddHotel[fielName] = fielValue;
    setAddHotel(newAddHotel);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddHotelSubmit = (e) => {
    e.preventDefault();
    const newContact1 = {
      id: nanoid(),
      name: addHotel.name,
      address: addHotel.address,
      intro: addHotel.intro,
      roomInfo: addHotel.roomInfo,
      price: addHotel.price,
    };
    const newContacts1 = [...contacts1, newContact1];
    setContacts1(newContacts1);
    alert("1");
  };
  const handleTypeSelect = e => {
    setProvince(e.value);
  };
  const handleClick = (e) =>{
    e.preventDefault();
    const addHot = { 
      "hotel_name": name, 
      "hotel_address_input": address, 
      "hotel_address_select": province,
      "image_url": image,
      "hotel_description": description,
      "hotel_fee":price};
    console.log(addHot);
    fetch("http://35.78.85.107:8080/hotel/create",{
      method:"POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(addHot)
        }).then(()=>{
            console.log("Add hotel complete");
            // alert("Add hotel complete");
            setOpen(true);
            setSeverity('success')
    }).catch((err) =>{
      console.log(err)
      setSeverity('error')
      setOpen(true)
    })

  }

  return (
    <LayoutAdmin>
      <div>
        <AdminTitle>Add Hotel</AdminTitle>
        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
              Name
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name hotel"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
              Address
              <span className="text-red-700"> *</span>
            </label>
          </div>

          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Address's hotel"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
              Province
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="items-center" style={{padding: '10px'}}>
            <Select options={options} onChange={handleTypeSelect} />
          </div>
        </div >

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
              Description
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Write something about your hotel"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
              Image URL
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Link to image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
              Price per day
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Price per day"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={severity} onClose={handleClose}>
              Add hotel completely!
            </Alert>
          </Snackbar>
        </div>
      </div>
      <div className="w-4/5 flex ml-4 justify-end">
        <Button color="from-[#961919] to-[#f6646e] font-bold">
          <Link to="/list-hotel">
            Cancel
          </Link>
        </Button>
        <Button color="font-bold mr-0" onClick={handleClick}>
          <Link to='/list-hotel'>
          </Link>
          Add Hotel
          </Button>
      </div>
    </LayoutAdmin>
  );
};

export default AddHotel;
