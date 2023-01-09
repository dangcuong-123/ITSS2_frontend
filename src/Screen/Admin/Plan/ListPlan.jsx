import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { showPlan } from "../../../services/PlanServices";
import { AdminTitle } from "../../../style";

const ListPlan = () => {
  const [listPlan, setListPlan] = useState();
  useEffect(() => {
    showPlan()
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
            className="block  p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tên Khách Sạn: {plan.hotel_name}
            </h3>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tên Nhà Hàng: {plan.restaurant_name}
            </h3>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Địa Điểm: {plan.location_name}
            </h3>
          </a>
        );
      })}
    </LayoutAdmin>
  );
};
export default ListPlan;
