import { useState } from "react";
import React from "react";

import Card from "../../components/User/Login/Card";
import data1 from "../Hotel/mock-data.json"

const EditHotel = () => {
    const [editContactId1, setEditContactId1] = useState(null);
    const [contacts1, setContacts1] = useState(data1);

    const[editHotel, setEditHotel] = useState({
        name: "",
        address: "",
        intro:"",
        roomInfo:"",
        price:"",
    });

    const handleEditHotel = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newEditHotel1 = {...editHotel};
        newEditHotel1[fieldName] = fieldValue;
        setEditHotel(newEditHotel1);

    }

    const handleEditHotelSubmit = (e) => {
        e.preventDefault();
        const editedContact1 = {
            id : editContactId1,
            name : editHotel.name,
            address: editHotel.address,
            intro: editHotel.intro,
            roomInfo: editHotel.roomInfo,
            price: editHotel.price
        };

        const newContacts1 = [...contacts1];
        const index1 = contacts1.findIndex((contact1) => contact1.id === editContactId1);
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
            price: contact1.price
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

    return(
        <div>
            <h1>Edit Hotel</h1>
            <Card>
                <div>
                    <span>Name * </span>
                    <input 
                        type="text" 
                        placeholder="name restaurant" 
                        value={editHotel.name}
                        onChange={handleEditHotel}
                        />
                </div>
                <div>
                    <span>Address * </span>
                    <input 
                        type="text" 
                        placeholder="address" 
                        value={editHotel.address}
                        onChange={handleEditHotel}
                        />
                    <select 
                        name="Address" 
                        id="" 
                        placeholder=""
                        onChange={handleEditHotel}>

                    </select>
                </div>
                <div>
                    <span>Introduce * </span>
                    <input 
                        type="text" 
                        placeholder="introduce"
                        value={editHotel.intro}
                        onChange={handleEditHotel} />                
                </div>
                <div>
                    <span>Room Info * </span>
                    <input 
                        type="text" 
                        placeholder="room info"
                        value={editHotel.roomInfo}
                        onChange={handleEditHotel} />
                </div>

                <div>
                    <span>Price * </span>
                    <input 
                        type="text" 
                        placeholder="price"
                        value={editHotel.price}
                        onChange={handleEditHotel} />
                </div>
                
                <div>
                    <button 
                        className="bg-gradient-to-r from-[#6E6E6E] to-[#D8D8D8] py-1.5 text-white shadow-lg"
                        onClick={handleCancelClick1}>Cancel</button>
                    
                    <button 
                        className="bg-gradient-to-r from-[#F7FE2E] to-[#F3F781] py-1.5 text-white shadow-lg"
                        onClick={handleEditHotelSubmit}>
                         Edit Hotel
                    </button>
                    <button 
                        className="bg-gradient-to-r from-[#FE2E2E] to-[#FA5858] py-1.5 text-white shadow-lg"
                        onClick={handleDeleteClick1}>
                         Delete Hotel
                    </button>
                </div>

            </Card>
            
        </div>
    )
}

export default EditHotel;