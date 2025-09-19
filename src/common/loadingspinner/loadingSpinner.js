import React from "react";
import logo from "./Logo.svg";
import "./spinner.css";

const LoadingSpinner = () => {
  // const arry = [1, 2, 3, 4, 5];

  return (
    // <div className="loading-container">
    //   {arry.map((j, i) => (
    //     <span
    //     id="span"
    //       className="loading-dot"
    //       style={{
    //         animationDelay: `${i * 100}ms`,
    //         transform: `translateX(${i * 105}%)`
    //       }}
    //     ></span>
    //   ))}
    // </div>

    <div className="relative w-10 h-10">
      <div className="absolute inset-0 animate-spin-smooth">
        <div
          className="absolute inset-0 border-t-4 border-[#0B83A5] rounded-full"
          style={{ clipPath: "inset(0 65% 65% 0)" }}
        ></div>

        <div
          className="absolute inset-0 border-r-4  border-customOrange rounded-full"
          style={{ clipPath: "inset(0 0 65% 65%)" }}
        ></div>

        <div
          className="absolute inset-0 border-b-4  border-[#0B83A5] rounded-full"
          style={{ clipPath: "inset(65% 0 0 65%)" }}
        ></div>

        <div
          className="absolute inset-0 border-l-4  border-customOrange rounded-full"
          style={{ clipPath: "inset(65% 65% 0 0)" }}
        ></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg  font-bold text-gray-700">
          <img src={logo} />
        </span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
