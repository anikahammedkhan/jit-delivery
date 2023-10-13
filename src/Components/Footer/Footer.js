import React from "react";
import logo from "../../Assets/Logo/logo.png";
import fb from "../../Assets/Logo/facebook.png";
import linkedin from "../../Assets/Logo/linkedin.png";
import insta from "../../Assets/Logo/instagram.png";
import whatsapp from "../../Assets/Logo/whatsapp.png";
import address from "../../Assets/Logo/adress.png";
import call from "../../Assets/Logo/call.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#002366] items-center text-white ] top-[0px]">
      <aside>
        <img src={logo} alt="" className="w-[200px]" />
        <div className="flex gap-3">
          <Link
            to="https://www.facebook.com/jitdeliver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="" className="w-[30px]" />
          </Link>
          <Link
            to="https://www.linkedin.com/company/jitdeliver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="" className="w-[30px]" />
          </Link>
          <Link
            to="https://www.instagram.com/Jitdeliver23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="" className="w-[30px]" />
          </Link>
          <Link
            to="https://wa.me/+8801714208717"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="" className="w-[30px]" />
          </Link>
        </div>
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-3 text-[14px]">
            <img src={call} alt="" className="w-[25px]" />
            <p>+8801714208717</p>
          </div>
          <div className="flex justify-center items-center gap-3 text-[14px]">
            <img src={address} alt="" className="w-[25px]" />
            <p>
              65/3, Skyview Tower (1st Floor) Bashaboo, <br />
              Kadamtola, Dhaka-1214,Bangladesh
            </p>
          </div>
        </div>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <Link to="/our-services" className="link link-hover">
          Packing & shifting Services
        </Link>
        <Link to="/our-services" className="link link-hover">
          Warehouse Operation Support Service
        </Link>
        <Link to="/our-services" className="link link-hover">
          Loading and Unloading Service
        </Link>
        <Link to="/our-services" className="link link-hover">
          Transportation Service
        </Link>
        <Link to="/our-services" className="link link-hover">
          Household Shifting
        </Link>
        <Link to="/our-services" className="link link-hover">
          Corporate Relocation Service in bangladesh
        </Link>
      </nav>
      <footer className="footer footer-center p-4 bg-[#002366] text-white">
        <aside>
          <p>Copyright © 2023 - All right reserved by JIT Deliver</p>
          <p>
            Developed by{" "}
            <Link
              to="https://www.linkedin.com/in/anikahammedkhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 underline"
            >
              Md Anik Ahammed Khan
            </Link>
          </p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
