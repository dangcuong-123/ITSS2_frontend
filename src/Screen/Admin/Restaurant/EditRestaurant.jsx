import React, { useState } from "react";
import data from "./mock-data.json";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { Link, useNavigate, useParams } from "react-router-dom";
import PopupUpdateMenu from "../../../components/Popup/PopupUpdateMenu";
import { getRestaurantById } from "../../../services/RestaurantServices";
import { useEffect } from "react"; 
import Select from 'react-select'
import {Snackbar, Alert} from "@mui/material"
import { useTranslation } from 'react-i18next';


const EditRestaurant = ({ handleAddMenu }) => {

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
  
  const options = [
    { value: 'none', label: 'None', id: '0' },
  ]
  const { t } = useTranslation()

  const options_province = [
    { value: 'ha noi', label: 'Ha noi' },
    { value: 'ha long', label: 'Ha long' },
    { value: 'hai phong', label: 'Hai phong' }
  ]
  const [restaurant, setRestaurant] = useState()
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://13.230.246.62:8080/restaurant/search_restaurant_id/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async response => {
      const data = await response.json()
      console.log(data)
      setHotel(data[0].hotel_id)
      setRestaurantName(data[0].restaurant_name)
      setRestaurant_address(data[0].restaurant_address)
      setRestaurant_description(data[0].restaurant_description)
      setRestaurant_fee(data[0].restaurant_fee)
      setRestaurant_open_time(data[0].restaurant_open_time)
      setImage_url(data[0].image_url)
      setMenu_image_url(data[0].menu_img_url)
      setMenu_description(data[0].menu_description)
    })
  }, [])

  const handleTypeProvince = e => {
    setProvince(e.value)
  }
  const handleTypeSelect = e => {
    setHotel(e.id);
  };

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


  const [editContactId, setEditContactId] = useState(null);
  const [contacts, setContacts] = useState(data);

  const [editRes, setEditRes] = useState({
    name: "",
    address: "",
    intro: "",
    menuIntro: "",
  });

  const handleEditRes = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newEditRes = { ...editRes };
    newEditRes[fieldName] = fieldValue;
    setEditRes(newEditRes);
  };

  const handleEditResSubmit = (e) => {
    e.preventDefault();
    const editedContact = {
      id: editContactId,
      name: editRes.name,
      address: editRes.address,
      intro: editRes.intro,
      menuIntro: editRes.menuIntro,
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const editValue = {
      name: contact.name,
      address: contact.address,
      intro: contact.intro,
      menuIntro: contact.menuIntro,
    };
    setEditRes(editValue);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
    alert("1");
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    alert("1");
  };
    // state handle show error message
	const [errorMessage, setErrorMessage] = useState("");
	const [open, setOpen] = useState(false)

	// state handle show success message
	const [successMessage, setSuccessMessage] = useState("");
	const [openSuccess, setOpenSuccess] = useState(null);
  const [severity, setSeverity] = useState('')
  const handleClose = () => {
    setOpen(false);
  };
  const editRestaurant = (e) => {
    e.preventDefault();
    const editRes = {
      "restaurant_id": id,
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
    console.log(editRes);
    fetch("http://13.230.246.62:8080/restaurant/edit_restaurant", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editRes)
    }).then(() => {
      console.log("Edit restaurant complete");
      // alert("Edit restaurant complete");
      setOpenSuccess(true);
	    setSuccessMessage("Sửa nhà hàng thành công!");
    }).catch((err) => {
      console.log(err)
      setOpen(true)
      setErrorMessage("Error")
    })

  }

  return (
    <LayoutAdmin>
      <div>
        <AdminTitle>{t('editRest.title')}</AdminTitle>

        {open && (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert onClose={() => setOpen(false)} severity="error">
                {errorMessage}
            </Alert>
          </Snackbar>
        )}
        {openSuccess && (
          <Snackbar
            open={openSuccess}
            autoHideDuration={6000}
            onClose={() => setOpenSuccess(false)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert onClose={() => setOpenSuccess(false)} severity="success">
                {successMessage}
            </Alert>
          </Snackbar>
        )}

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('editRest.name')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('editRest.name')}
              value={restaurant_name}
              onChange={(e) => setRestaurantName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('editRest.address')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('editRest.address')}
              value={restaurant_address}
              onChange={(e) => setRestaurant_address(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('editRest.province')}</label>
          </div>
          <div className="items-center" style={{ padding: '15px' }}>
            <Select options={options_province} onChange={handleTypeProvince} />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('editRest.fee')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('editRest.fee')}
              value={restaurant_fee}
              onChange={(e) => setRestaurant_fee(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('editRest.hotel')}</label>
          </div>
          <div className="items-center" style={{ padding: '15px' }}>
            <Select options={options} onChange={handleTypeSelect} />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('editRest.url')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('editRest.url')}
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('editRest.openTime')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('editRest.openTime')}
              value={restaurant_open_time}
              onChange={(e) => setRestaurant_open_time(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('editRest.menu')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('editRest.menu')}
              value={menu_description}
              onChange={(e) => setMenu_description(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('editRest.menuURL')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('editRest.menuURL')}
              value={menu_image_url}
              onChange={(e) => setMenu_image_url(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('editRest.description')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('editRest.description')}
              value={restaurant_description}
              onChange={(e) => setRestaurant_description(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={severity} onClose={handleClose}>
            {t('editRest.success')}
            </Alert>
          </Snackbar>
        </div>
      </div>
      <div className="w-4/5 flex ml-4 justify-end">
        <Button color="from-[#961919] to-[#f6646e] font-bold">
          <Link to="/list-restaurant">{t('editRest.cancel')}</Link>
        </Button>
        <Button color="font-bold mr-0" onClick={editRestaurant}>{t('editRest.save')}</Button>
      </div>
    </LayoutAdmin>
  );
};

export default EditRestaurant;
