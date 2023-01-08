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
import { useTranslation } from 'react-i18next';


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
  const [open, setOpen] = useState('')
  const [severity, setSeverity] = useState('')

  // state handle show error message
	const [errorMessage, setErrorMessage] = useState("");
	
	// state handle show success message
	const [successMessage, setSuccessMessage] = useState("");
	const [openSuccess, setOpenSuccess] = useState(null);

  const options = [
    { value: 'none', label: 'None', id: '0' },
  ]
  const { t } = useTranslation()

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
      // setOpen(true);
      // setSeverity('success')
      setOpenSuccess(true);
			setSuccessMessage("Add restaurant success!");
      // alert("Add restaurant complete");
    }).catch((err) => {
      console.log(err)
      // setSeverity('error')
      setOpen(true)
      setErrorMessage("Error")
    })

  }
  return (
    <LayoutAdmin>
      <div>
        <AdminTitle>{t('addRest.title')}</AdminTitle>
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
            <label className="text-black font-bold">{t('addRest.name')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addRest.name')}
              value={restaurant_name}
              onChange={(e) => setRestaurantName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('addRest.address')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addRest.address')}
              value={restaurant_address}
              onChange={(e) => setRestaurant_address(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('addRest.province')}</label>
          </div>
          <div className="items-center" style={{padding: '15px'}}>
            <Select options={options_province} onChange={handleTypeProvince} />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('addRest.fee')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addRest.fee')}
              value={restaurant_fee}
              onChange={(e) => setRestaurant_fee(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('addRest.hotel')}</label>
          </div>
          <div className="items-center" style={{ padding: '15px' }}>
            <Select options={options} onChange={handleTypeSelect} />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('addRest.url')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addRest.url')}
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('addRest.openTime')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addRest.openTime')}
              value={restaurant_open_time}
              onChange={(e) => setRestaurant_open_time(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('addRest.menu')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addRest.menu')}
              value={menu_description}
              onChange={(e) => setMenu_description(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('addRest.menuURL')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addRest.menuURL')}
              value={menu_image_url}
              onChange={(e) => setMenu_image_url(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">{t('addRest.description')}</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addRest.description')}
              value={restaurant_description}
              onChange={(e) => setRestaurant_description(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={severity} onClose={handleClose}>
            {t('addRest.success')}
            </Alert>
          </Snackbar>
        </div>
      </div>
      <div className="w-4/5 flex ml-4" style={{ justifyContent: "end" }}>
        <Button color="from-[#961919] to-[#f6646e] font-bold">
          <Link to="/list-restaurant"></Link>
          {t('addRest.cancel')}
        </Button>
        <Button color="font-bold mr-0" onClick={addRestaurant}>{t('addRest.addRest')}</Button>
      </div>
    </LayoutAdmin>
  );
};

export default AddRestaurant;
