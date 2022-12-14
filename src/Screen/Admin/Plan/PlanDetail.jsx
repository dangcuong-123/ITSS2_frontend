import React from "react";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Button from "../../../components/Button";

const DetailPlan = () => {
  const listCardPlan = {
    plan_name: "Cat Ba Trip",
    hotel_name: "Highlight",
    hotel_detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam condimentum lacus, vitae bibendum nisl viverra et. Praesent aliquam leo et dui sagittis malesuada. Donec ac sapien eget erat suscipit fermentum ac vel nisl. Sed velit tortor, tristique sit amet ultrices id, rhoncus eget erat. Quisque ligula nibh, consequat eget tempus ut, hendrerit eget ipsum. Curabitur tellus leo, interdum at purus bibendum, vehicula finibus orci. Vivamus ornare pretium dui sed vestibulum. Phasellus neque sapien, suscipit a dolor et, ornare efficitur odio. Phasellus ultricies magna turpis, id tempus urna ornare a. Phasellus leo lorem, dapibus vel tempor in, fringilla nec sem. Aliquam porttitor ac ante sed vulputate.Sed at odio vehicula, malesuada mi eu, aliquet felis. Vivamus eu pellentesque sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vulputate ultricies turpis at cursus. Nunc pellentesque, elit ac aliquam molestie, augue ipsum placerat lacus, eget rutrum nibh ligula sed felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ullamcorper turpis nec sem euismod, sagittis fermentum tellus volutpat. Praesent velit enim, varius eu lacus sit amet, tincidunt rutrum mi. Morbi sed tortor volutpat, fermentum dui non, feugiat nibh. Aliquam tristique a erat ut aliquet. Sed quis arcu ante. Donec fermentum ligula a tortor malesuada malesuada. Duis consequat sapien sed ante tempus, ac aliquam arcu rutrum. Proin bibendum lectus congue tellus efficitur, faucibus rutrum turpis ultrices. Sed eget lectus massa. Aliquam vestibulum dictum tristique.",
    location: "So1, Ta Quang Buu, Hai Ba Trung, Ha Noi",
    cost: "500000 VND",
    time: "1 day 1 night",
    star: "3/5",
    imageUrl:
      "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    restaurant_name: "Trang Tien",
    location_restaurant: "So9, Ta Quang Buu, Hai Ba Trung, Ha Noi",
    cost_restaurant: "450000 VND",
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <LayoutAdmin>
      <AdminTitle>Plan Detail</AdminTitle>
      <div className="font-bold text-2xl mt-4 my-2">
        Plan name - {`[${listCardPlan.plan_name}]`}
      </div>
      <div className="flex justify-between">
        <img
          className="inset-0 h-full mt-1 w-2/5 object-cover"
          src={listCardPlan.imageUrl}
          alt=""
        />
        <div className="mx-6">{listCardPlan.hotel_detail}</div>
      </div>

      <div className="font-bold text-2xl mt-4 my-2">
        Hotel name - {`[${listCardPlan.location}]`}
      </div>
      <div className="font-bold text-2xl mt-4">
        Review - {`[${listCardPlan.star}]`}
      </div>
      <div className="relative flex">
        <img
          className="inset-0 h-full mt-1 w-2/5 object-cover"
          src={listCardPlan.imageUrl}
          alt=""
        />
        <div>
          <div className="mx-6 text-blue font-bold text-2xl ">
            {listCardPlan.cost} - {listCardPlan.time}
          </div>
          <br />
          <div>{listCardPlan.location}</div>
          <br />
          <div
            className="mx-6 text-blue font-bold text-2xl "
            onClick={handleClick}
          >
            <u>See details</u>
          </div>
        </div>
      </div>
      <div className="mx-6">{listCardPlan.hotel_detail}</div>

      <div className="font-bold text-2xl mt-4">Restaurant</div>
      <div className="font-bold text-2xl mt-4">
        Review - {`[${listCardPlan.star}]`}
      </div>
      <div className="relative flex">
        <img
          className="inset-0 mt-1 w-2/5 object-cover"
          src={listCardPlan.imageUrl}
          alt=""
        />
        <div>
          <div className="mx-6 text-blue font-bold text-2xl ">
            {listCardPlan.cost} - {listCardPlan.time}
          </div>
          <br />
          <div>{listCardPlan.location_restaurant}</div>
          <br />
          <div
            className="mx-6 text-blue font-bold text-2xl "
            onClick={handleClick}
          >
            <u>See details</u>
          </div>
        </div>
      </div>
      <div className="mb-10">{listCardPlan.hotel_detail}</div>

      <div className="flex justify-between">
        <Button color="from-[#961919] to-[#f6646e] font-bold ml-0 py-1">
          Back
        </Button>
        <Button color="font-bold mr-0 py-1">Save Plan</Button>
      </div>
    </LayoutAdmin>
  );
};
export default DetailPlan;
