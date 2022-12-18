import React from "react";
import "../../style/search.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import PopupUpdateMenu from "../Popup/PopupUpdateMenu";

const CardHotel = ({ data }) => {

  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {data?.map((card, ids) => {
            return (
              <div key={ids} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
                <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="relative pb-48 overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={card.image_url}
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      {card.hotel_name}
                    </span>
                    <div className="flex justify-between">
                      <h2 className="mt-2 mb-2  font-bold">
                        {card.hotel_address}
                      </h2>
                      <div className="mt-3 flex items-center">
                        <span className="font-bold text-xl">
                          {card.hotel_fee} VND
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button color="from-[#7CFC00] to-[#008000] font-bold mx-1 px-1 py-1">
                      <Link to="/admin/detail-hotel">Detail</Link>
                    </Button>
                    <PopupUpdateMenu nameBtn="Edit" styleBtn="mx-1 px-1 py-1" />
                    <Button color="from-[#f6646e] to-[#961919] mx-1 font-bold px-1 py-1">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardHotel;
