import React from "react";
import { useState } from "react";
import data1 from "./mock-data.json";
import { nanoid } from "nanoid";
import LayoutAdmin from "../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../style";
import Input from "../../components/Input";
import Button from "../../components/Button";

const AddHotel = () => {
  const [contacts1, setContacts1] = useState(data1);
  const [addHotel, setAddHotel] = useState({
    name: "",
    address: "",
    intro: "",
    roomInfo: "",
    price: "",
  });

  const handleAddHotel = (e) => {
    e.preventDefault();
    const fielName = e.target.getAttribute("name");
    const fielValue = e.target.value;
    const newAddHotel = { ...addHotel };
    newAddHotel[fielName] = fielValue;
    setAddHotel(newAddHotel);
  };

  const handleAddHotelSubmit = (e) => {
    e.preventDefault();
    const newContact1 = {
      id: nanoid(),
      name: addHotel.name,
      address: addHotel.address,
      intro: addHotel.intro,
      roomInfo: addHotel.roomInfo,
      price: addHotel.price,
    };
    const newContacts1 = [...contacts1, newContact1];
    setContacts1(newContacts1);
    alert("1");
  };

  return (
    <LayoutAdmin>
      <div>
        <AdminTitle>Add/Edit Hotel</AdminTitle>
        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
              Name
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name restaurant"
              value={addHotel.name}
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
              Address
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name restaurant"
              value={addHotel.name}
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
              Introduce
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name restaurant"
              value={addHotel.name}
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
              Room information
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name restaurant"
              value={addHotel.name}
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/5 self-center text-end">
            <label className="text-black font-bold">
              Price per day
              <span className="text-red-700"> *</span>
            </label>
          </div>
          <div className="w-3/5 items-center">
            <Input
              type="text"
              placeholder="Name restaurant"
              value={addHotel.name}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="w-4/5 flex ml-4 justify-end">
        <Button color="from-[#961919] to-[#f6646e] font-bold">Cancel</Button>
        <Button color="font-bold mr-0">Add Hotel</Button>
      </div>
    </LayoutAdmin>
  );
};

export default AddHotel;
