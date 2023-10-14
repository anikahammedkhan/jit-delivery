import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imgOne from "../../Assets/BannerImg/001.jpg";
import imgTwo from "../../Assets/BannerImg/002.jpg";
import imgThree from "../../Assets/BannerImg/003.jpg";
import formImg from "../../Assets/BannerImg/hero-gaq.png";
import formImg2 from "../../Assets/BannerImg/form-bd.jpg";
import JotformEmbed from "react-jotform-embed";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/ContextData";

const Hero = () => {
  const { language } = useContext(AuthContext);
  useEffect(() => {
    AOS.init();
  }, [language]);

  return (
    <div>
      {language === "en" ? (
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
                className="xl:h-[850px] lg:h-[600px] md:h-[400px] h-[300px] object-cover"
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
                    We simplify all the complicated tasks related to your home
                    and office relocation services, taking care of your goods
                    while working with transparency and safety.
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
                className="xl:h-[850px] lg:h-[600px] md:h-[400px] h-[300px] object-cover"
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
                    We provide Loading, Unloading, and Labor services to
                    mitigate your contingency requirement
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
                className="xl:h-[850px] lg:h-[600px] md:h-[400px] h-[300px] object-cover"
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
                    JIT DELIVER gives special attention to your goods once they
                    are arriving from the port, especially the loading and
                    unloading session. Warehousing is often arranged according
                    to the specified norms of the client.
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
          <div className="flex max-w-[1440px] mx-auto relative xl:top-[-1050px] lg:top-[-800px] md:top-[-350px] top-[-280px] bg-transparent">
            <div className="lg:w-1/2"></div>
            <div className="lg:w-1/2 w-full mx-auto bg-transparent">
              <div
                className="mx-auto rounded-lg w-[300px] h-[200px]"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <Link to="get-a-quote">
                  <img src={formImg} alt="" />
                </Link>
                {/* <iframe
              src="https://form.jotform.com/232601709873459"
              title="Get Quote"
              style={{
                width: "100%",
                height: "718px",
              }}
            ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="xl:h-[850px] lg:h-[500px] md:h-[700px] h-[400px]">
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
                className="xl:h-[850px] lg:h-[600px] md:h-[400px] h-[500px] object-cover"
                src={imgOne}
                alt="Banner"
                style={{
                  filter: "brightness(70%)",
                }}
              />
              <div className="max-w-[1440px] mx-auto px-10 text-white lg:flex">
                <div
                  className="lg:w-1/2 relative xl:top-[-600px] lg:top-[-450px] md:top-[-350px] top-[-420px]"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                >
                  <h1 className="font-bold xl:text-[45px] lg:text-[35px] md:text-[32px] text-[25px] lg:text-left">
                    আপনার যে কোন প্রয়োজন লোডিং, আনলোডিং এবং শ্রমিক পরিষেবা
                    সরবরাহ করি যাতে প্রয়োজনীয়তা সহজলভ্য হয়
                  </h1>
                  <p className="lg:text-left">
                    আমরা আপনার গন্তব্য থেকে যেকোনো স্থানে আপনার প্রয়োজনীয়তার
                    ভিত্তিতে অভিজ্ঞ শ্রম বাহিনী সহ পরিবহন পরিষেবা প্রদান এবং
                    নিরাপত্তার সাথে লোডিং,আনলোডিং সম্পূর্ণ করে থাকি ।
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
                className="xl:h-[850px] lg:h-[600px] md:h-[400px] h-[500px] object-cover"
                src={imgTwo}
                alt="Banner"
                style={{
                  filter: "brightness(70%)",
                }}
              />
              <div className="max-w-[1440px] mx-auto px-10 text-white lg:flex">
                <div
                  className="lg:w-1/2 relative xl:top-[-600px] lg:top-[-350px] md:top-[-350px] top-[-420px]"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                >
                  <h1 className="font-bold xl:text-[55px] lg:text-[35px] md:text-[32px] text-[25px] lg:text-left">
                    আমরা ওয়ারহাউজ অপারেশন ও সমর্থন সেবা প্রদান করে থাকি
                  </h1>
                  <p className="lg:text-left">
                    জেআইটি ডেলিভার আপনার পণ্যগুলি বন্দর থেকে আসার পরে বিশেষভাবে
                    লোডিং এবং আনলোডিং, বাছাইকরন এবং সেগুলকে রেফারেন্স অনুসারে
                    সাজানো এর সমস্ত কাজ সুসম্পূর্ণ ভাবে নিরাপত্তার সাথে করা হয়ে
                    থাকে।
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
                className="xl:h-[850px] lg:h-[600px] md:h-[400px] h-[500px] object-cover"
                src={imgThree}
                alt="Banner"
                style={{
                  filter: "brightness(70%)",
                }}
              />
              <div className="max-w-[1440px] mx-auto px-10 text-white lg:flex">
                <div
                  className="lg:w-1/2 relative xl:top-[-600px] lg:top-[-350px] md:top-[-350px] top-[-420px]"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                >
                  <h1 className="font-bold xl:text-[55px] lg:text-[35px] md:text-[32px] text-[25px] lg:text-left">
                    আমরা গুদাম অপারেশন সহায়তা পরিষেবা প্রদান করি
                  </h1>
                  <p className="lg:text-left">
                    জেআইটি ডেলিভার আপনার পণ্যগুলি বন্দর থেকে আসার পরে বিশেষভাবে
                    লোডিং ,আনলোডিং এবং গুদামজাতকরণ প্রায়ই ক্লায়েন্টের
                    নির্দিষ্ট নিয়ম অনুযায়ী সা যেমন, প্যাকিং, রেফারেন্স
                    অনুযায়ী বাছাই, সরানো এবং সংরক্ষণ করার বিষয়ে আরও স্থির।
                    আপনার পণ্যগুলি নির্দিষ্ট গন্তব্যে নিরাপদ অবস্থায় লোড এবং
                    আনলোড করা আমাদের নৈতিক দায়িত্ব এবং দৈনন্দিন কাজগুলিকে সহজ
                    করার জন্য, আপনার অপারেশনের ঝামেলা এবং দৈনন্দিন বিষয়গুলি
                    সমাধান করার জন্য আমাদের কাছে রয়েছে দক্ষ গুদাম ব্যবস্থাপনা
                    দল।
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
          <div className="flex max-w-[1440px] mx-auto relative xl:top-[-1050px] lg:top-[-850px] md:top-[-350px] top-[-400px] bg-transparent">
            <div className="lg:w-1/2"></div>
            <div className="lg:w-1/2 w-full mx-auto bg-transparent">
              <div
                className="mx-auto rounded-lg w-[300px] h-[200px]"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <Link to="get-a-quote">
                  <img src={formImg2} alt="" />
                </Link>
                {/* <iframe
              src="https://form.jotform.com/232601709873459"
              title="Get Quote"
              style={{
                width: "100%",
                height: "718px",
              }}
            ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
