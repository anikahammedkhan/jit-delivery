import React from "react";
import icon1 from "../../Assets/Icons/04.png";
import icon2 from "../../Assets/Icons/03.png";
import icon3 from "../../Assets/Icons/08.png";
import icon4 from "../../Assets/Icons/09.png";
import icon5 from "../../Assets/Icons/10.png";
import icon6 from "../../Assets/Icons/11.png";
import missionImg from "../../Assets/BannerImg/mission&vision.jpg";
import { MdDoubleArrow } from "react-icons/md";

const WhyChoseUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto relative xl:top-[0px] lg:top-[100px] md:top-[0px] top-[550px]">
      <h1 className="text-center text-[36px] font-semibold mb-10">
        Why Choose Us
      </h1>
      <div className="grid md:grid-cols-3 justify-between mx-auto gap-4 max-w-[1024px] px-2">
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon1} alt="Shoes" className="lg:w-[100px] w-[70px]" />
          <div className="card-body">
            <h2 className="text-center font-bold text-[20px]">
              Delivery in time
            </h2>
            <p className="text-center font-semibold">
              We at <span className=" text-orange-600">JIT DELIVER</span> are
              expecting to deliver goods that are safe and secure. Quick and
              fast delivery is the most vital feature of our company.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon2} alt="Shoes" className="lg:w-[100px] w-[70px]" />
          <div className="card-body">
            <h2 className="text-center font-bold text-[20px]">
              Affordable prices
            </h2>
            <p className="text-center font-semibold">
              We provide the simplest packing and moving services at reasonable
              prices. Our customers are our precious belongings; we never want
              their wallets to be harsh.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon3} alt="Shoes" className="lg:w-[100px] w-[70px]" />
          <div className="card-body">
            <h2 className="text-center font-bold text-[20px]">
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
        <h1 className="text-center text-[36px] font-semibold mt-10">
          MISSION & VISION
        </h1>
        <div
          className="card lg:card-side bg-base-100 shadow-xl mx-10"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <figure>
            <img
              className="image-fluid w-full h-full"
              src={missionImg}
              alt="Mission And Vision"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Our vision of becoming unparalleled in leading the transportation
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
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Innovation and Technology
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Diversification
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Quality Service
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Employee Training and Development
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Partnerships and Collaborations
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Sustainability
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Market Research
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Customer-Centric Approach
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Branding and Marketing
            </p>
            <p className="text-[16px] font-semibold">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Global Expansion
            </p>
          </div>
        </div>
      </div>
      <div className="px-10 mt-10 xl:mb-[0px] lg:mb-[150px] md:mb-[50px] mb-[580px]">
        <h1 className="text-center text-[36px] font-semibold my-5">
          STRENGTH & VALUES
        </h1>
        <p className="text-[20px] text-center">
          Our strength is ensuring quality service and on-time delivery to
          valuable customers and building long-term business relationships to
          own the business once again and again along with ensuring the right
          commitment, Transparency, safety, and security of the customer.
        </p>
        <h1 className="text-center text-[36px] font-semibold my-5">
          OUR WORK PROCESS
        </h1>
        <div className="grid grid-cols-7 justify-items-center items-center mb-10 max-w-[700px] mx-auto">
          <div
            className="flex flex-col justify-center items-center gap-2"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <img src={icon4} alt="Shoes" className="w-[35px]" />
            <h2 className="text-center font-bold">
              Book Your <br /> Service
            </h2>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <MdDoubleArrow className="md:text-[40px] text-[20px] inline mr-2 text-[#002366]" />
          </div>
          <div
            className="flex flex-col justify-center items-center gap-2"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <img src={icon5} alt="Shoes" className="w-[35px]" />
            <h2 className="text-center font-bold">
              Pack Your <br /> Goods
            </h2>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <MdDoubleArrow className="md:text-[40px] text-[20px] inline mr-2 text-[#002366]" />
          </div>
          <div
            className="flex flex-col justify-center items-center gap-2"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <img src={icon6} alt="Shoes" className="w-[35px]" />
            <h2 className="text-center font-bold text-md">Safe Loading</h2>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <MdDoubleArrow className="md:text-[40px] text-[20px] inline mr-2 text-[#002366]" />
          </div>
          <div
            className="flex flex-col justify-center items-center gap-2"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <img src={icon1} alt="Shoes" className="w-[50px]" />
            <h2 className="text-center font-bold text-md">
              On Time <br /> Delivery
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
