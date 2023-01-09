import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Button from "../../../components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { searchHotel } from "../../../services/HotelServices";
import { searchRestaurant } from "../../../services/RestaurantServices";
import { createPlan } from "../../../services/PlanServices";
import { useTranslation } from "react-i18next";

const DetailPlan = ({ hotel, restaurant }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotelSelect, restaurantSelect } = location.state;
  const [cardHotel, setCardHotel] = useState();
  const [cardRestaurant, setCardRestaurant] = useState();

  useEffect(() => {
    searchHotel(hotelSelect)
      .then((res) => {
        setCardHotel(res.data[0]);
      })
      .catch((err) => {
        setCardHotel([]);
      });
  }, []);

  useEffect(() => {
    searchRestaurant(restaurantSelect)
      .then((res) => {
        setCardRestaurant(res.data[0]);
      })
      .catch((err) => {
        setCardRestaurant([]);
      });
  }, []);

  const listCardPlan = {
    star: "3/5",
  };

  const savePlan = (e) => {
    const data = {
      location_id: cardHotel?.location_id,
      hotel_id: cardHotel?.hotel_id,
      restaurant_id: cardRestaurant?.restaurant_id,
      user_id: 0,
    };
    createPlan(data)
      .then((res) => {
        if (res.status === 200) {
          navigate("/user/saved");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { t } = useTranslation();

  return (
    <LayoutAdmin>
      <AdminTitle>{t("planDetail.title")}</AdminTitle>
      <div className="font-bold text-2xl mt-4">KHÁCH SẠN</div>
      <div className="font-bold text-2xl mt-4 my-2">
        Tên Khách Sạn - {`[${cardHotel?.hotel_name}]`}
      </div>
      <div className="font-bold text-2xl mt-4">
        {t("planDetail.review")} - {`[${listCardPlan.star}]`}
      </div>
      <div className="relative flex">
        <img
          className="inset-0 h-full mt-1 w-2/5 object-cover"
          src={cardHotel?.image_url}
          alt=""
        />
        <div>
          <div className="mx-6 text-blue font-bold text-2xl ">
            {cardHotel?.hotel_fee} - {listCardPlan.time}
          </div>
          <br />
          <div className="mx-6 text-blue font-bold text-2xl ">
            {cardHotel?.hotel_address}
          </div>
          <br />
        </div>
      </div>
      <div className="m-6">{cardHotel?.hotel_description}</div>

      <div className="font-bold text-2xl mt-4">NHÀ HÀNG</div>
      <div className="font-bold text-2xl mt-4 my-2">
        Tên Nhà Hàng - {`[${cardRestaurant?.restaurant_name}]`}
      </div>
      <div className="font-bold text-2xl mt-4">
        {t("planDetail.review")} - {`[${listCardPlan.star}]`}
      </div>
      <div className="relative flex">
        <img
          className="inset-0 h-full mt-1 w-2/5 object-cover"
          src={cardRestaurant?.image_url}
          alt=""
        />
        <div>
          <div className="mx-6 text-blue font-bold text-2xl ">
            {cardRestaurant?.restaurant_fee} -{" "}
            {cardRestaurant?.restaurant_open_time}
          </div>
          <br />
          <div className="mx-6 text-blue font-bold text-2xl ">
            {cardRestaurant?.restaurant_address}
          </div>
          <br />
        </div>
      </div>
      <div className="m-6">{cardRestaurant?.restaurant_description}</div>

      <div className="flex justify-between">
        <Button color="from-[#961919] to-[#f6646e] font-bold ml-0 py-1">
          <Link to="/user/search-plan-restaurant">{t("planDetail.back")}</Link>
        </Button>

        <Button color="font-bold mr-0 py-1" onClick={savePlan}>
          Lưu Kế Hoạch
        </Button>
      </div>
    </LayoutAdmin>
  );
};
export default DetailPlan;
