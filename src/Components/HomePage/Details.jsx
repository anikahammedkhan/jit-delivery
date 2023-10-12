import React from "react";
import icon1 from "../../Assets/Icons/01.png";
import icon2 from "../../Assets/Icons/02.png";
import icon3 from "../../Assets/Icons/03.png";
import icon4 from "../../Assets/Icons/04.png";
import icon5 from "../../Assets/Icons/05.png";
import icon6 from "../../Assets/Icons/06.png";
import icon7 from "../../Assets/Icons/07.png";
import imageBanner from "../../Assets/BannerImg/affordable-section.jpg";
import { MdDoubleArrow } from "react-icons/md";

const Details = () => {
  return (
    <div className="mt-28 max-w-[1440px] mx-auto relative top-[500px] md:top-[-50px] lg:top-[50px] xl:top-[-50px]">
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
          home moving services to all over Bangladesh.
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
      <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 gap-4 md:px-10 px-5 mt-10">
        <div
          className="flex flex-col justify-center items-center gap-2 border-2 p-3 rounded-md shadow-lg hover:shadow-xl"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon1} alt="Shoes" className="md:w-[60px] w-[40px]" />
          <h2 className="text-center font-bold text-[16px]">
            Well Experienced Workforce
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 border-2 p-3 rounded-md shadow-lg hover:shadow-xl"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon2} alt="Shoes" className="md:w-[60px] w-[40px]" />
          <h2 className="text-center font-bold text-[16px]">
            Well Equipped Infrastructure
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 border-2 p-3 rounded-md shadow-lg hover:shadow-xl"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon3} alt="Shoes" className="md:w-[60px] w-[40px]" />
          <h2 className="text-center font-bold text-[16px]">
            Economical Pricing
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 border-2 p-3 rounded-md shadow-lg hover:shadow-xl"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon4} alt="Shoes" className="md:w-[60px] w-[40px]" />
          <h2 className="text-center font-bold text-[16px]">
            On-Time Delivery
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 border-2 p-3 rounded-md shadow-lg hover:shadow-xl"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon5} alt="Shoes" className="md:w-[60px] w-[40px]" />
          <h2 className="text-center font-bold text-[16px]">
            Safety Guaranteed
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 border-2 p-3 rounded-md shadow-lg hover:shadow-xl"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon6} alt="Shoes" className="md:w-[60px] w-[40px]" />
          <h2 className="text-center font-bold text-[16px]">
            Professional Service
          </h2>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 border-2 p-3 rounded-md shadow-lg hover:shadow-xl"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={icon7} alt="Shoes" className="md:w-[60px] w-[40px]" />
          <h2 className="text-center font-bold text-[16px]">
            Customer Satisfaction
          </h2>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-center font-bold text-[36px] px-5">
          AFFORDABLE SERVICES OF JIT DELIVER
        </h1>
        <div className="flex lg:flex-row flex-col-reverse w-full mt-10 justify-center items-center px-10">
          <div
            className="lg:w-1/2"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <p className="text-[18px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Transport services all over Bangladesh.
            </p>
            <p className="text-[18px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Relocation of home and household Items.
            </p>
            <p className="text-[18px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Local shifting for household goods, appliances, and furniture.
            </p>
            <p className="text-[18px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Office relocation services all over Bangladesh
            </p>
            <p className="text-[18px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
              Warehouse operation support services in the Dhaka division
            </p>
            <p className="text-[18px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-[#002366]" />
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
    </div>
  );
};

export default Details;
