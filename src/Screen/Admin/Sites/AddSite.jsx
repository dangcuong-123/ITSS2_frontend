import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useTranslation } from 'react-i18next';
import { Link, useAsyncError } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material"
import Select from 'react-select'

const AddSite = () => {
    const { t } = useTranslation()
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [intro, setIntro] = useState("")
    const [type, setType] = useState("")
    const [transportation, setTransportation] = useState("")
    const [image, setImage] = useState("")
    const [province, setProvince] = useState("")

    const options = [
        { value: 'ha noi', label: 'Ha noi' },
        { value: 'ha long', label: 'Ha long' },
        { value: 'hai phong', label: 'Hai phong' }
    ]

    const handleTypeSelect = e => {
        setProvince(e.value);
    };

    const handleClick = (e) => {
        console.log("click")
    }
    return (
        <LayoutAdmin>
            <div>
                <AdminTitle>{t('sites.title')}</AdminTitle>
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
                            onChange={(e) => setName(e.target.value)}
                        />
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
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                </div>
                
                {/* province  */}
                <div className="flex items-center">
                    <div className="w-1/5 self-center text-end">
                        <label className="text-black font-bold">
                            {t('addSite.province')}
                            <span className="text-red-700"> *</span>
                        </label>
                    </div>
                    <div className="items-center" style={{ padding: '10px' }}>
                        <Select options={options} onChange={handleTypeSelect} />
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
                            placeholder={t('addSite.address')}
                            value={intro}
                            onChange={(e) => setIntro(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="w-1/5 self-center text-end">
                        <label className="text-black font-bold">
                            {t('addSite.type')}
                            <span className="text-red-700"> *</span>
                        </label>
                    </div>
                    <div className="items-center" style={{ padding: '10px' }}>
                        <Select options={options} onChange={handleTypeSelect} />
                    </div>
                </div >

                <div className="flex items-center">
                    <div className="w-1/5 self-center text-end">
                        <label className="text-black font-bold">
                            {t('addSite.transportation')}
                            <span className="text-red-700"> *</span>
                        </label>
                    </div>
                    <div className="items-center" style={{ padding: '10px' }}>
                        <Select options={options} onChange={handleTypeSelect} />
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
                        <Input
                            type="text"
                            placeholder={t('addSite.url')}
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-4/5 flex ml-4 justify-end">
                    <Button color="from-[#961919] to-[#f6646e] font-bold">
                        <Link to="/list-hotel">
                            {t('addSite.cancel')}
                        </Link>
                    </Button>
                    <Button color="font-bold mr-0" onClick={handleClick}>
                        <Link to='/list-hotel'>
                        </Link>
                        {t('sites.title')}
                    </Button>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default AddSite;
