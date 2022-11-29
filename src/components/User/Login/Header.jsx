import React from "react";

const Header = () => {
  return (
    <div className="sticky w-full z-50 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 flex justify-between items-center">
      <div className="w-4/5">
        <p className="text-white text-xl">Happy Travel</p>
        {/* <img src={'../../assets/logout.png'} /> */}
      </div>
    </div>
  )
}

export default Header