import React, { useState } from "react";
import data from "../Restaurant/mock-data.json";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { nanoid } from "nanoid";
import { AdminTitle } from "../../../style";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const AddRestaurant = ({ handleCancelClick, handleDeleteClick }) => {
  const [contacts, setContacts] = useState(data);

  const [addRes, setAddRes] = useState({
    name: "",
    address: "",
    intro: "",
    menuIntro: "",
  });

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

  return (
    <LayoutAdmin>
      <div>
        <AdminTitle>Add Restaurant</AdminTitle>
        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Name*</label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name restaurant"
              value={addRes.name}
              onChange={handleAddRes}
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
              value={addRes.name}
              onChange={handleAddRes}
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
              value={addRes.name}
              onChange={handleAddRes}
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
              value={addRes.name}
              onChange={handleAddRes}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">Menu list*</label>
          </div>
          <div className="w-3/5">
            <Button color="color-green font-bold">Add Menu</Button>
          </div>
        </div>
      </div>
      <div className="w-4/5 flex ml-4" style={{ justifyContent: "end" }}>
        <Button color="from-[#961919] to-[#f6646e] font-bold">
          <Link to="/list-restaurant">Cancel</Link>
        </Button>
        <Button color="font-bold mr-0">Add Restaurant</Button>
      </div>
    </LayoutAdmin>
  );
};

export default AddRestaurant;
