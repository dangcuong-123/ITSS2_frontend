import React, { useEffect, useState } from "react";
import data from "../Restaurant/mock-data.json";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { nanoid } from "nanoid";
import { AdminTitle } from "../../../style";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Snackbar, Alert } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { uploadImage } from "../../../services/firebase/uploadImage";
import { Switch, useHistory } from "react-router";
import { useNavigate } from "react-router-dom";

const AddRestaurant = ({ handleCancelClick, handleDeleteClick }) => {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState(data);
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
  // state handle show error message
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState([]);
  const [menuImage, setMenuImage] = useState([]);
  // state handle show success message
  const [successMessage, setSuccessMessage] = useState("");
  const [openSuccess, setOpenSuccess] = useState(null);
  const [severity, setSeverity] = useState("");

  const options = [{ value: "none", label: "None", id: "0" }];
  const { t } = useTranslation();
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
      restaurantName: "",
      restaurantAddress: "",
      restaurantDescription: "",
      restaurantFee: "",
      menuDescription: "",
      restaurantOpenTime: "",
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

      fetch("http://13.230.246.62:8080/restaurant/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(new_place),
      })
        .then(() => {
          console.log("Edit restaurant complete");
          // alert("Edit restaurant complete");
          setOpenSuccess(true);
          setTimeout(() => {
            setSuccessMessage("Thêm nhà hàng thành công!");
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
  const options_province = [
    { value: "ha noi", label: "Ha noi" },
    { value: "ha long", label: "Ha long" },
    { value: "hai phong", label: "Hai phong" },
  ];
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
  const handleTypeProvince = (e) => {
    setProvince(e.value);
  };
  const handleTypeSelect = (e) => {
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
    console.log(addRes);
    fetch("http://13.230.246.62:8080/restaurant/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addRes),
    })
      .then(() => {
        console.log("Add restaurant complete");
        setOpenSuccess(true);
        setSuccessMessage("Thêm nhà hàng thành công!");
        // alert("Add restaurant complete");
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
          <AdminTitle>{t("addRest.title")}</AdminTitle>
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
                {t("addRest.name")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                id="restaurantName"
                name="restaurantName"
                placeholder={t("addRest.name")}
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
                {t("addRest.address")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                id="restaurantAddress"
                name="restaurantAddress"
                placeholder={t("addRest.address")}
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
                {t("addRest.province")} <span style={{ color: "red" }}>*</span>
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
                {t("addRest.fee")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                id="restaurantFee"
                name="restaurantFee"
                placeholder={t("addRest.fee")}
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
                {t("addRest.hotel")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="items-center" style={{ padding: "15px" }}>
              <Select options={options} onChange={handleTypeSelect} />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/5 self-center text-end">
              <label className="text-black font-bold">
                {t("addRest.url")} <span style={{ color: "red" }}>*</span>
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
                {t("addRest.openTime")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                id="restaurantOpenTime"
                name="restaurantOpenTime"
                placeholder={t("addRest.openTime")}
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
                {t("addRest.menu")} <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                id="menuDescription"
                name="menuDescription"
                placeholder={t("addRest.menu")}
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
                {t("addRest.menuURL")} <span style={{ color: "red" }}>*</span>
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
                {t("addRest.description")}{" "}
                <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
              <TextField
                className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
              rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                type="text"
                id="restaurantDescription"
                name="restaurantDescription"
                placeholder={t("addRest.description")}
                value={formik.values.restaurantDescription}
                // onChange={(e) => setRestaurantName(e.target.value)}
                onChange={formik.handleChange}
                error={
                  formik.touched.restaurantDescription &&
                  Boolean(formik.errors.restaurantDescription)
                }
                helperText={
                  formik.touched.restaurantDescription &&
                  formik.errors.restaurantDescription
                }
              />
            </div>
          </div>
          <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert severity={severity} onClose={handleClose}>
                {t("addRest.success")}
              </Alert>
            </Snackbar>
          </div>
        </div>
        <div className="w-4/5 flex ml-4 justify-end">
          <Button color="from-[#961919] to-[#f6646e] font-bold">
            <Link to="/list-restaurant">{t("addRest.cancel")}</Link>
          </Button>
          {/* <Button color="font-bold mr-0" onClick={editRestaurant}>{t('addRest.save')}</Button> */}
          <Button color="font-bold mr-0" type="submit" autoFocus>
            {t("addRest.addRest")}
          </Button>
        </div>
      </form>
    </LayoutAdmin>
  );
};

export default AddRestaurant;
