import React from "react";
import Button from "../Button";

const Header = () => {
  return (
    <div className="fixed w-full z-50 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 flex justify-between items-center">
      <div className="w-4/5">
        <p className="text-black font-bold text-xl ml-5">Happy Travel</p>
      </div>

      {/* <div class="flex items-center space-x-4 w-1/6">
        <img
          class="w-10 h-10 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
          alt=""
        />
        <div class="font-medium dark:text-white">
          <div className="font-bold">Jese Leos</div>
          <div class="text-sm text-black dark:text-gray-400">
            Joined in August 2014
          </div>
        </div>
      </div> */}
      <div className="w-4/5 flex mr-4 justify-end">
        <Button color="font-bold mr-0 px-2 py-2">Login</Button>
      </div>
    </div>
  );
};

export default Header;
