import React from "react";
import imgOne from "../../Assets/BannerImg/form-bg.jpg";

const Form = () => {
  return (
    <div className="pt-5 mt-28 max-w-[1440px] mx-auto">
      <h1 className="text-center font-bold text-4xl mb-2 text-[#002366]">
        Get a quote or take your logistics to the next level
      </h1>
      <p className="text-center font-semibold text-xl mb-5">
        Submit the form and get in touch with us
      </p>
      <div className="lg:flex w-full h-[800px]">
        <div className="lg:w-1/2 lg:block hidden">
          <img src={imgOne} alt="" className="rounded-lg h-[800px]" />
        </div>
        <div className="lg:w-1/2 flex items-center">
          <div className="mx-auto rounded-lg w-full h-[800px]">
            <embed
              src="https://app.jitdeliver.com/get-quote-jot/"
              type=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
