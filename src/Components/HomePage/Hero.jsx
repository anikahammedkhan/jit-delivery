import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imgOne from "../../Assets/BannerImg/001.jpg";
import imgTwo from "../../Assets/BannerImg/002.jpg";
import imgThree from "../../Assets/BannerImg/003.jpg";

const Hero = () => {
  return (
    <div className="xl:h-[650px] lg:h-[400px] md:h-[300px] h-[100px]">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={3000}
        showArrows={false}
      >
        <div>
          <img
            className="xl:h-[700px]"
            src={imgOne}
            alt="Banner"
            style={{
              filter: "brightness(70%)",
            }}
          />
          <div className="max-w-[1440px] mx-auto relative xl:top-[-500px] lg:top-[-350px] md:top-[-250px] top-[-180px] px-10 text-white">
            <p className="font-bold xl:text-[45px] lg:text-[32px] md:text-[25px] text-[18px] md:w-1/2 text-left">
              We provide quality home, Office Shifting, and Transportation
              services
            </p>
            <p className="md:w-1/2 text-left xl:text-[22px]">
              We simplify all the complicated tasks related to your home and
              office relocation services, taking care of your goods while
              working with transparency and safety.
            </p>
          </div>
        </div>
        <div>
          <img
            className="xl:h-[700px]"
            src={imgTwo}
            alt="Banner"
            style={{
              filter: "brightness(70%)",
            }}
          />
          <div className="max-w-[1440px] mx-auto relative xl:top-[-500px] lg:top-[-350px] md:top-[-250px] top-[-180px] px-10 text-white">
            <p className="font-bold xl:text-[45px] lg:text-[32px] md:text-[25px] text-[18px] md:w-1/2 text-left">
              We provide Loading, Unloading, and Labor services to mitigate your
              contingency requirement
            </p>
            <p className="md:w-1/2 text-left xl:text-[22px]">
              We are competent in providing transport services along with
              experienced labor forces based on your requirements at any
              location from your destination.
            </p>
          </div>
        </div>
        <div>
          <img
            className="xl:h-[700px]"
            src={imgThree}
            alt="Banner"
            style={{
              filter: "brightness(70%)",
            }}
          />
          <div className="max-w-[1440px] mx-auto relative xl:top-[-500px] lg:top-[-350px] md:top-[-250px] top-[-180px] px-10 text-white">
            <p className="font-bold xl:text-[45px] lg:text-[32px] md:text-[25px] text-[18px] md:w-1/2 text-left">
              We Provide warehouse operation support service
            </p>
            <p className="md:w-1/2 text-left xl:text-[22px]">
              JIT DELIVER gives special attention to your goods once they are
              arriving from the port, especially the loading and unloading
              session.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
