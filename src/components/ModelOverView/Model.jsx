import React from "react";
import droneImage from "../../assets/ar3.webp";
export default function Model() {
  return (
    <div>
      <h2 className="font-bold text-4xl text-center my-10 text-red-700">
        Model OverView
      </h2>
      <div className="flex">
        <div className=" flex-[2] ">
          <img src={droneImage} alt="drone" />
        </div>
        {/*  */}
      </div>
    </div>
  );
}
