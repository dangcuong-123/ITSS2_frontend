import React from "react";
import { useState } from "react";
import Card from "../../components/User/Login/Card";
import data1 from "../Hotel/mock-data.json"
import { nanoid } from "nanoid";

const AddHotel = () => {

    const [contacts1, setContacts1] = useState(data1);
    const[addHotel, setAddHotel] = useState({
        name: "",
        address: "",
        intro:"",
        roomInfo:"",
        price:"",
    });

    const handleAddHotel = (e) => {
        e.preventDefault();
        const fielName = e.target.getAttribute("name");
        const fielValue = e.target.value;
        const newAddHotel = {...addHotel};
        newAddHotel[fielName]= fielValue;
        setAddHotel(newAddHotel);
    }

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
        alert("1")
    }



    return(
        <div>
            <h1>Add Hotel</h1>
            <Card>
                <div>
                    <span>Name * </span>
                    <input 
                        type="text" 
                        placeholder="name restaurant" 
                        onChange={handleAddHotel}
                        />
                </div>
                <div>
                    <span>Address * </span>
                    <input 
                        type="text" 
                        placeholder="address" 
                        onChange={handleAddHotel}
                        />
                    <select 
                        name="Address" 
                        id="" 
                        placeholder=""
                        onChange={handleAddHotel}>

                    </select>
                </div>
                <div>
                    <span>Introduce * </span>
                    <input 
                        type="text" 
                        placeholder="introduce"
                        onChange={handleAddHotel} />                
                </div>
                <div>
                    <span>Room Info * </span>
                    <input 
                        type="text" 
                        placeholder="room info"
                        onChange={handleAddHotel} />
                </div>

                <div>
                    <span>Price * </span>
                    <input 
                        type="text" 
                        placeholder="price"
                        onChange={handleAddHotel} />
                </div>
               
                <div>
                    <button className="bg-gradient-to-r from-[#6E6E6E] to-[#D8D8D8] py-1.5 text-white shadow-lg"
                            // onClick={handleCancelClick}
                            >
                            Cancel</button>
                   
                    <button className="bg-gradient-to-r from-[#64B5F6] to-[#2286C3] py-1.5 text-white shadow-lg"
                        onClick={handleAddHotelSubmit}>Add Restaurant</button>
                    <br/>
                    
                </div>

            </Card>
            
        </div>
    )
}

export default AddHotel;