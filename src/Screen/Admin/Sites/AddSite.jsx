import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useTranslation } from 'react-i18next';
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material"
import Select from 'react-select'
import { MultiSelect } from "react-multi-select-component";
import { uploadImage } from "../../../services/firebase/uploadImage";

const AddSite = () => {
    const navigation = useNavigate()
    const { t } = useTranslation()
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [intro, setIntro] = useState("")
    const [type, setType] = useState([])
    const [transportation, setTransportation] = useState([])
    const [image, setImage] = useState([])
    const [province, setProvince] = useState("")
    const [description, setDescription] = useState("")
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('')
    const provinceOptions = [
        { value: 'Hà Nội', label: 'Hà Nội' },
        { value: 'Quảng Ninh', label: 'Quảng Ninh' },
        { value: 'Hải Phòng', label: 'Hải Phòng' },
        { value: 'Lào Cai', label: 'Lào Cai' },
        { value: 'Huế', label: 'Huế' },
        { value: 'Đà Nẵng', label: 'Đà Nẵng' },
        { value: 'Khánh Hòa', label: 'Khánh Hòa' },
        { value: 'TP Hồ Chí Minh', label: 'TP Hồ Chí Minh' },
        { value: 'Cần Thơ', label: 'Cần Thơ' }
    ]
    const typeOptions = [
        { value: 'Biển', label: 'Biển' },
        { value: 'Núi', label: 'Núi' },
        { value: 'Danh lam thắng cảnh', label: 'Danh lam thắng cảnh' },
        { value: 'Di tích lịch sử', label: 'Di tích lịch sử' },
        { value: 'Chùa', label: 'Chùa' },
        { value: 'Bảo tàng', label: 'Bảo tàng' }
    ]
    const transportationOptions = [
        { value: 'Xe máy', label: 'Xe máy' },
        { value: 'Ô tô', label: 'Ô tô' },
        { value: 'Tàu hỏa', label: 'Tàu hỏa' },
        { value: 'Thuyền', label: 'Thuyền' }
    ]
    var bike = 0, car = 0, ship = 0, train = 0
    if(transportation.some(some => some.value === "Xe máy")) {
        bike = 1
    }
    if(transportation.some(some => some.value === "Ô tô")) {
        car = 1
    }
    if(transportation.some(some => some.value === "Tàu hỏa")) {
        ship = 1
    }
    if(transportation.some(some => some.value === "Thuyền")) {
        train = 1
    }
    const provinces = []
    const handleTypeSelect = e => {
        setProvince(e.value);
    };
    const types = type.map(function(item) {
        return item['value'];
      });
    // console.log(province.value)
    // console.log(types)
    const [openGlobalError, setOpenGlobalError] = useState()
    const [globalError, setGlobalError] = useState()
    const handleClick = async (e) =>{
        e.preventDefault();
        // e.currentTarget.disabled = true;
        let check = false
        let emptyArray = []
        if(name.length == 0){
            emptyArray.push("name")
        }
        if(address.length == 0){
            emptyArray.push("address")
        }
        if(description.length == 0){
            emptyArray.push("description")
        }
        if(image.length == 0){
            emptyArray.push("image")
        }
        if(province.length == 0){
            emptyArray.push("province")
        }
        if(transportation.length == 0){
            emptyArray.push("transportation")
        }
        if(type.length == 0){
            emptyArray.push("type")
        }
        
        // if(emptyArray.length == 0) {
        //     setOpenGlobalError(false)
        // }
        // else{
        //     setOpenGlobalError(true)
        // }
        
        // console.log("1")
        // console.log("openGlobalError",openGlobalError)
        // console.log("emptyArray",emptyArray.length)
        
        if(1){
            console.log(image)
            const image_url = await uploadImage(image[0])
            const addSite = {
                "location_name": name,
                "location_address": address,
                "location_description": description,
                "image_url": image_url,
                "loc_province": province.value,
                "tags": JSON.stringify(types),
                "train": train,
                "motorbike": bike,
                "car": car,
                "ship": ship

                //   "location_description": description,
                //   "location_fee":price
            };
            // console.log(addSite);
            fetch("http://13.230.246.62:8080/location/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(addSite)
            }).then(() => {

                // alert("Add location complete");
                setOpen(true);
                setSeverity('success')
            }).catch((err) => {
                console.log(err)
                setSeverity('error')
                setOpen(true)
            })
        }
        navigation('/sites')
      }
    
    const [errorSiteName, setErrorSiteName] = useState("")
    const handleSiteName = (e) => {
        if(e.target.value){
            setName(e.target.value)
            setErrorSiteName("")
        }
        else{
            setErrorSiteName("Empty Site's name")
            setName("")
        }
    }

    const [errorAddress, setErroAddress] = useState("")
    const handleAddress = (e) => {
        if (e.target.value) {
            setAddress(e.target.value)
            setErroAddress("")
        }
        else {
            setErrorSiteName("Empty Address")
            setAddress("")
        }
    }

    const [errorProvince, setErrorProvince] = useState("")
    const handleProvince = (e) => {
        if(e.target.value){
            setProvince(e.target.value)
            setErrorProvince("")
        }
        else{
            setErrorProvince("Please select province")
            setProvince("")
        }
    }

    const [errorDescription, setErrorDescription] = useState("")
    const handleDescription = (e) => {
        if (e.target.value) {
            setDescription(e.target.value)
            setErrorDescription("")
        }
        else {
            setErrorDescription("Empty Description")
            setDescription("")
        }
    }
    return (
        <LayoutAdmin>
            <div>
                <AdminTitle>{t('sites.title')}</AdminTitle>
                {
                    openGlobalError && (
                        <Snackbar
                            open={openGlobalError}
                            autoHideDuration={6000}
                            onClose={() => setOpenGlobalError(false)}
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        >
                            <Alert onClose={() => setOpenGlobalError(false)} severity="error">
                                {globalError}
                            </Alert>
                        </Snackbar>
                    )
                }
                <form onSubmit={handleClick}>
                <div className="flex items-center">
                    <div className="w-1/5 self-center text-end">
                        <label className="text-black font-bold">
                            {t('addSite.name')}
                            <span className="text-red-700"> *</span>
                        </label>
                    </div>
                    <div className="w-3/5 items-center">
                        <Input
                            type="text"
                            placeholder={t('addSite.name')}
                            value={name}
                            onChange={handleSiteName}
                            required={true}
                        />
                        {
                            errorSiteName.length !== 0 && 
                            (
                                <span style={{ padding: '15px', color: 'red', fontStyle: 'italic', fontSize: '15px' }}>{errorSiteName}</span>
                            )
                        }
                    </div>
                    
                </div>

                <div className="flex items-center">
                    <div className="w-1/5 self-center text-end">
                        <label className="text-black font-bold">
                            {t('addSite.address')}
                            <span className="text-red-700"> *</span>
                        </label>
                    </div>

                    <div className="w-3/5 items-center">
                        <Input
                            type="text"
                            placeholder={t('addSite.address')}
                            value={address}
                            onChange={handleAddress}
                            required={true}
                        />
                        
                    </div>
                </div>
                {/* {
                    errorAddress.length !== 0 &&
                    (
                        <span style={{ padding: '15px', color: 'red', fontStyle: 'italic', fontSize: '15px' }}>{errorAddress}</span>
                    )
                } */}
                {/* province  */}
                <div className="flex items-center">
                    <div className="w-1/5 self-center text-end">
                        <label className="text-black font-bold">
                            {t('addSite.province')}
                            <span className="text-red-700"> *</span>
                        </label>
                    </div>
                    <div className="items-center" style={{ padding: '10px', width: '150px'}}>
                        <Select options={provinceOptions} onChange={setProvince} />
                    </div>
                </div >

                <div className="flex items-center">
                    <div className="w-1/5 self-center text-end">
                        <label className="text-black font-bold">
                            {t('addSite.description')}
                            <span className="text-red-700"> *</span>
                        </label>
                    </div>

                    <div className="w-3/5 items-center">
                        <Input
                            type="text"
                            placeholder="Mô tả"
                            value={description}
                            onChange={handleDescription}
                            required={true}
                        />
                        {
                            errorDescription.length !== 0 &&
                            (
                                <span style={{ padding: '15px', color: 'red', fontStyle: 'italic', fontSize: '15px' }}>{errorDescription}</span>
                            )
                        }
                    </div>
                    
                </div>

                <div className="flex items-center">
                    <div className="w-1/5 self-center text-end">
                        <label className="text-black font-bold">
                            {t('addSite.type')}
                            <span className="text-red-700"> *</span>
                        </label>
                    </div>
                    <div className="items-center" style={{ padding: '10px' , width: '150px'}}>
                        <MultiSelect options={typeOptions} value={type} onChange={setType} labelledBy="Select" />
                    </div>
                </div >

                <div className="flex items-center">
                    <div className="w-1/5 self-center text-end">
                        <label className="text-black font-bold">
                            {t('addSite.transportation')}
                            <span className="text-red-700"> *</span>
                        </label>
                    </div>
                    <div className="items-center" style={{ padding: '10px', width: '150px' }}>
                        <MultiSelect options={transportationOptions} value={transportation} onChange={setTransportation} labelledBy="Select" />
                    </div>
                </div >

                <div className="flex items-center">
                    <div className="w-1/5 self-center text-end">
                        <label className="text-black font-bold">
                            {t('addSite.url')}
                            <span className="text-red-700"> *</span>
                        </label>
                    </div>

                    <div className="w-3/5 items-center">
                        <input
                            type="file"
                            onChange={(e) => {
                                console.log(e.target.files)
                                setImage(e.target.files)
                            }}
                            required={true}
                            style={{padding: '10px'}}
                        />
                    </div>
                </div>
                <div className="w-4/5 flex ml-4 justify-end">
                    <Button color="from-[#961919] to-[#f6646e] font-bold" >
                        <Link to="/sites">
                            {t('addSite.cancel')}
                        </Link>
                    </Button>
                    <Button color="font-bold mr-0"  type='submit'>
                        Thêm địa danh
                    </Button>
                </div>
            </form>
            </div>
        </LayoutAdmin>
    );
};

export default AddSite;
