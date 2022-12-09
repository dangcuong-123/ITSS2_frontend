import React from "react";
import Button from "../Button";
import accountStore from "../../store/AccountInfoStore";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="fixed w-full z-50 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 flex justify-between items-center">
      <div className="w-4/5">
        <p className="text-black font-bold text-xl ml-5">Happy Travel</p>
      </div>

      {location.pathname !== "/login" &&
        (accountStore?.isAuthenticated ? (
          <>
            <div className="flex items-center space-x-4 w-1/6">
              <img
                className="w-10 h-10 rounded-full"
                src={accountStore?.AccountInfo.imageUrl}
              />
              <div class="font-medium dark:text-white">
                <div className="font-bold">
                  {accountStore?.AccountInfo.accountname}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-4/5 flex mr-4 justify-end">
              <Button color="font-bold mr-0 px-2 py-2">Login</Button>
            </div>
          </>
        ))}
    </div>
  );
};

export default Header;
