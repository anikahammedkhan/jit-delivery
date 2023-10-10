import React from "react";
import about from "../../Assets/BannerImg/about.png";

const About = () => {
  return (
    <div>
      <img src={about} alt="" className="w-full" />
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-center font-bold text-[36px] my-10">About Us</h1>
        <p className="w-4/5 mx-auto font-semibold my-4">
          <span className="text-orange-600">JIT DELIVER</span> is among
          Bangladesh’s leading organizations providing reliable and timely
          packing and moving services. We are documented best within the
          industry as top and efficient packers and movers in Dhaka Division and
          every one over Bangladesh for shifting and relocation services,
          warehousing services, industrial relocation, and office shifting
          services. Packing and moving is always a troublesome
        </p>
        <p className="w-4/5 mx-auto font-semibold my-4">
          Task we’d like to seem at how costly household goods are often kept
          safe. We’ve built up a reputation over the years that have inspired
          our customers to return back to us time and time again.
        </p>
        <p className="w-4/5 mx-auto font-semibold my-4">
          <span className="text-orange-600">JIT DELIVER</span> Competent
          Bangladeshi packing and mover. Furthermore, we’ve provided huge
          experience on domestic goods, organizations and native shifting
          companies, automobile and motorcycle transport service provider
          everywhere Bangladesh.
        </p>
        <p className="w-4/5 mx-auto font-semibold my-4">
          We delivered a good range of shifting services including office
          relocation, packing and moving, home relocation, car transportation,
          warehousing and storage, loading and unloading, heavy machinery
          transportation. the corporate looks forward to expanding its
          operations to varied areas counting on the increasing demands of
          consumers.
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-center font-bold text-[36px] px-5">
          Planning to Transfer Your Goods?
        </h1>
        <p className="w-4/5 mx-auto text-xl font-semibold text-center">
          Looking for Experienced Packers, Movers transportation service?
        </p>
        <p className="w-4/5 mx-auto font-semibold my-4">
          Don’t waste time and get in touch with us now. We offer an ideal
          platform for locating the simplest packers and movers in your region
          who can make the method safe and cozy.
        </p>
        <p className="w-4/5 mx-auto font-semibold my-4">
          We’ve many valued customers who showed us their firm faith and
          confidence. you’ll read the reviews on{" "}
          <span className="text-orange-600">JIT DELIVER</span>, check the
          ratings and choose a service provider supported their experience and
          services offered, and most significantly, under your budget.
        </p>
      </div>
    </div>
  );
};

export default About;
