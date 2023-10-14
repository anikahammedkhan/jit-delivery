import React, { useContext } from "react";
import img001 from "../../Assets/Others/tracking.jpg";
import { AuthContext } from "../../Context/ContextData";

const Tracking = () => {
  const { language } = useContext(AuthContext);
  return (
    <div>
      {language === "en" ? (
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-4xl font-bold my-10 px-10">Track an Order</h1>
          <div className="card xl:card-side bg-base-100 shadow-xl m-10">
            <figure className="xl:w-1/2">
              <img src={img001} alt="Album" className="w-full h-full" />
            </figure>
            <div className="flex flex-col p-10 xl:w-1/2 justify-center">
              <h2 className="card-title font-bold">
                Enter Your Tracking Number
              </h2>
              <input type="number" />
              <button className="btn bg-[#013189] mt-5 text-white hover:bg-[#01215c]">
                Track Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-4xl font-bold my-10 px-10">
            অর্ডার ট্র্যাক করুন
          </h1>
          <div className="card xl:card-side bg-base-100 shadow-xl m-10">
            <figure className="xl:w-1/2">
              <img src={img001} alt="Album" className="w-full h-full" />
            </figure>
            <div className="flex flex-col p-10 xl:w-1/2 justify-center">
              <h2 className="card-title font-bold">
                আপনার ট্র্যাকিং নাম্বার পূরণ করুন
              </h2>
              <input type="number" />
              <button className="btn bg-[#013189] mt-5 text-white hover:bg-[#01215c]">
                ট্র্যাক করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracking;
