import React from "react";
import logo from "../../Assets/Logo/logo.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#002366] relative items-center text-white">
      <aside>
        <img src={logo} alt="" className="w-[200px]" />
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Packaging & shifting Services</a>
        <a className="link link-hover">Warehouse Operation Support Service</a>
        <a className="link link-hover">Loading and Unloading Service</a>
        <a className="link link-hover">Transportation Service</a>
        <a className="link link-hover">Household Shifting</a>
        <a className="link link-hover">
          Corporate Relocation Service in bangladesh
        </a>
      </nav>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by JIT Deliver</p>
          <p>Developed by Md Anik Ahammed Khan</p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
