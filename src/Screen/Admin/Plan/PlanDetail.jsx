import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import Button from "../../../components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { searchHotel } from "../../../services/HotelServices";
import { searchRestaurant } from "../../../services/RestaurantServices";
import { createPlan } from "../../../services/PlanServices";
import { useTranslation } from "react-i18next";
import { Alert, Snackbar } from "@mui/material";
import { getRecommendTransport } from "../../../services/PlanServices";
import {
  getLocationById,
  TAG_OPTIONS,
  TRANSPORT_OPTIONS,
} from "../../../services/PlaceServices";

const DetailPlan = ({ hotel, restaurant }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotelSelect, restaurantSelect } = location.state;
  const [cardHotel, setCardHotel] = useState();
  const [cardRestaurant, setCardRestaurant] = useState();
  const [transports, setTransports] = useState([]);
  const [tags, setTags] = useState([]);
  // Notification
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchHotel(hotelSelect).then((res) => {
        return res.data[0];
      });
      const location_id = data.location_id;
      setCardHotel(data);
      const place = await getLocationById(location_id).then((res) => {
        return res.data;
      });
      const location_name = place.location_name;
      const tags = place.tags;
      const transports = await getRecommendTransport(location_name).then(
        (res) => {
          return res.data.transport_list;
        }
      );
      setTransports(transports);
      setTags(tags);
    };

    fetchData().catch(console.error);
    // const location_id = cardHotel?.location_id;
    // getLocationById(location_id)
    //   .then((res) => {
    //     // console.log(res.data);
    //     setPlace(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
    if (sessionStorage.getItem("username")) {
      const data = {
        location_id: cardHotel?.location_id,
        hotel_id: cardHotel?.hotel_id,
        restaurant_id: cardRestaurant?.restaurant_id,
        user_id: 0,
      };
      createPlan(data)
        .then((res) => {
          if (res.status === 200) {
            navigate("/saved");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setOpen(true);
      setErrorMessage("Bạn chưa đăng nhập");
    }
  };
  const { t } = useTranslation();

  return (
    <LayoutAdmin>
      <AdminTitle>{t("planDetail.title")}</AdminTitle>
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={() => setOpen(false)} severity="error">
            {errorMessage}
          </Alert>
        </Snackbar>
      )}

      <div className="font-bold text-2xl mt-4">PHÂN LOẠI ĐỊA DANH</div>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{TAG_OPTIONS.filter((x) => x.key === tag)[0].value}</li>
        ))}
      </ul>

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

      <div className="font-bold text-2xl mt-4">PHƯƠNG TIỆN DI CHUYỂN</div>
      <ul>
        {transports.map((transport) => (
          <li key={transport}>
            {TRANSPORT_OPTIONS.filter((x) => x.key === transport)[0].value}
          </li>
        ))}
      </ul>

      <div className="flex justify-between">
        <Button color="from-[#961919] to-[#f6646e] font-bold ml-0 py-1">
          <Link to="/search-plan">{t("planDetail.back")}</Link>
        </Button>

        <Button color="font-bold mr-0 py-1" onClick={savePlan}>
          Lưu Kế Hoạch
        </Button>
      </div>
    </LayoutAdmin>
  );
};
export default DetailPlan;
