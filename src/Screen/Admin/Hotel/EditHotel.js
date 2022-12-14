import { useState, React } from "react";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import data1 from "./mock-data.json";
import { AdminTitle } from "../../../style";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const EditHotel = () => {
  const [editContactId1, setEditContactId1] = useState(null);
  const [contacts1, setContacts1] = useState(data1);

  const [editHotel, setEditHotel] = useState({
    name: "",
    address: "",
    intro: "",
    roomInfo: "",
    price: "",
  });

  const handleEditHotel = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newEditHotel1 = { ...editHotel };
    newEditHotel1[fieldName] = fieldValue;
    setEditHotel(newEditHotel1);
  };

  const handleEditHotelSubmit = (e) => {
    e.preventDefault();
    const editedContact1 = {
      id: editContactId1,
      name: editHotel.name,
      address: editHotel.address,
      intro: editHotel.intro,
      roomInfo: editHotel.roomInfo,
      price: editHotel.price,
    };

    const newContacts1 = [...contacts1];
    const index1 = contacts1.findIndex(
      (contact1) => contact1.id === editContactId1
    );
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
      price: contact1.price,
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

  const [editName, setEditName] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editIntro, setEditIntro] = useState("");
  const [editRoomInfo, setEditRoomInfo] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const handleEditClick = (e) => {
    e.preventDefault();
    const editHot = {editName,editAddress,editIntro,editRoomInfo,editPrice}
    console.log(editHot);
    // fetch("http://35.78.85.107:8080/hotel/edit_hotel",{
    //   method:"PUT",
    //         headers:{"Content-Type" : "application/json"},
    //         body:JSON.stringify(editHot)
    //     }).then(()=>{
    //         console.log("Edit hotel complete");
    //         alert("Edit hotel complete");
    // })
  }

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
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
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
              value={editAddress}
              onChange={(e) => setEditAddress(e.target.value)}
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
              value={editIntro}
              onChange={(e) => setEditIntro(e.target.value)}
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
              value={editRoomInfo}
              onChange={(e) => setEditRoomInfo(e.target.value)}
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
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="w-4/5 flex ml-4" style={{ justifyContent: "end" }}>
        <Button color="from-[#961919] to-[#f6646e] font-bold">
          <Link to="/list-hotel">Cancel</Link>
        </Button>
        <Button color="font-bold mr-0" onClick={handleEditClick}>Edit Hotel</Button>
      </div>
    </LayoutAdmin>
  );
};

export default EditHotel;
