import React from "react";
import "../../style/search.css";
import Checkbox from '@mui/material/Checkbox';

const CardRestaurantTick = () => {
    const listCardHome = [
        {
            tag: "Highlight",
            name: "Restaurant",
            cost: "45,00",
            vote: "34",
            imageUrl:
                "https://image-tc.galaxy.tf/wijpeg-bjktly0b6ohnhdedjegyau3mf/wph-windsorsuite-restaurant-6-orig_wide.jpg?crop=0%2C52%2C1000%2C563",
        },
        {
            tag: "Highlight",
            name: "Restaurant",
            cost: "45,00",
            vote: "34",
            imageUrl:
                "https://image-tc.galaxy.tf/wijpeg-bjktly0b6ohnhdedjegyau3mf/wph-windsorsuite-restaurant-6-orig_wide.jpg?crop=0%2C52%2C1000%2C563",
        },
        {
            tag: "Highlight",
            name: "Restaurant",
            cost: "45,00",
            vote: "34",
            imageUrl:
                "https://image-tc.galaxy.tf/wijpeg-bjktly0b6ohnhdedjegyau3mf/wph-windsorsuite-restaurant-6-orig_wide.jpg?crop=0%2C52%2C1000%2C563",
        },
        {
            tag: "Highlight",
            name: "Restaurant",
            cost: "45,00",
            vote: "34",
            imageUrl:
                "https://image-tc.galaxy.tf/wijpeg-bjktly0b6ohnhdedjegyau3mf/wph-windsorsuite-restaurant-6-orig_wide.jpg?crop=0%2C52%2C1000%2C563",
        },
        {
            tag: "Highlight",
            name: "Restaurant",
            cost: "45,00",
            vote: "34",
            imageUrl:
                "https://image-tc.galaxy.tf/wijpeg-bjktly0b6ohnhdedjegyau3mf/wph-windsorsuite-restaurant-6-orig_wide.jpg?crop=0%2C52%2C1000%2C563",
        },
        {
            tag: "Highlight",
            name: "Restaurant",
            cost: "45,00",
            vote: "34",
            imageUrl:
                "https://image-tc.galaxy.tf/wijpeg-bjktly0b6ohnhdedjegyau3mf/wph-windsorsuite-restaurant-6-orig_wide.jpg?crop=0%2C52%2C1000%2C563",
        },
    ];
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
                                    <div>
                                        <Checkbox {...label} />
                                    </div>                                       
                                    <div className="p-4">
                                        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                                            {card.tag}
                                        </span>
                                        <h2 className="mt-2 mb-2  font-bold">{card.name}</h2>

                                        <div className="mt-3 flex items-center">
                                            <span className="font-bold text-xl">{card.cost}</span>
                                            &nbsp;
                                            <span className="text-sm font-semibold">€</span>
                                        </div>
                                    </div>

                                    <div className="p-4 flex items-center text-sm text-gray-600">
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 fill-current text-yellow-500"
                                        >
                                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                        </svg>
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 fill-current text-yellow-500"
                                        >
                                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                        </svg>
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 fill-current text-yellow-500"
                                        >
                                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                        </svg>
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 fill-current text-yellow-500"
                                        >
                                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                        </svg>
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 fill-current text-gray-400"
                                        >
                                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                        </svg>
                                        <span className="ml-2">{card.vote} vote</span>
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

export default CardRestaurantTick;
