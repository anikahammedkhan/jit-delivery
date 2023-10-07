import React from "react";
import contact from "../../Assets/BannerImg/contact.png";

const Contact = () => {
  return (
    <div className="lg:top-[-50px] md:top-[-30px] top-[-20px] relative -z-0">
      <img src={contact} alt="" className="w-full" />
      <div className="w-full h-[1250px]">
        <embed
          src="https://app.jitdeliver.com/enquire-now-jot/"
          type=""
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Contact;
