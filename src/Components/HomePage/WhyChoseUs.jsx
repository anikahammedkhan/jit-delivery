import React, { useContext } from "react";
import icon1 from "../../Assets/Icons/04.png";
import icon2 from "../../Assets/Icons/03.png";
import icon3 from "../../Assets/Icons/08.png";
import icon4 from "../../Assets/Icons/09.png";
import icon5 from "../../Assets/Icons/10.png";
import icon6 from "../../Assets/Icons/11.png";
import missionImg from "../../Assets/BannerImg/mission&vision.jpg";
import { MdDoubleArrow } from "react-icons/md";
import { AuthContext } from "../../Context/ContextData";

const WhyChoseUs = () => {
  const { language } = useContext(AuthContext);
  return (
    <div>
      {language === "en" ? (
        <div className="max-w-[1440px] mx-auto relative xl:top-[0px] lg:top-[-50px] md:top-[0px] top-[550px]">
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
                  We at <span className=" text-orange-600">JIT DELIVER</span>{" "}
                  are expecting to deliver goods that are safe and secure. Quick
                  and fast delivery is the most vital feature of our company.
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
                  We provide the simplest packing and moving services at
                  reasonable prices. Our customers are our precious belongings;
                  we never want their wallets to be harsh.
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
                  We have an impressive team of customer relations executives
                  who assist you with our quality services and help you to
                  resolve all your packing and moving queries.
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
                  Our vision of becoming unparalleled in leading the
                  transportation and relocation industry, as well as expanding
                  into other sectors, is a bold and ambitious goal. It's evident
                  that your company has made significant progress over the
                  years, growing stronger and solidifying your position as a
                  dominant provider of packing and moving services
                </h2>
                <p className="font-semibold m-0">
                  To continue moving toward your vision, consider these
                  strategies:
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
              valuable customers and building long-term business relationships
              to own the business once again and again along with ensuring the
              right commitment, Transparency, safety, and security of the
              customer.
            </p>
            <h1 className="text-center text-[36px] font-semibold my-5">
              OUR WORK PROCESS
            </h1>
            <div className="grid grid-cols-7 justify-items-center items-center mb-10 max-w-[700px] mx-auto">
              <div
                className="flex flex-col justify-center items-center gap-2"
                data-aos="fade-up"
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
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <MdDoubleArrow className="md:text-[40px] text-[20px] inline mr-2 text-[#002366]" />
              </div>
              <div
                className="flex flex-col justify-center items-center gap-2"
                data-aos="fade-up"
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
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <MdDoubleArrow className="md:text-[40px] text-[20px] inline mr-2 text-[#002366]" />
              </div>
              <div
                className="flex flex-col justify-center items-center gap-2"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <img src={icon6} alt="Shoes" className="w-[35px]" />
                <h2 className="text-center font-bold text-md">Safe Loading</h2>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <MdDoubleArrow className="md:text-[40px] text-[20px] inline mr-2 text-[#002366]" />
              </div>
              <div
                className="flex flex-col justify-center items-center gap-2"
                data-aos="fade-up"
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
      ) : (
        <div className="max-w-[1440px] mx-auto relative xl:top-[0px] lg:top-[100px] md:top-[0px] top-[750px] md:pb-0 pb-[200px]">
          <h1 className="text-center text-[36px] font-semibold mb-10">
            কেন আমাদের নির্বাচন করবেন
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
                  সময়মতো ডেলিভারী
                </h2>
                <p className="text-center font-semibold">
                  <span className=" text-orange-600">জেআইটি ডেলিভার </span>{" "}
                  গ্রাহকের পণ্য এবং পরিষেবাগুলি নিরাপদ অবস্থায় সরবরাহ করার আশা
                  করে৷ দ্রুততম ডেলিভারি সঠিক সময়ে সঠিক জায়গায় ভাল অবস্থায়
                  আমাদের কোম্পানির সবচেয়ে গুরুত্বপূর্ণ বৈশিষ্ট্য।
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
                  সাশ্রয়ী মূল্যে
                </h2>
                <p className="text-center font-semibold">
                  আমরা সাশ্রয়ী মূল্যে সহজতম প্যাকিং এবং চলমান পরিষেবা সরবরাহ
                  করি। আমাদের গ্রাহকরা তাদের মূল্যবান জিনিসপত্র সহজ মূল্যে এবং
                  সঠিক সেবায় আমাদের সাথে সম্পর্ক বজায়ে রাখে।
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
                  ২৪/৭ সহায়তা পরিষেবা
                </h2>
                <p className="text-center font-semibold">
                  আমাদের গ্রাহক সম্পর্ক নির্বাহীদের একটি চৌকস দল রয়েছে যারা
                  আপনাকে আমাদের মানসম্পন্ন পরিষেবাগুলির সাথে সহায়তা করে এবং
                  আপনার সমস্ত প্যাকিং এবং চলমান প্রশ্নের সমাধানে করতে সহায়তা
                  করে।
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center text-[36px] font-semibold mt-10">
              মিশন এবং ভিশন
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
                  আমাদের দৃষ্টিভঙ্গি হল সময়ের মধ্যে পরিবহন এবং স্থানান্তর
                  পরিষেবাগুলিতে একটি অতুলনীয় নেতৃস্থানীয় পরিষেবা প্রদানকারী
                  হয়ে ওঠার পাশাপাশি অন্যদের মধ্যে প্রসারিত হওয়া এবং এই
                  শিল্পগুলিতে একটি দায়িত্বশীল এবং দায়বদ্ধ সত্তা হওয়া। এটা
                  স্পষ্ট যে আপনার কোম্পানি বছরের পর বছর ধরে উল্লেখযোগ্য অগ্রগতি
                  করছে, শক্তিশালী হয়ে উঠছে এবং আপনার প্রত্যাশা অনুযায়ী একটি
                  প্রভাবশালী পরিষেবা প্রদানকারী হিসেবে আমাদের অবস্থানকে ও মজবুত
                  করছে।
                </h2>
                <p className="font-semibold m-0">
                  আমাদের লক্ষ্য আপনার লক্ষে এগিয়ে যাওয়া, বিশেষ করে এই কৌশলগুলি
                  বিবেচনা করা এবং সময়ের সাথে নিজেদের মানিয়ে নেয়া:
                </p>
                <p className="text-[16px] font-semibold">
                  <MdDoubleArrow className="inline mr-2 text-[#002366]" />
                  উদ্ভাবন এবং প্রযুক্তি
                </p>
                <p className="text-[16px] font-semibold">
                  <MdDoubleArrow className="inline mr-2 text-[#002366]" />
                  বৈচিত্রতা
                </p>
                <p className="text-[16px] font-semibold">
                  <MdDoubleArrow className="inline mr-2 text-[#002366]" />
                  মানসম্মত সেবা
                </p>
                <p className="text-[16px] font-semibold">
                  <MdDoubleArrow className="inline mr-2 text-[#002366]" />
                  কর্মচারী প্রশিক্ষণ ও উন্নয়ন
                </p>
                <p className="text-[16px] font-semibold">
                  <MdDoubleArrow className="inline mr-2 text-[#002366]" />
                  অংশীদারিত্ব এবং সহযোগিতা
                </p>
                <p className="text-[16px] font-semibold">
                  <MdDoubleArrow className="inline mr-2 text-[#002366]" />
                  স্থায়িত্ব
                </p>
                <p className="text-[16px] font-semibold">
                  <MdDoubleArrow className="inline mr-2 text-[#002366]" />
                  বাজার গবেষণা
                </p>
                <p className="text-[16px] font-semibold">
                  <MdDoubleArrow className="inline mr-2 text-[#002366]" />
                  গ্রাহক-কেন্দ্রিক দৃষ্টিভঙ্গি
                </p>
                <p className="text-[16px] font-semibold">
                  <MdDoubleArrow className="inline mr-2 text-[#002366]" />
                  ব্র্যান্ডিং এবং মার্কেটিং
                </p>
                <p className="text-[16px] font-semibold">
                  <MdDoubleArrow className="inline mr-2 text-[#002366]" />
                  বিশ্বব্যাপী সম্প্রসারণ
                </p>
              </div>
            </div>
          </div>
          <div className="px-10 mt-10 xl:mb-[0px] lg:mb-[150px] md:mb-[50px] mb-[580px]">
            <h1 className="text-center text-[36px] font-semibold my-5">
              আমাদের শক্তি এবং মূল্যবোধ
            </h1>
            <p className="text-[20px] text-center">
              আমাদের শক্তি হল মানসম্পন্ন পরিষেবা এবং মূল্যবান গ্রাহকদের সময়মত
              ডেলিভারি নিশ্চিত করা এবং গ্রাহকের সঠিক প্রতিশ্রুতি, স্বচ্ছতা,
              নিরাপত্তা এবং নিরাপত্তা নিশ্চিত করার পাশাপাশি ব্যবসার মালিক হওয়ার
              জন্য দীর্ঘমেয়াদী ব্যবসায়িক সম্পর্ক গড়ে তোলা।
            </p>
            <h1 className="text-center text-[36px] font-semibold my-5">
              আমাদের কার্যপ্রণালী
            </h1>
            <div className="grid grid-cols-7 justify-items-center items-center mb-10 max-w-[700px] mx-auto">
              <div
                className="flex flex-col justify-center items-center gap-2"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <img src={icon4} alt="Shoes" className="w-[35px]" />
                <h2 className="text-center font-bold">
                  আপনার পরিষেবা
                  <br />
                  বুকিং
                </h2>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <MdDoubleArrow className="md:text-[40px] text-[20px] inline mr-2 text-[#002366]" />
              </div>
              <div
                className="flex flex-col justify-center items-center gap-2"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <img src={icon5} alt="Shoes" className="w-[35px]" />
                <h2 className="text-center font-bold">
                  আপনার চালান <br /> প্রক্রিয়া
                </h2>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <MdDoubleArrow className="md:text-[40px] text-[20px] inline mr-2 text-[#002366]" />
              </div>
              <div
                className="flex flex-col justify-center items-center gap-2"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <img src={icon6} alt="Shoes" className="w-[35px]" />
                <h2 className="text-center font-bold text-md">নিরাপদ লোডিং</h2>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <MdDoubleArrow className="md:text-[40px] text-[20px] inline mr-2 text-[#002366]" />
              </div>
              <div
                className="flex flex-col justify-center items-center gap-2"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <img src={icon1} alt="Shoes" className="w-[50px]" />
                <h2 className="text-center font-bold text-md">
                  যথাসময়ে <br /> ডেলিভারি
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyChoseUs;
