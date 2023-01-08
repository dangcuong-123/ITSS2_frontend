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
import { useTranslation } from 'react-i18next';

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
  
  // state handle show error message
	const [errorMessage, setErrorMessage] = useState("");
	const [open, setOpen] = useState(false)

	// state handle show success message
	const [successMessage, setSuccessMessage] = useState("");
	const [openSuccess, setOpenSuccess] = useState(null);
  const [severity, setSeverity] = useState('')
  const { t } = useTranslation()

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
    fetch("http://13.230.246.62:8080/hotel/create",{
      method:"POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(addHot)
        }).then(()=>{
            console.log("Add hotel complete");
            // alert("Add hotel complete");
            setOpenSuccess(true);
			      setSuccessMessage("Add hotel success!");
    }).catch((err) =>{
      console.log(err)
      setOpen(true)
      setErrorMessage("Error")
    })

  }

  return (
    <LayoutAdmin>
      <div>
        <AdminTitle>{t('addHotel.title')}</AdminTitle>
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
            <label className="text-black font-bold">
            {t('addHotel.name')}
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addHotel.name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
            {t('addHotel.address')}
              <span className="text-red-700"> *</span>
            </label>
          </div>

          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addHotel.address')}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
            {t('addHotel.province')}
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="items-center" style={{padding: '10px'}}>
            <Select options={options} onChange={handleTypeSelect} />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
            {t('addHotel.description')}
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addHotel.description')}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
            {t('addHotel.url')}
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addHotel.url')}
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
            {t('addHotel.price')}
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder={t('addHotel.price')}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={severity} onClose={handleClose}>
            {t('addHotel.success')}
            </Alert>
          </Snackbar>
        </div>
      </div>
      <div className="w-4/5 flex ml-4 justify-end">
        <Button color="from-[#961919] to-[#f6646e] font-bold">
          <Link to="/list-hotel">
          {t('addHotel.cancel')}
          </Link>
        </Button>
        <Button color="font-bold mr-0" onClick={handleClick}>
          <Link to='/list-hotel'>
          </Link>
          {t('addHotel.title')}
          </Button>
      </div>
    </LayoutAdmin>
  );
};

export default AddHotel;
