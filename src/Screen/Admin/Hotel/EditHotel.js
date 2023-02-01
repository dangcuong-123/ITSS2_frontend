import { useState, React, useEffect } from "react";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import data1 from "./mock-data.json";
import { AdminTitle } from "../../../style";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import Select from 'react-select'
import { useParams } from 'react-router-dom'
import { getHotelById } from "../../../services/HotelServices";
import { Snackbar, Alert } from "@mui/material"
import { useTranslation } from 'react-i18next';
import { uploadImage } from "../../../services/firebase/uploadImage";

const EditHotel = () => {
  const { id } = useParams();
  // console.log(id)
  // state handle show error message
	const [errorMessage, setErrorMessage] = useState("");
	const [open, setOpen] = useState(false)

	// state handle show success message
	const [successMessage, setSuccessMessage] = useState("");
	const [openSuccess, setOpenSuccess] = useState(null);

  const [severity, setSeverity] = useState('')
  const [hotelID, setHotelID] = useState([]);
  const [editContactId1, setEditContactId1] = useState(null);
  const [contacts1, setContacts1] = useState(data1);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [intro, setIntro] = useState("");
  const [roomInfo, setRoomInfo] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("")
  const [image, setImage] = useState([])
  const [province, setProvince] = useState("")
  const { t } = useTranslation()
  const [place, setPlace] = useState("")
  const [placeList, setPlaceList] =  useState([])

  const handleClose = () => {
    setOpen(false);
  };
  const options = [
    { value: 'ha long', label: 'Ha long' },
    { value: 'ha noi', label: 'Ha noi' },
    { value: 'hai phong', label: 'Hai phong' }
  ]
  useEffect(() => {
    getHotelById(id)
      .then((res) => {
        setHotelID(res.data);
        setName(res.data[0].hotel_name)
        setAddress(res.data[0].hotel_address)
        setProvince(options[res.data[0].location_id - 1].label)
        setImage(res.data[0].image_url)
        setDescription(res.data[0].hotel_description)
        setPrice(res.data[0].hotel_fee)
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, []);

  const [editHotel, setEditHotel] = useState({
    name: "",
    address: "",
    intro: "",
    roomInfo: "",
    price: "",
  });

  const handleEditHotel = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newEditHotel1 = { ...editHotel };
    newEditHotel1[fieldName] = fieldValue;
    setEditHotel(newEditHotel1);
  };

  const handleEditHotelSubmit = (e) => {
    e.preventDefault();
    const editedContact1 = {
      id: editContactId1,
      name: editHotel.name,
      address: editHotel.address,
      intro: editHotel.intro,
      roomInfo: editHotel.roomInfo,
      price: editHotel.price,
    };

    const newContacts1 = [...contacts1];
    const index1 = contacts1.findIndex(
      (contact1) => contact1.id === editContactId1
    );
    newContacts1[index1] = editContactId1;
    setContacts1(newContacts1);
    setEditContactId1(null);
  };

  const handleEditClick1 = (e, contact1) => {
    e.preventDefault();
    setEditContactId1(contact1.id);

    const editValue1 = {
      name: contact1.name,
      address: contact1.address,
      intro: contact1.intro,
      roomInfo: contact1.roomInfo,
      price: contact1.price,
    };
    setEditHotel(editValue1);
  };

  const handleCancelClick1 = () => {
    setEditContactId1(null);
    alert("1");
  };

  const handleDeleteClick1 = (contactId1) => {
    const newContacts1 = [...contacts1];

    const index = contacts1.findIndex((contact1) => contact1.id === contactId1);

    newContacts1.splice(index, 1);

    setContacts1(newContacts1);
    alert("1");
  };

  const [editName, setEditName] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editIntro, setEditIntro] = useState("");
  const [editRoomInfo, setEditRoomInfo] = useState("");
  const [editPrice, setEditPrice] = useState("");


  // const handleTypeSelect = e => {
  //   setProvince(e.value);
  // };


  const handleEditClick = (e) => {
    e.preventDefault();
    const editHot = {
      editName,
      editAddress,
      editIntro,
      editRoomInfo,
      editPrice,
    };
    console.log(editHot);
    // fetch("http://35.78.85.107:8080/hotel/edit_hotel",{
    //   method:"PUT",
    //         headers:{"Content-Type" : "application/json"},
    //         body:JSON.stringify(editHot)
    //     }).then(()=>{
    //         console.log("Edit hotel complete");
    //         alert("Edit hotel complete");
    // })
  };

  const handleTypeSelect = e => {
    setPlace(e.id);
  };

  useEffect(() => {
    fetch("http://13.230.246.62:8080/location/show", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async response => {
      const data = await response.json()
      // console.log(data)
      setPlaceList(data)
    })
  }, [])
  placeList.map((place, id) => {
    options.push({ value: place.location_name, label: place.location_name })
  })

  const handleClick = async (e) => {
    const image_url = await uploadImage(image[0]);
    e.preventDefault();
    const editHot = {
      "hotel_id": id,
      "hotel_name": name,
      "hotel_address_input": address,
      "hotel_address_select": place,
      // "location_name": place,
      "image_url": image_url,
      "hotel_description": description,
      "hotel_fee": price
    };
    console.log(editHot);
    fetch("http://13.230.246.62:8080/hotel/edit_hotel", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editHot)
    }).then(() => {
      console.log("Edit hotel complete");
      // alert("Edit hotel complete");
      setOpenSuccess(true);
	    setSuccessMessage("Sửa khách sạn thành công!");
    }).catch((err) => {
      console.log(err)
      setOpen(true)
      setErrorMessage("Error")
    })

  }
  return (
    <LayoutAdmin>
      <div>
        <AdminTitle>{t('editHotel.title')}</AdminTitle>

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
                  {t('editHotel.name')}
                    <span className="text-red-700"> *</span>
                  </label>
                </div>
                <div className="w-3/5 items-center">
                  <Input
                    type="text"
                    placeholder={t('editHotel.name')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/5 self-center text-end">
                  <label className="text-black font-bold">
                  {t('editHotel.address')}
                    <span className="text-red-700"> *</span>
                  </label>
                </div>

                <div className="w-3/5 items-center">
                  <Input
                    type="text"
                    placeholder={t('editHotel.address')}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

              </div>

              <div className="flex items-center">
                <div className="w-1/5 self-center text-end">
                  <label className="text-black font-bold">
                  {t('editHotel.province')}
                    <span className="text-red-700"> *</span>
                  </label>
                </div>
                <div className="items-center" style={{ padding: '15px' }}>
                  <Select options={options} placeholder={province} onChange={handleTypeSelect} />
                </div>
              </div >

              <div className="flex items-center">
                <div className="w-1/5 self-center text-end">
                  <label className="text-black font-bold">
                  {t('editHotel.description')}
                    <span className="text-red-700"> *</span>
                  </label>
                </div>
                <div className="w-3/5 items-center">
                  <Input
                    type="text"
                    placeholder={t('editHotel.description')}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/5 self-center text-end">
                  <label className="text-black font-bold">
                  {t('editHotel.url')}
                    <span className="text-red-700"> *</span>
                  </label>
                </div>
                {/* <div className="w-3/5 items-center">
                  <Input
                    type="text"
                    placeholder={t('editHotel.url')}
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div> */}
                <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
                  <div className="w-3/5 items-center">
                    <input
                      required={true}
                      accept="image/*"
                      type="file"
                      onChange={(e) => {
                        console.log(e.target.files);
                        setImage(e.target.files);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/5 self-center text-end">
                  <label className="text-black font-bold">
                  {t('editHotel.price')}
                    <span className="text-red-700"> *</span>
                  </label>
                </div>
                <div className="w-3/5 items-center">
                  <Input
                    type="text"
                    placeholder={t('editHotel.price')}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert severity={severity} onClose={handleClose}>
                  {t('editHotel.success')}
                  </Alert>
                </Snackbar>
              </div>

        
      </div>
      <div className="w-4/5 flex ml-4 justify-end">
        <Button color="from-[#961919] to-[#f6646e] font-bold">
          <Link to="/list-hotel">
          {t('editHotel.cancel')}
          </Link>
        </Button>
        <Button color="font-bold mr-0" onClick={handleClick}>
          <Link to='/list-hotel'>
          </Link>
          {t('editHotel.title')}
        </Button>
      </div>
    </LayoutAdmin>
  );
};

export default EditHotel;
