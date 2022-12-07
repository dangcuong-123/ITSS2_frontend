import { useState } from "react";
import React from "react";
import Add from "./Add1";
import Card from "../../components/User/Login/Card";
import data from "../Restaurant/mock-data.json"

const Edit = ({handleAddMenu}) =>{
    const [editContactId, setEditContactId] = useState(null);
    const [contacts, setContacts] = useState(data);

    const[editRes, setEditRes] = useState({
        name: "",
        address: "",
        intro:"",
        menuIntro:"",
    });

    const handleEditRes = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newEditRes = {...editRes};
        newEditRes[fieldName] = fieldValue;
        setEditRes(newEditRes);

    }

    const handleEditResSubmit = (e ) =>{
        e.preventDefault();
        const editedContact = {
            id : editContactId,
            name : editRes.name,
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

    const handleEditClick = (e, contact) =>{
        e.preventDefault();
        setEditContactId(contact.id);

        const editValue = {
            name: contact.name,
            address: contact.address,
            intro: contact.intro,
            menuIntro: contact.menuIntro
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

    return(
        <div>
            <h1>Edit Restaurant</h1>
            <Card>
                <div>
                    <span>Name * </span>
                    <input 
                        type="text" 
                        placeholder="name restaurant" 
                        value={editRes.name}
                        onChange={handleEditRes}
                        />
                </div>
                <div>
                    <span>Address * </span>
                    <input 
                        type="text" 
                        placeholder="address" 
                        value={editRes.address}
                        onChange={handleEditRes}
                        />
                    <select 
                        name="Address" 
                        id="" 
                        placeholder=""
                        onChange={handleEditRes}>

                    </select>
                </div>
                <div>
                    <span>Introduce * </span>
                    <input 
                        type="text" 
                        placeholder="introduce"
                        value={editRes.intro}
                        onChange={handleEditRes} />                
                </div>
                <div>
                    <span>Menu Introduce * </span>
                    <input 
                        type="text" 
                        placeholder="menu introduce"
                        value={editRes.menuIntro}
                        onChange={handleEditRes} />
                </div>
                <div>
                    <span>Menu List </span>
                    <button className="bg-gradient-to-r from-[#64B5F6] to-[#2286C3] py-1.5 text-white shadow-lg"
                        onClick={handleAddMenu}> 
                        Add menu
                    </button>
                </div>
                <div>
                    <button 
                        className="bg-gradient-to-r from-[#6E6E6E] to-[#D8D8D8] py-1.5 text-white shadow-lg"
                        onClick={handleCancelClick}>Cancel</button>
                    
                    <button 
                        className="bg-gradient-to-r from-[#F7FE2E] to-[#F3F781] py-1.5 text-white shadow-lg"
                        onClick={handleEditResSubmit}>
                         Edit Restaurant
                    </button>
                    <button 
                        className="bg-gradient-to-r from-[#FE2E2E] to-[#FA5858] py-1.5 text-white shadow-lg"
                        onClick={handleDeleteClick}>
                         Delete Restaurant
                    </button>
                </div>

            </Card>
            
        </div>
    )

}

export default Edit;