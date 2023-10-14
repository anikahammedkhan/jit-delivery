import React, { useContext } from "react";
import contact from "../../Assets/BannerImg/contact.png";
import { AuthContext } from "../../Context/ContextData";

const Contact = () => {
  const { language } = useContext(AuthContext);
  return (
    <div>
      {language === "en" ? (
        <div className="lg:top-[-50px] md:top-[-30px] top-[-20px] relative -z-0">
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
      ) : (
        <div className="lg:top-[-50px] md:top-[-30px] top-[-20px] relative -z-0">
          <div className="w-full h-[1250px] px-5">
            <iframe
              src="https://www.jotform.com/form/232852556129461"
              title="Enquire Now"
              style={{
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
