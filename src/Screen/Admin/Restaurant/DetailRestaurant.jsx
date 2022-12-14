import React from "react";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Button from "../../../components/Button";


const DetailRestaurant = () => {

  const listCardRestaurant = {
    hotel_name: "Highlight",
    hotel_detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam condimentum lacus, vitae bibendum nisl viverra et. Praesent aliquam leo et dui sagittis malesuada. Donec ac sapien eget erat suscipit fermentum ac vel nisl. Sed velit tortor, tristique sit amet ultrices id, rhoncus eget erat. Quisque ligula nibh, consequat eget tempus ut, hendrerit eget ipsum. Curabitur tellus leo, interdum at purus bibendum, vehicula finibus orci. Vivamus ornare pretium dui sed vestibulum. Phasellus neque sapien, suscipit a dolor et, ornare efficitur odio. Phasellus ultricies magna turpis, id tempus urna ornare a. Phasellus leo lorem, dapibus vel tempor in, fringilla nec sem. Aliquam porttitor ac ante sed vulputate.Sed at odio vehicula, malesuada mi eu, aliquet felis. Vivamus eu pellentesque sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vulputate ultricies turpis at cursus. Nunc pellentesque, elit ac aliquam molestie, augue ipsum placerat lacus, eget rutrum nibh ligula sed felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ullamcorper turpis nec sem euismod, sagittis fermentum tellus volutpat. Praesent velit enim, varius eu lacus sit amet, tincidunt rutrum mi. Morbi sed tortor volutpat, fermentum dui non, feugiat nibh. Aliquam tristique a erat ut aliquet. Sed quis arcu ante. Donec fermentum ligula a tortor malesuada malesuada. Duis consequat sapien sed ante tempus, ac aliquam arcu rutrum. Proin bibendum lectus congue tellus efficitur, faucibus rutrum turpis ultrices. Sed eget lectus massa. Aliquam vestibulum dictum tristique.",
    location: "So1, Ta Quang Buu, Hai Ba Trung, Ha Noi",
    cost: "500000 VND",
    time: "1 day 1 night",
    star: "3/5",
    imageUrl:
      "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    cost_menu: "500000 VND",
    menu_detail: " ",
    item1: "50000 vnd",
    item2: "150000 vnd",
    item3: "250000 vnd",
  };


  const handleClick = (e) => {
    e.preventDefault();
    
  }

  return (
    <LayoutAdmin>
      <AdminTitle>Restaurant Detail</AdminTitle>
      <div className="font-bold text-2xl mt-4 my-2">
        Hotel name - {`[${listCardRestaurant.location}]`}
      </div>
      <div className="flex justify-between">
        <img
          className="inset-0 h-full mt-1 w-2/5 object-cover"
          src={listCardRestaurant.imageUrl}
          alt=""
        />
        <div className="mx-6">{listCardRestaurant.hotel_detail}</div>
      </div>

      <div className="font-bold text-2xl mt-4">1. Service Info</div>
      <div className="relative flex">
        <img
          className="inset-0 mt-1 w-2/5 object-cover"
          src={listCardRestaurant.imageUrl}
          alt=""
        />
        <div className="mx-6 text-blue font-bold text-2xl ">
          {listCardRestaurant.cost} - {listCardRestaurant.time}
        </div>
      </div>
      <div className="mb-10">{listCardRestaurant.hotel_detail}</div>
      <div className="font-bold text-2xl mt-4">
          2. Menu
      </div>
      <div className="relative flex">
        <div className="mx-6 text-blue font-bold text-2xl ">
          Item One : {listCardRestaurant.item1} <br />
          Item Two : {listCardRestaurant.item2} <br />
          Item Three : {listCardRestaurant.item3}
        </div>
        <div className="mx-6 text-blue font-bold text-2xl ">
          Average price :{listCardRestaurant.cost_menu}
          <div className="mx-6 text-blue font-bold text-2xl " onClick={handleClick}>
            <u>See details</u>
          </div>
        </div>
        
      </div>
      <div className="flex justify-between">
        <Button color="from-[#961919] to-[#f6646e] font-bold ml-0 py-1">
          Back
        </Button>
        <Button color="font-bold mr-0 py-1">Make Plan</Button>
      </div>

      <div className="font-bold text-2xl mt-4">
        Review - {`[${listCardRestaurant.star}]`}
      </div>
    </LayoutAdmin>
  );
};
export default DetailRestaurant;
