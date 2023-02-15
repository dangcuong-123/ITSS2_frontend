import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { getPlanByUserName } from "../../../services/PlanServices";
import { AdminTitle } from "../../../style";
import DeletePlan from "./DeletePlan";

const ListPlan = () => {
  const [listPlan, setListPlan] = useState();
  useEffect(() => {
    getPlanByUserName(sessionStorage.getItem("username"))
      .then((res) => {
        setListPlan(res.data.plans);
      })
      .catch((err) => {
        setListPlan([]);
      });
  }, []);

  return (
    <LayoutAdmin>
      <AdminTitle>Plan Đã Lưu</AdminTitle>
      {listPlan?.map((plan, idx) => {
        return (
          <a
            key={idx}
            href="#"
            className="block jc-between p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex justify-between">
              <div>
                <div className="flex">
                  <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Địa Điểm:
                  </p>
                  <p className="mb-2 ml-4 text-xl tracking-tight text-gray-900 dark:text-white">
                    {plan.location[0].location_name} -{" "}
                    {plan.location[0].location_address}
                  </p>
                </div>
                <div className="flex">
                  <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Tên Khách Sạn:
                  </p>
                  <p className="mb-2 ml-4 text-xl tracking-tight text-gray-900 dark:text-white">
                    {plan.hotel[0].hotel_name} - {plan.hotel[0].hotel_address}
                  </p>
                </div>
                <div className="flex">
                  <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Tên Nhà Hàng:
                  </p>
                  <p className="mb-2 ml-4 text-xl tracking-tight text-gray-900 dark:text-white">
                    {plan.restaurant[0].restaurant_name}
                  </p>
                </div>
                <div className="flex">
                  <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Giờ mở cửa:
                  </p>
                  <p className="mb-2 ml-4 text-xl tracking-tight text-gray-900 dark:text-white">
                    {plan.restaurant[0].restaurant_open_time}
                  </p>
                </div>
                
              </div>
              <div className="overflow-hidden">
                <img
                  className="inset-0 h-60 w-full object-cover"
                  src={plan.location[0].image_url}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
                  <DeletePlan id={plan.plan_id} />
                </div>
          </a>
        );
      })}
    </LayoutAdmin>
  );
};
export default ListPlan;
