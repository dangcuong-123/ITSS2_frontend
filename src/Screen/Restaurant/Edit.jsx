import { useState } from "react";
import React from "react";
import Add from "./Add1";
import Card from "../../components/User/Login/Card";
import data from "../Restaurant/mock-data.json";
import LayoutAdmin from "../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../style";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Link, useNavigate } from "react-router-dom";

const Edit = ({ handleAddMenu }) => {
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

  return (
    <LayoutAdmin>
      <div>
        <AdminTitle>Add/Edit Restaurant</AdminTitle>
        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Name*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name restaurant"
              value={editRes.name}
              onChange={handleEditRes}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Address*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name restaurant"
              value={editRes.name}
              onChange={handleEditRes}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Introduce*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name restaurant"
              value={editRes.name}
              onChange={handleEditRes}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Menu introduce*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name restaurant"
              value={editRes.name}
              onChange={handleEditRes}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Menu list*</label>
          </div>
          <div className="w-3/5">
            <Button color="color-green font-bold">
                Add Menu
            </Button>
          </div>
        </div>
      </div>
      <div className="w-4/5 flex ml-4" style={{ justifyContent: "end" }}>
        <Button color="from-[#961919] to-[#f6646e] font-bold">Cancel</Button>
        <Button color="font-bold mr-0">Add Hotel</Button>
      </div>
    </LayoutAdmin>
  );
};

export default Edit;
