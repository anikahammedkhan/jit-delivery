import React from "react";
import img001 from "../../Assets/Others/track-order.jpg";

const Tracking = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-4xl font-bold my-10">Track an Order</h1>
      <div className="card xl:card-side bg-base-100 shadow-xl m-10">
        <figure className="xl:w-1/2">
          <img src={img001} alt="Album" className="w-full h-full" />
        </figure>
        <div className="flex flex-col p-10 xl:w-1/2">
          <h2 className="card-title font-bold">Enter Your Tracking Number</h2>
          <input type="number" />
          <button className="btn bg-[#013189] mt-5 text-white hover:bg-[#01215c]">
            Track Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
