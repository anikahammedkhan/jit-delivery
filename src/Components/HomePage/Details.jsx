import React from "react";
import icon1 from "../../Assets/Icons/01.png";
import icon2 from "../../Assets/Icons/02.png";
import icon3 from "../../Assets/Icons/03.png";
import icon4 from "../../Assets/Icons/04.png";
import icon5 from "../../Assets/Icons/05.png";
import icon6 from "../../Assets/Icons/06.png";
import icon7 from "../../Assets/Icons/07.png";
import imageBanner from "../../Assets/Others/included-services-banner.jpg";
import { MdDoubleArrow } from "react-icons/md";

const Details = () => {
  return (
    <div className="mt-28 max-w-[1440px] mx-auto relative top-[850px] md:top-[-50px]">
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-[36px] font-bold">Welcome to</h1>
        <p className="text-[20px] w-3/4 mx-auto my-2">
          <span className="font-bold text-orange-600">JIT DELIVER</span> is
          providing trustworthy and timely packing and goods moving services. We
          fulfill our commitment to quality which allows us to supply unmatched
          home moving services to all or any over Bangladesh.
          <span className="font-bold text-orange-600"> JIT DELIVER</span> is
          among Bangladesh’s leading organizations providing trustworthy and
          timely packing and moving services. We are documented best within the
          industry as top and efficient packers and movers in the Dhaka division
          and everyone over for shifting and relocation services, warehousing
          services, industrial relocation, and office shifting services. Packing
          and moving is always a troublesome task we’d like to see at how costly
          household goods are often kept safe. We’ve built up a reputation over
          the years that have inspired our customers to return to us time and
          time again.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-center font-bold text-[36px]">Our Competencies</h1>
      </div>
      <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 gap-4 px-10 mt-10">
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon1} alt="Shoes" className="w-[60px]" />
          <h2 className="text-center font-bold text-[16px]">
            Well Experienced Workforce
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon2} alt="Shoes" className="w-[60px]" />
          <h2 className="text-center font-bold text-[16px]">
            Well Equipped Infrastructure
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon3} alt="Shoes" className="w-[60px]" />
          <h2 className="text-center font-bold text-[16px]">
            Economical Pricing
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon4} alt="Shoes" className="w-[60px]" />
          <h2 className="text-center font-bold text-[16px]">
            On-Time Delivery
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon5} alt="Shoes" className="w-[60px]" />
          <h2 className="text-center font-bold text-[16px]">
            Safety Guaranteed
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon6} alt="Shoes" className="w-[60px]" />
          <h2 className="text-center font-bold text-[16px]">
            Professional Service
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon7} alt="Shoes" className="w-[60px]" />
          <h2 className="text-center font-bold text-[16px]">
            Customer Satisfaction
          </h2>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-center font-bold text-[36px]">
          JIT Deliver Included The Services
        </h1>
        <div className="flex lg:flex-row flex-col-reverse w-full mt-10 justify-center items-center px-10">
          <div
            className="lg:w-1/2 p-10"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <p className="text-[20px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Transport services all over Bangladesh.
            </p>
            <p className="text-[20px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Relocation of home and household Items.
            </p>
            <p className="text-[20px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Local shifting for household goods, appliances, and furniture.
            </p>
            <p className="text-[20px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Office relocation services all over Bangladesh
            </p>
            <p className="text-[20px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Warehouse operation support services in the Dhaka division
            </p>
            <p className="text-[20px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Loading and unloading services.
            </p>
          </div>
          <div
            className="lg:w-1/2"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <img src={imageBanner} alt="" className="rounded-[16px]" />
          </div>
        </div>
      </div>
      <div className="mt-10 px-5">
        <h1 className="text-center font-bold text-[36px]">
          AFFORDABLE SERVICES OF JIT DELIVER
        </h1>
        <p className="text-[16px] mx-auto my-2 text-center">
          We are packaging your goods in high-quality packaging materials and
          keeping them safe and secure. We are packaging & shifting in service
          in the Dhaka division and all over Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default Details;
