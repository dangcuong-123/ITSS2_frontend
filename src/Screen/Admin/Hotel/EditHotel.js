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

const EditHotel = () => {
  const { id } = useParams();
  // console.log(id)
  const [open, setOpen] = useState(false)
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
  const [image, setImage] = useState("")
  const [province, setProvince] = useState("")

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


  const handleTypeSelect = e => {
    setProvince(e.value);
  };


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
  const handleClick = (e) => {
    e.preventDefault();
    const editHot = {
      "hotel_id": id,
      "hotel_name": name,
      "hotel_address_input": address,
      "hotel_address_select": province,
      "image_url": image,
      "hotel_description": description,
      "hotel_fee": price
    };
    console.log(editHot);
    fetch("http://35.78.85.107:8080/hotel/edit_hotel", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editHot)
    }).then(() => {
      console.log("Edit hotel complete");
      // alert("Edit hotel complete");
      setOpen(true);
      setSeverity('success')
    }).catch((err) => {
      console.log(err)
      setSeverity('error')
      setOpen(true)
    })

  }
  return (
    <LayoutAdmin>
      <div>
        <AdminTitle>Edit Hotel</AdminTitle>

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
                <div className="items-center" style={{ padding: '15px' }}>
                  <Select options={options} placeholder={province} onChange={handleTypeSelect} />
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
                    Edit Hotel completely!
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
          Edit Hotel
        </Button>
      </div>
    </LayoutAdmin>
  );
};

export default EditHotel;
