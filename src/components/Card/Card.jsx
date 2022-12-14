import React from "react";
import "../../style/search.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import PopupUpdateMenu from "../Popup/PopupUpdateMenu";

const Card = ({ NameCard }) => {
  const listCardHome = [
    {
      tag: "Highlight",
      name: NameCard,
      cost: "500000 VND",
      imageUrl:
        "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      tag: "Highlight",
      name: NameCard,
      cost: "500000 VND",
      imageUrl:
        "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      tag: "Highlight",
      name: NameCard,
      cost: "500000 VND",
      imageUrl:
        "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      tag: "Highlight",
      name: NameCard,
      cost: "500000 VND",
      imageUrl:
        "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      tag: "Highlight",
      name: NameCard,
      cost: "500000 VND",
      imageUrl:
        "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      tag: "Highlight",
      name: NameCard,
      cost: "500000 VND",
      imageUrl:
        "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
  ];

  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {listCardHome.map((card, ids) => {
            return (
              <div key={ids} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
                <a className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="relative pb-48 overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={card.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      {card.tag}
                    </span>
                    <div className="flex justify-between">
                      <h2 className="mt-2 mb-2  font-bold">{card.name}</h2>
                      <div className="mt-3 flex items-center">
                        <span className="font-bold text-xl">{card.cost}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button color="from-[#7CFC00] to-[#008000] font-bold mx-1 px-1 py-1">
                      {NameCard === "Hotel" && (
                        <Link to="/admin/detail-hotel">Detail</Link>
                      )}
                      {NameCard === "Restaurant" && (
                        <Link to="/admin/detail-restaurant">Detail</Link>
                      )}
                    </Button>
                    <PopupUpdateMenu nameBtn="Edit" styleBtn="mx-1 px-1 py-1"/>
                    <Button color="from-[#f6646e] to-[#961919] mx-1 font-bold px-1 py-1">
                      Delete
                    </Button>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
