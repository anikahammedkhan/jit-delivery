import React from "react";
import contact from "../../Assets/BannerImg/contact.png";

const Contact = () => {
  return (
    <div className="lg:top-[-50px] md:top-[-30px] top-[-20px] relative -z-0">
      {/* <img src={contact} alt="" className="w-full" /> */}
      <div className="w-full h-[1250px] px-5">
        <iframe
          src="https://form.jotform.com/232601653039451"
          title="Enquire Now"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
