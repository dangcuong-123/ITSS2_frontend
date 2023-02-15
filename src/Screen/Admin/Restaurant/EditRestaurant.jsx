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
import Select from "react-select";
import { Snackbar, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { uploadImage } from "../../../services/firebase/uploadImage";
import { Switch, useHistory } from "react-router";

const EditRestaurant = ({ handleAddMenu }) => {
  const [restaurant_name, setRestaurantName] = useState("");
  const [hotel, setHotel] = useState("");
  const [image_url, setImage_url] = useState("");
  const [menu_description, setMenu_description] = useState("");
  const [menu_image_url, setMenu_image_url] = useState("");
  const [restaurant_address, setRestaurant_address] = useState("");
  const [restaurant_fee, setRestaurant_fee] = useState("");
  const [restaurant_open_time, setRestaurant_open_time] = useState("");
  const [restaurant_description, setRestaurant_description] = useState("");
  const [province, setProvince] = useState("");
  const [hotelList, setHotelList] = useState([]);
  const [image, setImage] = useState([]);
  const [menuImage, setMenuImage] = useState([]);
  const options = [{ value: "none", label: "None", id: "0" }];
  const { t } = useTranslation();
  const navigate = useNavigate();

  const options_province = [
    { value: "ha noi", label: "Ha noi" },
    { value: "ha long", label: "Ha long" },
    { value: "hai phong", label: "Hai phong" },
  ];
  const [restaurant, setRestaurant] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://13.230.246.62:8080/restaurant/search_restaurant_id/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async (response) => {
      const data = await response.json();
      console.log(data);
      setHotel(data[0].hotel_id);
      setRestaurantName(data[0].restaurant_name);
      setRestaurant_address(data[0].restaurant_address);
      setRestaurant_description(data[0].restaurant_description);
      setRestaurant_fee(data[0].restaurant_fee);
      setRestaurant_open_time(data[0].restaurant_open_time);
      setImage_url(data[0].image_url);
      setMenu_image_url(data[0].menu_img_url);
      setMenu_description(data[0].menu_description);
    });
  }, []);

  const handleTypeProvince = (e) => {
    setProvince(e.value);
  };
  const handleTypeSelect = (e) => {
    setHotel(e.id);
  };

  useEffect(() => {
    fetch("http://13.230.246.62:8080/hotel/show", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async (response) => {
      const data = await response.json();
      // console.log(data)
      setHotelList(data);
    });
  }, []);

  hotelList.map((hotel, id) => {
    options.push({
      value: hotel.hotel_name,
      label: hotel.hotel_name,
      id: hotel.hotel_id,
    });
  });

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
  const [open, setOpen] = useState(false);

  // state handle show success message
  const [successMessage, setSuccessMessage] = useState("");
  const [openSuccess, setOpenSuccess] = useState(null);
  const [severity, setSeverity] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const EditRestaurantSchema = Yup.object().shape({
    restaurantName: Yup.string().required("Bắt buộc"),
    restaurantAddress: Yup.string().required("Bắt buộc"),
    restaurantDescription: Yup.string().required("Bắt buộc"),
    restaurantFee: Yup.string().required("Bắt buộc"),
    menuDescription: Yup.string().required("Bắt buộc"),
    restaurantOpenTime: Yup.string().required("Bắt buộc"),
  });
  const formik = useFormik({
    initialValues: {
      restaurantName: restaurant_name,
      restaurantAddress: restaurant_address,
      restaurantDescription: restaurant_description,
      restaurantFee: restaurant_fee,
      menuDescription: menu_description,
      restaurantOpenTime: restaurant_open_time,
    },
    enableReinitialize: true,
    validationSchema: EditRestaurantSchema,
    onSubmit: async (values) => {
      const image_url_tmp =
        image.length > 0 ? await uploadImage(image[0]) : image_url;
      console.log(image_url_tmp);
      const menu_img_url =
        menuImage.length > 0 ? await uploadImage(menuImage[0]) : menu_image_url;
      var new_place = {
        restaurant_id: id,
        restaurant_name: values.restaurantName,
        restaurant_description: values.restaurantDescription,
        restaurant_address_input: values.restaurantAddress,
        restaurant_fee: values.restaurantFee,
        restaurant_address_select: province,
        menu_description: values.menuDescription,
        restaurant_open_time: values.restaurantOpenTime,
        hotel_id: hotel,
        image_url: image_url_tmp,
        menu_img_url: menu_img_url,

        // loc_province: province,
        // image_url: image_url_tmp
      };
      console.log("Edit place", values.transports);

      fetch("http://13.230.246.62:8080/restaurant/edit_restaurant", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(new_place),
      })
        .then(() => {
          console.log("Edit restaurant complete");
          // alert("Edit restaurant complete");
          setOpenSuccess(true);
          setTimeout(() => {
            setSuccessMessage("Sửa nhà hàng thành công!");
          }, 2000);
          setTimeout(() => {
            navigate("/list-restaurant");
          }, 4000);
        })
        .catch((err) => {
          console.log(err);
          setOpen(true);
          setErrorMessage("Error");
        });
    },
  });
  const editRestaurant = (e) => {
    e.preventDefault();
    const editRes = {
      restaurant_id: id,
      restaurant_name: restaurant_name,
      restaurant_address_input: restaurant_address,
      restaurant_address_select: province,
      hotel_id: hotel,
      restaurant_fee: restaurant_fee,
      image_url: image_url,
      restaurant_open_time: restaurant_open_time,
      menu_img_url: menu_image_url,
      menu_description: menu_description,
      restaurant_description: restaurant_description,
    };
    console.log(editRes);
    fetch("http://13.230.246.62:8080/restaurant/edit_restaurant", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editRes),
    })
      .then(() => {
        console.log("Edit restaurant complete");
        // alert("Edit restaurant complete");
        setOpenSuccess(true);
        setTimeout(() => {
          setSuccessMessage("Sửa nhà hàng thành công!");
        }, 1000);
        navigate("/list-restaurant");
      })
      .catch((err) => {
        console.log(err);
        setOpen(true);
        setErrorMessage("Error");
      });
  };

  return (
    <LayoutAdmin>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <AdminTitle>{t("editRest.title")}</AdminTitle>

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
                {t("editRest.name")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                id="restaurantName"
                name="restaurantName"
                placeholder={t("editRest.name")}
                value={formik.values.restaurantName}
                // onChange={(e) => setRestaurantName(e.target.value)}
                onChange={formik.handleChange}
                error={
                  formik.touched.restaurantName &&
                  Boolean(formik.errors.restaurantName)
                }
                helperText={
                  formik.touched.restaurantName && formik.errors.restaurantName
                }
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/5 self-center text-end">
              <label className="text-black font-bold">
                {t("editRest.address")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                id="restaurantAddress"
                name="restaurantAddress"
                placeholder={t("editRest.address")}
                value={formik.values.restaurantAddress}
                // onChange={(e) => setRestaurantAddress(e.target.value)}
                onChange={formik.handleChange}
                error={
                  formik.touched.restaurantAddress &&
                  Boolean(formik.errors.restaurantAddress)
                }
                helperText={
                  formik.touched.restaurantAddress &&
                  formik.errors.restaurantAddress
                }
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/5 self-center text-end">
              <label className="text-black font-bold">
                {t("editRest.province")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="items-center" style={{ padding: "15px" }}>
              <Select
                options={options_province}
                onChange={handleTypeProvince}
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/5 self-center text-end">
              <label className="text-black font-bold">
                {t("editRest.fee")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                id="restaurantFee"
                name="restaurantFee"
                placeholder={t("editRest.fee")}
                value={formik.values.restaurantFee}
                // onChange={(e) => setRestaurantName(e.target.value)}
                onChange={formik.handleChange}
                error={
                  formik.touched.restaurantFee &&
                  Boolean(formik.errors.restaurantFee)
                }
                helperText={
                  formik.touched.restaurantFee && formik.errors.restaurantFee
                }
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/5 self-center text-end">
              <label className="text-black font-bold">
                {t("editRest.hotel")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="items-center" style={{ padding: "15px" }}>
              <Select options={options} onChange={handleTypeSelect} />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/5 self-center text-end">
              <label className="text-black font-bold">
                {t("editRest.url")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <div className="w-3/5 items-center">
                <input
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
                {t("editRest.openTime")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                id="restaurantOpenTime"
                name="restaurantOpenTime"
                placeholder={t("editRest.openTime")}
                value={formik.values.restaurantOpenTime}
                // onChange={(e) => setRestaurantName(e.target.value)}
                onChange={formik.handleChange}
                error={
                  formik.touched.restaurantOpenTime &&
                  Boolean(formik.errors.restaurantOpenTime)
                }
                helperText={
                  formik.touched.restaurantOpenTime &&
                  formik.errors.restaurantOpenTime
                }
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/5 self-center text-end">
              <label className="text-black font-bold">
                {t("editRest.menu")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                id="menuDescription"
                name="menuDescription"
                placeholder={t("editRest.menu")}
                value={formik.values.menuDescription}
                // onChange={(e) => setRestaurantName(e.target.value)}
                onChange={formik.handleChange}
                error={
                  formik.touched.menuDescription &&
                  Boolean(formik.errors.menuDescription)
                }
                helperText={
                  formik.touched.menuDescription &&
                  formik.errors.menuDescription
                }
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/5 self-center text-end">
              <label className="text-black font-bold">
                {t("editRest.menuURL")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <div className="w-3/5 items-center">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files);
                    setMenuImage(e.target.files);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/5 self-center text-end">
              <label className="text-black font-bold">
                {t("editRest.description")}{" "}
                <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                placeholder={t("editRest.description")}
                value={restaurant_description}
                onChange={(e) => setRestaurant_description(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert severity={severity} onClose={handleClose}>
                {t("editRest.success")}
              </Alert>
            </Snackbar>
          </div>
        </div>
        <div className="w-4/5 flex ml-4 justify-end">
          <Button color="from-[#961919] to-[#f6646e] font-bold">
            <Link to="/list-restaurant">{t("editRest.cancel")}</Link>
          </Button>
          {/* <Button color="font-bold mr-0" onClick={editRestaurant}>{t('editRest.save')}</Button> */}
          <Button color="font-bold mr-0" type="submit" autoFocus>
            {t("editRest.save")}
          </Button>
        </div>
      </form>
    </LayoutAdmin>
  );
};

export default EditRestaurant;
