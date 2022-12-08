import React from "react";
import { useState } from "react";
import LayoutAdmin from "../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../style";
import Input from "../../components/Input";
import Button from "../../components/Button";

const DetailHotel = () => {
  const listCardHome = {
    hotel_name: "Highlight",
    hotel_detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam condimentum lacus, vitae bibendum nisl viverra et. Praesent aliquam leo et dui sagittis malesuada. Donec ac sapien eget erat suscipit fermentum ac vel nisl. Sed velit tortor, tristique sit amet ultrices id, rhoncus eget erat. Quisque ligula nibh, consequat eget tempus ut, hendrerit eget ipsum. Curabitur tellus leo, interdum at purus bibendum, vehicula finibus orci. Vivamus ornare pretium dui sed vestibulum. Phasellus neque sapien, suscipit a dolor et, ornare efficitur odio. Phasellus ultricies magna turpis, id tempus urna ornare a. Phasellus leo lorem, dapibus vel tempor in, fringilla nec sem. Aliquam porttitor ac ante sed vulputate.Sed at odio vehicula, malesuada mi eu, aliquet felis. Vivamus eu pellentesque sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vulputate ultricies turpis at cursus. Nunc pellentesque, elit ac aliquam molestie, augue ipsum placerat lacus, eget rutrum nibh ligula sed felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ullamcorper turpis nec sem euismod, sagittis fermentum tellus volutpat. Praesent velit enim, varius eu lacus sit amet, tincidunt rutrum mi. Morbi sed tortor volutpat, fermentum dui non, feugiat nibh. Aliquam tristique a erat ut aliquet. Sed quis arcu ante. Donec fermentum ligula a tortor malesuada malesuada. Duis consequat sapien sed ante tempus, ac aliquam arcu rutrum. Proin bibendum lectus congue tellus efficitur, faucibus rutrum turpis ultrices. Sed eget lectus massa. Aliquam vestibulum dictum tristique.",
    location: "NameCard",
    cost: "500000 VND",
    time: "1 day 1 night",
    imageUrl:
      "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  };

  return (
    <LayoutAdmin>
      <AdminTitle>Hotel Detail</AdminTitle>
      <div className="font-bold text-2xl mt-4">Hotel name</div>
      <div className="relative pb-48 flex justify-between">
        <div>
          <img
            className="absolute inset-0 h-full w-2/5 object-cover"
            src={listCardHome.imageUrl}
            alt=""
          />
        </div>
        <div>{listCardHome.hotel_detail}</div>
      </div>
    </LayoutAdmin>
  );
};
export default DetailHotel;
