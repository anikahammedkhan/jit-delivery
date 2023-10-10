import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imgOne from "../../Assets/BannerImg/001.jpg";
import imgTwo from "../../Assets/BannerImg/002.jpg";
import imgThree from "../../Assets/BannerImg/003.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div className="xl:h-[850px] lg:h-[500px] md:h-[700px] h-[100px]">
      <Carousel
        autoPlay
        emulateTouch={false}
        swipeable={false}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={6000}
        showArrows={false}
      >
        <div>
          <img
            className="xl:h-[850px] lg:h-[500px] md:h-[400px] h-[300px] object-cover"
            src={imgOne}
            alt="Banner"
            style={{
              filter: "brightness(70%)",
            }}
          />
          <div className="max-w-[1440px] mx-auto px-10 text-white lg:flex">
            <div
              className="lg:w-1/2 relative xl:top-[-600px] lg:top-[-350px] md:top-[-350px] top-[-280px]"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <h1 className="font-bold xl:text-[55px] lg:text-[35px] md:text-[32px] text-[25px] lg:text-left">
                We provide quality home, Office Shifting, and Transportation
                services
              </h1>
              <p className="lg:text-left">
                We simplify all the complicated tasks related to your home and
                office relocation services, taking care of your goods while
                working with transparency and safety.
              </p>
            </div>
            <div
              className="lg:w-1/2 relative xl:top-[-700px] lg:top-[-450px] md:top-[-620px] top-[-930px]"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            ></div>
          </div>
        </div>
        <div>
          <img
            className="xl:h-[850px] lg:h-[500px] md:h-[400px] h-[300px] object-cover"
            src={imgTwo}
            alt="Banner"
            style={{
              filter: "brightness(70%)",
            }}
          />
          <div className="max-w-[1440px] mx-auto px-10 text-white lg:flex">
            <div
              className="lg:w-1/2 relative xl:top-[-600px] lg:top-[-350px] md:top-[-350px] top-[-280px]"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <h1 className="font-bold xl:text-[55px] lg:text-[35px] md:text-[32px] text-[25px] lg:text-left">
                We provide Loading, Unloading, and Labor services to mitigate
                your contingency requirement
              </h1>
              <p className="lg:text-left">
                We are competent in providing transport services along with
                experienced labor forces based on your requirements at any
                location from your destination.
              </p>
            </div>
            <div
              className="lg:w-1/2 relative xl:top-[-700px] lg:top-[-450px] md:top-[-620px] top-[-930px]"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            ></div>
          </div>
        </div>
        <div>
          <img
            className="xl:h-[850px] lg:h-[500px] md:h-[400px] h-[300px] object-cover"
            src={imgThree}
            alt="Banner"
            style={{
              filter: "brightness(70%)",
            }}
          />
          <div className="max-w-[1440px] mx-auto px-10 text-white lg:flex">
            <div
              className="lg:w-1/2 relative xl:top-[-600px] lg:top-[-350px] md:top-[-350px] top-[-280px]"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <h1 className="font-bold xl:text-[55px] lg:text-[35px] md:text-[32px] text-[25px] lg:text-left">
                We Provide warehouse operation support service
              </h1>
              <p className="lg:text-left">
                JIT DELIVER gives special attention to your goods once they are
                arriving from the port, especially the loading and unloading
                session. Warehousing is often arranged according to the
                specified norms of the client.
              </p>
            </div>
            <div
              className="lg:w-1/2 relative xl:top-[-700px] lg:top-[-450px] md:top-[-620px] top-[-930px]"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            ></div>
          </div>
        </div>
      </Carousel>
      <div className="flex max-w-[1440px] mx-auto relative xl:top-[-1150px] lg:top-[-730px] md:top-[-350px] top-[-280px] bg-transparent">
        <div className="lg:w-1/2"></div>
        <div className="lg:w-1/2 w-full mx-auto bg-transparent">
          <div className="mx-auto rounded-lg w-[380px] xl:h-[700px] lg:h-[400px] md:h-[450px] h-[1150px]">
            <embed
              src="https://app.jitdeliver.com/get-quote-jot/"
              type=""
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
