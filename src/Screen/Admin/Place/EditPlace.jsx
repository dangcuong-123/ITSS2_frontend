import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { Autocomplete, FormControl, MenuItem, Select } from "@mui/material";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import {
  getPlace,
  getTags,
  PROVINCE_OPTIONS,
  TAG_OPTIONS,
  TRANSPORT_OPTIONS,
} from "../../../services/PlaceServices";
import { useNavigate, useParams } from "react-router-dom";
import { uploadImage } from "../../../services/firebase/uploadImage";
import { useTranslation } from "react-i18next";
import { Snackbar, Alert } from "@mui/material";

const EditPlace = () => {
  const { id } = useParams();
  const [tagOptions, setTags] = useState([]);
  const [province, setProvince] = useState(PROVINCE_OPTIONS[0]);
  const navigate = useNavigate();
  const [place, setPlace] = useState({});
  const [image, setImage] = useState([]);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const { t } = useTranslation();
  const [openGlobalError, setOpenGlobalError] = useState();
  const [globalError, setGlobalError] = useState();

  useEffect(() => {
    getPlace()
      .then((res) => {
        var arr = res.data.filter((pl) => pl.location_id === Number(id));
        setPlace(arr[0]);
        console.log();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    getTags()
      .then((res) => {
        var tags_arr = [];
        res.data.forEach((element) => {
          var tag = TAG_OPTIONS.filter((obj) => obj.key === element)[0];
          var x = {
            key: element,
            value: tag.value,
          };
          tags_arr.push(x);
        });
        setTags(tags_arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const EditPlaceSchema = Yup.object().shape({
    locationName: Yup.string().required("Bắt buộc"),
    locationAddress: Yup.string().required("Bắt buộc"),
    locationDescription: Yup.string().required("Bắt buộc"),
  });

  const formik = useFormik({
    initialValues: {
      locationName: place.location_name,
      locationAddress: place.location_address,
      locationDescription: place.location_description,
      tags: [],
      transports: [],
    },
    validationSchema: EditPlaceSchema,
    onSubmit: async (values) => {
      const image_url = await uploadImage(image[0]);
      var new_place = {
        location_id: place.location_id,
        location_name: values.locationName,
        location_description: values.locationDescription,
        location_address: values.locationAddress,
        loc_province: province,
        image_url: image_url,
        train: isTransport(values.transports, "train"),
        car: isTransport(values.transports, "car"),
        ship: isTransport(values.transports, "ship"),
        motorbike: isTransport(values.transports, "motorbike"),
        tags: JSON.stringify(values.tags),
      };
      console.log("Edit place", new_place);

      fetch("http://13.230.246.62:8080/location/edit", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(new_place),
      })
        .then(() => {
          // alert("Edit location complete");
          setOpen(true);
          setSeverity("success");
        })
        .catch((err) => {
          console.log(err);
          setSeverity("error");
          setOpen(true);
        });
      navigate.push("/list-places");
    },
  });

  const handlerChangeProvince = (value) => {
    setProvince(value);
  };

  const isTransport = (transports, type) => {
    return transports.find(
      (x) => TRANSPORT_OPTIONS.filter((y) => y.value === x)[0].key === type
    ) !== undefined
      ? 1
      : 0;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <div>
            <AdminTitle>{t("sites.title")}</AdminTitle>
            {openGlobalError && (
              <Snackbar
                open={openGlobalError}
                autoHideDuration={6000}
                onClose={() => setOpenGlobalError(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert
                  onClose={() => setOpenGlobalError(false)}
                  severity="error"
                >
                  {globalError}
                </Alert>
              </Snackbar>
            )}
            <form onSubmit={formik.handleSubmit}>
              <div className="flex items-center">
                <div className="w-1/5 self-center text-end">
                  <label className="text-black font-bold">
                    Tên
                    <span className="text-red-700"> *</span>
                  </label>
                </div>
                <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
                  <TextField
                    className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
                                 rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                    id="locationName"
                    name="locationName"
                    value={formik.values.locationName}
                    onChange={formik.handleChange}
                    placeholder="Tên địa danh"
                    error={
                      formik.touched.locationName &&
                      Boolean(formik.errors.locationName)
                    }
                    helperText={
                      formik.touched.locationName && formik.errors.locationName
                    }
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

                <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
                  <TextField
                    className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
                                 rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                    placeholder="Địa chỉ"
                    id="locationAddress"
                    name="locationAddress"
                    value={formik.values.locationAddress}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.locationAddress &&
                      Boolean(formik.errors.locationAddress)
                    }
                    helperText={
                      formik.touched.locationAddress &&
                      formik.errors.locationAddress
                    }
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
                <div className="w-3/5 items-center">
                  <Autocomplete
                    className="relative flex w-full items-center m-4 border-1 border-[#2286C3]"
                    id="province"
                    options={PROVINCE_OPTIONS}
                    getOptionLabel={(option) => option}
                    value={province}
                    onChange={(e, data) => {
                      handlerChangeProvince(data);
                    }}
                    autoHighlight
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
                                 rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                        name="province"
                      />
                    )}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/5 self-center text-end">
                  <label className="text-black font-bold">
                    Mô tả
                    <span className="text-red-700"> *</span>
                  </label>
                </div>
                <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
                  <TextField
                    className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
                                 rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                    placeholder="Viết mô tả địa danh"
                    id="locationDescription"
                    name="locationDescription"
                    value={formik.values.locationDescription}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.locationAddress &&
                      Boolean(formik.errors.locationAddress)
                    }
                    helperText={
                      formik.touched.locationAddress &&
                      formik.errors.locationAddress
                    }
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
                <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
                  <FormControl
                    className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
                                 rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                  >
                    <Select
                      id="tags"
                      name="tags"
                      value={formik.values.tags}
                      onChange={formik.handleChange}
                      multiple
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {tagOptions.map(({ value, key }) => (
                        <MenuItem key={key} value={value}>
                          <Checkbox
                            checked={formik.values.tags.indexOf(value) > -1}
                          />
                          <ListItemText primary={value} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/5 self-center text-end">
                  <label className="text-black font-bold">
                    Phương tiện di chuyển
                    <span className="text-red-700"> *</span>
                  </label>
                </div>
                <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
                  <FormControl
                    className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] 
                                 rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full"
                  >
                    <Select
                      id="transports"
                      name="transports"
                      value={formik.values.transports}
                      onChange={formik.handleChange}
                      multiple
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {TRANSPORT_OPTIONS.map(({ key, value }) => (
                        <MenuItem key={key} value={value}>
                          <Checkbox
                            checked={
                              formik.values.transports.indexOf(value) > -1
                            }
                          />
                          <ListItemText primary={value} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/5 self-center text-end">
                  <label className="text-black font-bold">
                    Ảnh
                    <span className="text-red-700"> *</span>
                  </label>
                </div>
                <div className="w-3/5 items-center relative flex w-full items-center m-4 border-1 border-[#2286C3]">
                  <div className="w-3/5 items-center">
                    <input
                      required={true}
                      style={{ padding: "10px" }}
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
              <div className="w-4/5 flex ml-4 justify-end">
                <Button
                  color="from-[#961919] to-[#f6646e] font-bold"
                  type="button"
                >
                  <Link to="/list-places">Hủy</Link>
                </Button>
                <Button color="font-bold mr-0" type="submit" autoFocus>
                  Lưu lại
                </Button>
              </div>
            </form>
          </div>
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default EditPlace;
