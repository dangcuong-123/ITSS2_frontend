// import React, { useState } from "react";
// import Card from "../../components/User/Login/Card";
// import data from "../Restaurant/mock-data.json"
// import { nanoid } from "nanoid";


// const Add = () => {
//     const[contacts, setContacts] = useState(data);
   
//     const [addRes, setAddRes] = useState({
//         name: "",
//         address: "",
//         intro:"",
//         menuIntro:"",
//     });

//     const handleAddRes = (event) =>{
//         event.preventDefault();
//         const fieldName = event.target.getAttribute("name");
//         const fieldValue = event.target.value;
//         const newAddRes = {...addRes};
//         newAddRes[fieldName]= fieldValue;
//         setAddRes(newAddRes);
//     }

//     const handleAddResSubmit = (event) =>{
//         event.preventDefault();
//         const newContact = {
//             id: nanoid(),
//             name: addRes.name,
//             address: addRes.address,
//             intro: addRes.intro,
//             menuIntro: addRes.menuIntro,
//         };
//         const newContacts =[...contacts, newContact];
//         setContacts(newContacts);
//         alert("1");
//     }
    
//     return(      
//         <div>
//             <h1>Add Restaurant</h1>
//             <Card>
//                 <div>
//                     <span>Name * </span>
//                     <input 
//                         type="text" 
//                         placeholder="name restaurant" 
//                         onChange={handleAddRes}
//                         />
//                 </div>
//                 <div>
//                     <span>Address * </span>
//                     <input 
//                         type="text" 
//                         placeholder="address" 
//                         onChange={handleAddRes}
//                         />
//                     <select 
//                         name="Address" 
//                         id="" 
//                         placeholder="Address"
//                         onChange={handleAddRes}>

//                     </select>
//                 </div>
//                 <div>
//                     <span>Introduce * </span>
//                     <input 
//                         type="text" 
//                         placeholder="introduce"
//                         onChange={handleAddRes} />                
//                 </div>
//                 <div>
//                     <span>Menu Introduce * </span>
//                     <input 
//                         type="text" 
//                         placeholder="menu introduce"
//                         onChange={handleAddRes} />
//                 </div>
//                 <div>
//                     <span>Menu List</span>
//                     <button className="bg-gradient-to-r from-[#64B5F6] to-[#2286C3] py-1.5 text-white shadow-lg"> 
//                         Add menu
//                     </button>
//                 </div>
//                 <div>
//                     <button className="bg-gradient-to-r from-[#6E6E6E] to-[#D8D8D8] py-1.5 text-white shadow-lg">Cancel</button>
//                     <br />
//                     <button className="bg-gradient-to-r from-[#64B5F6] to-[#2286C3] py-1.5 text-white shadow-lg"
//                         onClick={handleAddResSubmit}>Add</button>
//                 </div>

//             </Card>
            
//         </div>
//     )
// }

// export default Add;