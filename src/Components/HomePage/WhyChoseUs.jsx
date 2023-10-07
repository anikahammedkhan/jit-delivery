import React from "react";
import icon1 from "../../Assets/Icons/04.png";
import icon2 from "../../Assets/Icons/03.png";
import icon3 from "../../Assets/Icons/08.png";
import icon4 from "../../Assets/Icons/09.png";
import icon5 from "../../Assets/Icons/10.png";
import icon6 from "../../Assets/Icons/11.png";
import missionImg from "../../Assets/Others/missionAndVision.jpg";
import { MdDoubleArrow } from "react-icons/md";

const WhyChoseUs = () => {
  return (
    <div className="my-20 max-w-[1440px] mx-auto">
      <h1 className="text-center text-4xl font-semibold my-10">
        Why Choose Us
      </h1>
      <div className="grid md:grid-cols-3 justify-between mx-auto gap-4 max-w-[1024px] px-2">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={icon1} alt="Shoes" className="w-[100px]" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">Delivery in time</h2>
            <p className="text-center font-semibold">
              We at <span className=" text-orange-600">JIT DELIVER</span> are
              expecting to deliver goods that are safe and secure. Quick and
              fast delivery is the most vital feature of our company.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={icon2} alt="Shoes" className="w-[100px]" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">Affordable prices</h2>
            <p className="text-center font-semibold">
              We provide the simplest packing and moving services at reasonable
              prices. Our customers are our precious belongings; we never want
              their wallets to be harsh.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={icon3} alt="Shoes" className="w-[100px]" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">
              24/7 Support service
            </h2>
            <p className="text-center font-semibold">
              We have an impressive team of customer relations executives who
              assist you with our quality services and help you to resolve all
              your packing and moving queries.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl font-semibold my-10">
          MISSION VISION
        </h1>
        <div className="card lg:card-side bg-base-100 shadow-xl mx-4">
          <figure>
            <img
              className="image-fluid w-full h-full"
              src={missionImg}
              alt="Mission And Vision"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Your vision of becoming unparalleled in leading the transportation
              and relocation industry, as well as expanding into other sectors,
              is a bold and ambitious goal. It's evident that your company has
              made significant progress over the years, growing stronger and
              solidifying your position as a dominant provider of packing and
              moving services
            </h2>
            <p className="font-semibold m-0">
              To continue moving toward your vision, consider these strategies:
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Innovation and Technology
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Diversification
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Quality Service
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Employee Training and Development
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Partnerships and Collaborations
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Sustainability
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Market Research
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Customer-Centric Approach
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Branding and Marketing
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Global Expansion
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl font-semibold my-5">
          STRENGTH & VALUES
        </h1>
        <p className="text-[26px] font-semibold text-center">
          Our strength is ensuring quality service and on-time delivery to
          valuable customers and building long-term business relationships to
          own the business once again and again along with ensuring the right
          commitment, Transparency, safety, and security of the customer.
        </p>
        <h1 className="text-center text-4xl font-semibold my-5">
          OUR WORK PROCESS
        </h1>
        <div className="md:grid md:grid-cols-7 justify-items-center items-center">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={icon4} alt="Shoes" className="w-[50px]" />
            </figure>
            <div className="card-body">
              <h2 className="text-center font-bold text-md">
                Book Your <br /> Service
              </h2>
            </div>
          </div>
          <div>
            <MdDoubleArrow className="text-[40px] inline mr-2 text-green-600" />
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={icon5} alt="Shoes" className="w-[50px]" />
            </figure>
            <div className="card-body">
              <h2 className="text-center font-bold text-md">
                Pack Your <br /> Goods
              </h2>
            </div>
          </div>
          <div>
            <MdDoubleArrow className="text-[40px] inline mr-2 text-green-600" />
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={icon6} alt="Shoes" className="w-[50px]" />
            </figure>
            <div className="card-body">
              <h2 className="text-center font-bold text-md">Safe Loading</h2>
            </div>
          </div>
          <div>
            <MdDoubleArrow className="text-[40px] inline mr-2 text-green-600" />
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={icon1} alt="Shoes" className="w-[50px]" />
            </figure>
            <div className="card-body">
              <h2 className="text-center font-bold text-md">
                On Time <br /> Delivery
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;