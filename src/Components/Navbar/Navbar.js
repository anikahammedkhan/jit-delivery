import React, { useContext, useState, useEffect } from "react";
import logo from "../../Assets/Logo/logo1.png";
import bd from "../../Assets/Icons/bangladesh.png";
import en from "../../Assets/Icons/usa.png";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../Context/ContextData";
import Select, { components } from "react-select";

const Navbar = () => {
  const { language, setLanguage } = useContext(AuthContext);
  console.log(language);
  const countries = [
    { value: "bd", label: "বাংলা", icon: bd },
    { value: "en", label: "English", icon: en },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(countries[1]);
  useEffect(() => {
    setSelectedLanguage(
      countries.find((country) => country.value === language)
    );
  }, [language]);

  const Option = (props) => (
    <components.Option
      {...props}
      className="flex w-full flex-row bg-[#002366] items-center"
    >
      <img src={props.data.icon} alt="logo" className="w-[20px]" />
      <p className="inline">{props.data.label}</p>
    </components.Option>
  );

  const handleChange = (value) => {
    setLanguage(value.value);
  };

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <img src={selectedLanguage.icon} alt="s-logo" className="w-[20px] mr-2" />
      {children}
    </components.SingleValue>
  );

  const menu = (
    <>
      {language === "en" ? (
        <>
          <li className="flex justify-center">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="flex justify-center">
            <NavLink to="/our-services" className="nav-link">
              Our Services
            </NavLink>
          </li>
          <li className="flex justify-center">
            <NavLink to="/about-us" className="nav-link">
              About Us
            </NavLink>
          </li>
          <li className="flex justify-center">
            <NavLink to="/contact-us" className="nav-link">
              Contact Us
            </NavLink>
          </li>
          <li className="flex justify-center">
            <NavLink to="/" className="nav-link">
              Blog
            </NavLink>
          </li>
          <li className="flex justify-center">
            <NavLink to="/tracking" className="nav-link">
              Tracking
            </NavLink>
          </li>
          <li>
            <Select
              value={selectedLanguage}
              options={countries}
              isSearchable={false}
              // defaultMenuIsOpen
              onChange={handleChange}
              styles={{
                singleValue: (base) => ({
                  ...base,
                  display: "flex",
                  alignItems: "center",
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "#002366" : "transparent",
                  color: state.isSelected ? "white" : "black",
                  "&:hover": {
                    backgroundColor: "#1358d8",
                    color: "white",
                  },
                }),
              }}
              components={{
                Option,
                SingleValue,
              }}
            />
          </li>
        </>
      ) : (
        <>
          <li className="flex justify-center">
            <NavLink exact to="/" className="nav-link">
              হোম
            </NavLink>
          </li>
          <li className="flex justify-center">
            <NavLink to="/our-services" className="nav-link">
              আমাদের সেবাসমূহ
            </NavLink>
          </li>
          <li className="flex justify-center">
            <NavLink to="/about-us" className="nav-link">
              আমাদের সম্পর্কে
            </NavLink>
          </li>
          <li className="flex justify-center">
            <NavLink to="/contact-us" className="nav-link">
              যোগাযোগ
            </NavLink>
          </li>
          <li className="flex justify-center">
            <NavLink to="/" className="nav-link">
              ব্লগ
            </NavLink>
          </li>
          <li className="flex justify-center">
            <NavLink to="/tracking" className="nav-link">
              ট্র্যাকিং
            </NavLink>
          </li>
          <li>
            <Select
              value={selectedLanguage}
              options={countries}
              // defaultMenuIsOpen
              isSearchable={false}
              onChange={handleChange}
              styles={{
                singleValue: (base) => ({
                  ...base,
                  display: "flex",
                  alignItems: "center",
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "#002366" : "transparent",
                  color: state.isSelected ? "white" : "black",
                  "&:hover": {
                    backgroundColor: "#1358d8",
                    color: "white",
                  },
                }),
              }}
              components={{
                Option,
                SingleValue,
              }}
            />
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="drawer bg-[#002366] z-50 sticky top-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="max-w-[1440px] mx-auto navbar relative flex justify-between px-5">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="xl:w-[300px] lg:w-[200px] md:w-[250px] w-[150px]"
            />
          </Link>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="flex gap-5 w-full text-[16px] font-semibold z-20 text-white hover:text-white">
              {menu}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="flex flex-col pt-10 w-[200px] min-h-full bg-[#002366] text-white font-semibold">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[180px] ps-10" />
          </Link>
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
