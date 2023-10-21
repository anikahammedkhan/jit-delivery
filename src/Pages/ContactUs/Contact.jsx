import React, { useContext } from "react";
import { AuthContext } from "../../Context/ContextData";
import logo from "../../Assets/Logo/logo.png";
import fb from "../../Assets/Logo/facebook.png";
import linkedin from "../../Assets/Logo/linkedin.png";
import insta from "../../Assets/Logo/instagram.png";
import whatsapp from "../../Assets/Logo/whatsapp.png";
import address from "../../Assets/Logo/adress.png";
import call from "../../Assets/Logo/call.png";
import email from "../../Assets/Logo/email.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const { language } = useContext(AuthContext);
  return (
    <div>
      {language === "en" ? (
        <div className="flex lg:flex-row flex-col-reverse  max-w-[1440px] mx-auto w-full px-4 py-5 justify-center">
          <div className="pt-10 lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.269704031328!2d90.4355633!3d23.7377599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9c71df46669%3A0x8fdde18b1f60e4e2!2sSky%20View%20S.F%20Tower%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1697838945732!5m2!1sen!2sbd"
              title="map"
              width="100%"
              height="600px"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col items-center w-full pt-10">
              <h1 className="text-[30px] font-semibold text-[#002366]">
                Head Office Address
              </h1>
              <img src={logo} alt="" className="w-[200px]" />
              <div className="flex gap-3">
                <Link to="https://www.facebook.com/jitdeliver" target="_blank">
                  <img src={fb} alt="" className="w-[30px]" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/jitdeliver/"
                  target="_blank"
                >
                  <img src={linkedin} alt="" className="w-[30px]" />
                </Link>
                <Link
                  to="https://www.instagram.com/Jitdeliver23"
                  target="_blank"
                >
                  <img src={insta} alt="" className="w-[30px]" />
                </Link>
                <Link to="https://wa.me/+8801714208717" target="_blank">
                  <img src={whatsapp} alt="" className="w-[30px]" />
                </Link>
              </div>
              <div className="flex flex-col justify-start gap-2">
                <div className="flex items-center gap-3 text-[14px]">
                  <img src={email} alt="" className="w-[25px]" />
                  <p>info@jitdeliver.com</p>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <img src={call} alt="" className="w-[25px]" />
                  <p>+8801714208717</p>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <img src={address} alt="" className="w-[25px]" />
                  <p>
                    65/3, Skyview Tower (1st Floor) Bashaboo, <br />
                    Kadamtola, Dhaka-1214,Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:h-[1150px] md:h-[1100px] h-[1450px]">
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
        <div className="flex lg:flex-row flex-col-reverse  max-w-[1440px] mx-auto w-full px-4 py-5 justify-center">
          <div className="pt-10 lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.269704031328!2d90.4355633!3d23.7377599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9c71df46669%3A0x8fdde18b1f60e4e2!2sSky%20View%20S.F%20Tower%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1697838945732!5m2!1sen!2sbd"
              title="map"
              width="100%"
              height="600px"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col items-center w-full pt-10">
              <h1 className="text-[30px] font-semibold text-[#002366]">
                Head Office Address
              </h1>
              <img src={logo} alt="" className="w-[200px]" />
              <div className="flex gap-3">
                <Link to="https://www.facebook.com/jitdeliver" target="_blank">
                  <img src={fb} alt="" className="w-[30px]" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/jitdeliver/"
                  target="_blank"
                >
                  <img src={linkedin} alt="" className="w-[30px]" />
                </Link>
                <Link
                  to="https://www.instagram.com/Jitdeliver23"
                  target="_blank"
                >
                  <img src={insta} alt="" className="w-[30px]" />
                </Link>
                <Link to="https://wa.me/+8801714208717" target="_blank">
                  <img src={whatsapp} alt="" className="w-[30px]" />
                </Link>
              </div>
              <div className="flex flex-col justify-start gap-2">
                <div className="flex items-center gap-3 text-[14px]">
                  <img src={email} alt="" className="w-[25px]" />
                  <p>info@jitdeliver.com</p>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <img src={call} alt="" className="w-[25px]" />
                  <p>+8801714208717</p>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <img src={address} alt="" className="w-[25px]" />
                  <p>
                    65/3, Skyview Tower (1st Floor) Bashaboo, <br />
                    Kadamtola, Dhaka-1214,Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:h-[1150px] md:h-[1100px] h-[1450px]">
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
