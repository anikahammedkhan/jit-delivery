import React, { useContext } from "react";
import about from "../../Assets/BannerImg/about.jpg";
import { AuthContext } from "../../Context/ContextData";

const About = () => {
  const { language } = useContext(AuthContext);
  return (
    <div>
      {language === "en" ? (
        <div>
          <img src={about} alt="" className="w-full" />
          <div
            className="pt-10"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <h1 className="text-center font-bold text-[36px] my-10">
              About Us
            </h1>
            <p className="w-4/5 mx-auto font-semibold my-4">
              <span className="text-orange-600">JIT DELIVER</span> is among
              Bangladesh’s leading organizations providing reliable and timely
              packing and moving services. We are documented best within the
              industry as top and efficient packers and movers in Dhaka Division
              and every one over Bangladesh for shifting and relocation
              services, warehousing services, industrial relocation, and office
              shifting services. Packing and moving is always a troublesome
            </p>
            <p className="w-4/5 mx-auto font-semibold my-4">
              Task we’d like to seem at how costly household goods are often
              kept safe. We’ve built up a reputation over the years that have
              inspired our customers to return back to us time and time again.
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
              relocation, packing and moving, home relocation, car
              transportation, warehousing and storage, loading and unloading,
              heavy machinery transportation. the corporate looks forward to
              expanding its operations to varied areas counting on the
              increasing demands of consumers.
            </p>
          </div>
          <div
            className="pb-10"
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
              platform for locating the simplest packers and movers in your
              region who can make the method safe and cozy.
            </p>
            <p className="w-4/5 mx-auto font-semibold my-4">
              We’ve many valued customers who showed us their firm faith and
              confidence. you’ll read the reviews on{" "}
              <span className="text-orange-600">JIT DELIVER</span>, check the
              ratings and choose a service provider supported their experience
              and services offered, and most significantly, under your budget.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <img src={about} alt="" className="w-full" />
          <div
            className="pt-10"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <h1 className="text-center font-bold text-[36px] my-10">
              আমাদের সম্পর্কে কিছু কথা
            </h1>
            <p className="w-4/5 mx-auto font-semibold my-4">
              <span className="text-orange-600">জেআইটি ডেলিভার</span> বাংলাদেশের
              ক্রমবর্ধমান সংস্থাগুলির মধ্যে একটি নির্ভরযোগ্য এবং সময়মত প্যাকিং
              মুভিং এবং পরিবহন পরিষেবা প্রদান করে। আমরা শিল্পের মধ্যে প্রত্যাশিত
              এবং দক্ষ প্যাকার এবং মুভার হিসাবে ঢাকা বিভাগ এবং সারা বাংলাদেশে
              স্থানান্তর এবং স্থানান্তর পরিষেবা, গুদাম সহায়তা পরিষেবা, শিল্প
              স্থানান্তর এবং অফিস স্থানান্তর পরিষেবাগুলির জন্য সেরা৷ প্যাক করা
              এবং পণ্য স্থানান্তর সবসময়ই ঝামেলাপূর্ণ কাজ আমরা দেখাতে চাই যে কত
              দামী গৃহস্থালী জিনিসপত্র প্রায়ই নিরাপদ রাখা হয়। আমরা সময়ের
              ব্যবধানে একটি খ্যাতি তৈরি করেছি যা আমাদের গ্রাহকদের বারবার আমাদের
              কাছে ফিরে আসতে অনুপ্রাণিত করেছে।
            </p>
            <p className="w-4/5 mx-auto font-semibold my-4">
              <span className="text-orange-600">জেআইটি ডেলিভার</span> দক্ষ
              বাংলাদেশী প্যাকেজিং এবং মুভার। উপরন্তু, আমরা বাংলাদেশের সর্বত্র
              অভ্যন্তরীণ পণ্য, সংস্থা, নেটিভ শিফটিং কোম্পানি।
            </p>
            <p className="w-4/5 mx-auto font-semibold my-4">
              আমরা অফিস স্থানান্তর, প্যাকিং এবং সরানো, বাড়ি স্থানান্তর, গাড়ি
              পরিবহন, গুদাম সহায়তা পরিষেবা, লোডিং এবং আনলোডিং এবং ভারী
              যন্ত্রপাতি পরিবহন সহ স্থানান্তরিত পরিষেবাগুলির একটি ভাল পরিসর
              সরবরাহ করেছি। কর্পোরেশন গ্রাহকদের ক্রমবর্ধমান চাহিদার উপর নির্ভর
              করে বিভিন্ন এলাকায় তার কার্যক্রম সম্প্রসারণের জন্য উন্মুখ।
            </p>
          </div>
          <div
            className="pb-10"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <h1 className="text-center font-bold text-[36px] px-5">
              আপনি কি পণ্য স্থানান্তর করার পরিকল্পনা করছেন?
            </h1>
            <p className="w-4/5 mx-auto text-xl font-semibold text-center">
              আপনি কি পণ্য স্থানান্তর করার পরিকল্পনা করছেন?
            </p>
            <p className="w-4/5 mx-auto font-semibold my-4">
              সময় নষ্ট করবেন না এবং এখনই আমাদের সাথে যোগাযোগ করুন। আমরা আপনার
              অঞ্চলে সহজতম প্যাকার এবং মুভারদের সনাক্ত করার জন্য একটি আদর্শ
              প্ল্যাটফর্ম অফার করি যারা পদ্ধতিটিকে নিরাপদ এবং আরামদায়ক করে
              তুলতে পারে।
            </p>
            <p className="w-4/5 mx-auto font-semibold my-4">
              আমাদের অনেক মূল্যবান গ্রাহক আছে যারা আমাদের উপর দৃঢ় বিশ্বাস এবং
              আস্থা রাখে। আপনি{" "}
              <span className="text-orange-600">জেআইটি ডেলিভার </span>, এর
              পর্যালোচনাগুলি পড়বেন, রেটিংগুলি পরীক্ষা করবেন এবং সমর্থিত একটি
              পরিষেবা প্রদানকারী বেছে নেবেন তাদের অভিজ্ঞতা এবং পরিষেবাগুলি
              দেওয়া হয়, এবং সবচেয়ে উল্লেখযোগ্যভাবে, আপনার বাজেটের অধীনে।
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
