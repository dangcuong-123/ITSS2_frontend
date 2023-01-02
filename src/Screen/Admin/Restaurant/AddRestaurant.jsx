import React, { useEffect, useState } from "react";
import data from "../Restaurant/mock-data.json";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { nanoid } from "nanoid";
import { AdminTitle } from "../../../style";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import Select from 'react-select'
import { Snackbar, Alert } from "@mui/material"
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const AddRestaurant = ({ handleCancelClick, handleDeleteClick }) => {
  const [contacts, setContacts] = useState(data);
  const [restaurant_name, setRestaurantName] = useState("")
  const [hotel, setHotel] = useState("")
  const [image_url, setImage_url] = useState("")
  const [menu_description, setMenu_description] = useState("")
  const [menu_image_url, setMenu_image_url] = useState("")
  const [restaurant_address, setRestaurant_address] = useState("")
  const [restaurant_fee, setRestaurant_fee] = useState("")
  const [restaurant_open_time, setRestaurant_open_time] = useState("")
  const [restaurant_description, setRestaurant_description] = useState("")
  const [province, setProvince] = useState('')
  const [hotelList, setHotelList] = useState([])
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState('')
  const options = [
    { value: 'none', label: 'None', id: '0' },
  ]

  const options_province = [
    { value: 'ha noi', label: 'Ha noi' },
    { value: 'ha long', label: 'Ha long' },
    { value: 'hai phong', label: 'Hai phong' }
  ]
  useEffect(() => {
    fetch("http://13.230.246.62:8080/hotel/show", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async response => {
      const data = await response.json()
      // console.log(data)
      setHotelList(data)
    })
  }, [])
  hotelList.map((hotel, id) => {
    options.push({ value: hotel.hotel_name, label: hotel.hotel_name, id: hotel.hotel_id })
  })
  const handleTypeProvince = e => {
    setProvince(e.value)
  }
  const handleTypeSelect = e => {
    setHotel(e.id);
  };
  // useEffect(() => {
  //   fetch("http://192.168.1.64:8080/restaurant/show", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   }).then(async response => {
  //     const data = await response.json()
  //     console.log(data)
  //   })
  // })
  const [addRes, setAddRes] = useState({
    name: "",
    address: "",
    intro: "",
    menuIntro: "",
  });
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddRes = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newAddRes = { ...addRes };
    newAddRes[fieldName] = fieldValue;
    setAddRes(newAddRes);
  };

  const handleAddResSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: addRes.name,
      address: addRes.address,
      intro: addRes.intro,
      menuIntro: addRes.menuIntro,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleAddMenu = (e) => {
    e.preventDefault();
  };

  const addRestaurant = (e) => {
    e.preventDefault();
    const addRes = {
      "restaurant_name": restaurant_name,
      "restaurant_address_input": restaurant_address,
      "restaurant_address_select": province,
      "hotel_id": hotel,
      "restaurant_fee": restaurant_fee,
      "image_url": image_url,
      "restaurant_open_time": restaurant_open_time,
      "menu_img_url": menu_image_url,
      "menu_description": menu_description,
      "restaurant_description": restaurant_description
    };
    console.log(addRes);
    fetch("http://13.230.246.62:8080/restaurant/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addRes)
    }).then(() => {
      console.log("Add restaurant complete");
      setOpen(true);
      setSeverity('success')
      // alert("Add restaurant complete");
    }).catch((err) => {
      console.log(err)
      setSeverity('error')
      setOpen(true)
    })

  }
  return (
    <LayoutAdmin>
      <div>
        <AdminTitle>Add Restaurant</AdminTitle>
        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Name*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name restaurant"
              value={restaurant_name}
              onChange={(e) => setRestaurantName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Address*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Restaurant Address"
              value={restaurant_address}
              onChange={(e) => setRestaurant_address(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Province*</label>
          </div>
          <div className="items-center" style={{padding: '15px'}}>
            <Select options={options_province} onChange={handleTypeProvince} />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Restaurant fee*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Restaurant fee"
              value={restaurant_fee}
              onChange={(e) => setRestaurant_fee(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Hotel*</label>
          </div>
          <div className="items-center" style={{ padding: '15px' }}>
            <Select options={options} onChange={handleTypeSelect} />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Image URL*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Restaurant's Image"
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Restaurant open time*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Restaurant Open Time"
              value={restaurant_open_time}
              onChange={(e) => setRestaurant_open_time(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Menu introduce*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Menu introduction"
              value={menu_description}
              onChange={(e) => setMenu_description(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Menu Image URL*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Menu image url"
              value={menu_image_url}
              onChange={(e) => setMenu_image_url(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Restaurant's description*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Description"
              value={restaurant_description}
              onChange={(e) => setRestaurant_description(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={severity} onClose={handleClose}>
              Add restaurant completely!
            </Alert>
          </Snackbar>
        </div>
      </div>
      <div className="w-4/5 flex ml-4" style={{ justifyContent: "end" }}>
        <Button color="from-[#961919] to-[#f6646e] font-bold">
          <Link to="/list-restaurant"></Link>
          Cancel
        </Button>
        <Button color="font-bold mr-0" onClick={addRestaurant}>Add Restaurant</Button>
      </div>
    </LayoutAdmin>
  );
};

export default AddRestaurant;
