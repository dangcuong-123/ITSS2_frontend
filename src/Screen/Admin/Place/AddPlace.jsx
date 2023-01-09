import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import data1 from "./mock-data.json";
import { nanoid } from "nanoid";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Snackbar, Alert } from "@mui/material";

const AddPlace = () => {
  const [contacts1, setContacts1] = useState(data1);
  const [addPlace, setAddPlace] = useState({
    name: "",
    address: "",
    intro: "",
    roomInfo: "",
    price: "",
  });
  const options = [
    { value: "ha noi", label: "Ha noi" },
    { value: "ha long", label: "Ha long" },
    { value: "hai phong", label: "Hai phong" },
  ];
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [intro, setIntro] = useState("");
  const [roomInfo, setRoomInfo] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [province, setProvince] = useState("");
  const handleAddPlace = (e) => {
    e.preventDefault();
    const fielName = e.target.getAttribute("name");
    const fielValue = e.target.value;
    const newAddPlace = { ...addPlace };
    newAddPlace[fielName] = fielValue;
    setAddPlace(newAddPlace);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddPlaceSubmit = (e) => {
    e.preventDefault();
    const newContact1 = {
      id: nanoid(),
      name: addPlace.name,
      address: addPlace.address,
      intro: addPlace.intro,
      roomInfo: addPlace.roomInfo,
      price: addPlace.price,
    };
    const newContacts1 = [...contacts1, newContact1];
    setContacts1(newContacts1);
    alert("1");
  };
  const handleTypeSelect = (e) => {
    setProvince(e.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const addHot = {
      place_name: name,
      place_address_input: address,
      place_address_select: province,
      image_url: image,
      place_description: description,
      place_fee: price,
    };
    console.log(addHot);
    fetch("http://13.230.246.62:8080/place/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addHot),
    })
      .then(() => {
        console.log("Add place complete");
        // alert("Add place complete");
        setOpen(true);
        setSeverity("success");
      })
      .catch((err) => {
        console.log(err);
        setSeverity("error");
        setOpen(true);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <div>
            <AdminTitle>Thêm/Sửa địa danh</AdminTitle>
            <div className="flex items-center">
              <div className="w-1/5 self-center text-end">
                <label className="text-black font-bold">
                  Tên
                  <span className="text-red-700"> *</span>
                </label>
              </div>
              <div className="w-3/5 items-center">
                <Input
                  type="text"
                  placeholder="Tên địa danh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-1/5 self-center text-end">
                <label className="text-black font-bold">
                  Địa chỉ
                  <span className="text-red-700"> *</span>
                </label>
              </div>

              <div className="w-3/5 items-center">
                <Input
                  type="text"
                  placeholder="Địa chỉ"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-1/5 self-center text-end">
                <label className="text-black font-bold">
                Tỉnh/Thành phố
                  <span className="text-red-700"> *</span>
                </label>
              </div>
              <div className="items-center" style={{ padding: "10px" }}>
                <Select options={options} onChange={handleTypeSelect} />
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-1/5 self-center text-end">
                <label className="text-black font-bold">
                  Mô tả
                  <span className="text-red-700"> *</span>
                </label>
              </div>
              <div className="w-3/5 items-center">
                <Input
                  type="text"
                  placeholder="Viết mô tả địa danh"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-1/5 self-center text-end">
                <label className="text-black font-bold">
                  Phân loại
                  <span className="text-red-700"> *</span>
                </label>
              </div>
              <div className="items-center" style={{ padding: "10px" }}>
                <Select options={options} onChange={handleTypeSelect} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/5 self-center text-end">
                <label className="text-black font-bold">
                  Phương tiện di chuyển
                  <span className="text-red-700"> *</span>
                </label>
              </div>
              <div className="items-center" style={{ padding: "10px" }}>
                <Select options={options} onChange={handleTypeSelect} />
              </div>
            </div>
            <div className="flex items-center">
            <div className="w-1/5 self-center text-end">
              <label className="text-black font-bold">
                Ảnh
                <span className="text-red-700"> *</span>
              </label>
            </div>
            <div className="w-3/5 items-center">
              <Input
                type="text"
                placeholder="Đường dẫn đến ảnh"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          </div>
          <div className="w-4/5 flex ml-4 justify-end">
            <Button color="from-[#961919] to-[#f6646e] font-bold">
              <Link to="/admin/list-places">Hủy</Link>
            </Button>
            <Button color="font-bold mr-0" onClick={handleClick}>
              <Link to="/admin/list-places"></Link>
              Lưu lại
            </Button>
          </div>
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default AddPlace;
