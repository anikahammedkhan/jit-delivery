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
    <div className="mt-28 max-w-[1440px] mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to</h1>
        <p className="lg:text-2xl w-3/4 mx-auto my-2">
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
        <h1 className="text-center font-bold text-4xl">Our Competencies</h1>
      </div>
      <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 p-3 mt-10">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={icon1} alt="Shoes" className="w-[100px]" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">
              Well Experienced Workforce
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={icon2} alt="Shoes" className="w-[100px]" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">
              Well Equipped Infrastructure
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={icon3} alt="Shoes" className="w-[100px]" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">
              Economical Pricing
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={icon4} alt="Shoes" className="w-[100px]" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">On-Time Delivery</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={icon5} alt="Shoes" className="w-[100px]" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">Safety Guaranteed</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={icon6} alt="Shoes" className="w-[100px]" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">
              Professional Service
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={icon7} alt="Shoes" className="w-[100px]" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">
              Customer Satisfaction
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-center font-bold text-4xl">
          JIT DELIVER INCLUDED THE SERVICES
        </h1>
        <div className="lg:flex w-full mt-10 justify-center items-center">
          <div className="lg:w-1/2 p-10">
            <p className="text-[26px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Transport services all over Bangladesh.
            </p>
            <p className="text-[26px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Relocation of home and household Items.
            </p>
            <p className="text-[26px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Local shifting for household goods, appliances, and furniture.
            </p>
            <p className="text-[26px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Office relocation services all over Bangladesh
            </p>
            <p className="text-[26px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Warehouse operation support services in the Dhaka division
            </p>
            <p className="text-[26px] font-semibold my-5">
              <MdDoubleArrow className="inline mr-2 text-green-600" />
              Loading and unloading services.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src={imageBanner} alt="" className="rounded-[16px]" />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center font-bold text-4xl">
          AFFORDABLE SERVICES OF JIT DELIVER
        </h1>
        <p className="text-2xl w-3/4 mx-auto my-2 text-center">
          We are packaging your goods in high-quality packaging materials and
          keeping them safe and secure. We are packaging & shifting in service
          in the Dhaka division and all over Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default Details;
