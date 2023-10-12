import React from "react";
import logo from "../../Assets/Logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#002366] items-center text-white ] top-[0px]">
      <aside>
        <img src={logo} alt="" className="w-[200px]" />
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Packing & shifting Services</a>
        <a className="link link-hover">Warehouse Operation Support Service</a>
        <a className="link link-hover">Loading and Unloading Service</a>
        <a className="link link-hover">Transportation Service</a>
        <a className="link link-hover">Household Shifting</a>
        <a className="link link-hover">
          Corporate Relocation Service in bangladesh
        </a>
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
