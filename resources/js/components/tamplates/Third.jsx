import React from "react";
import Ellipse from "../s-img/Ellipse_2649.png";
import Vector from "../s-img/Vector.png";

const Third = () => {
  return (
    <div className="bg-[#2E2100] h-[380px] w-[1440]">
      <div className="flex flex-row justify-between sm:w-[500px] md:w-[900px] xl:w-[1200px] h-[380px] mx-auto items-center">
        <div className="flex flex-col">
          <img
            className="rounded-full h-[72px] w-[72px]"
            src={Ellipse}
            alt="not found"
            loading="lazy"
          />
          <h3 className="font-bold text-[24px] text-white pt-[18px]">
            Peter Moor
          </h3>
          <p className="text-[#BFBCB2] text-[14px] pt-[4px]">
            Student of Web Design
          </p>
          <div className="flex flex-row w-[36px] justify-between pt-[28px]">
            <div className="h-[6px] w-[6px] rounded-full bg-[#634700]"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-[#FFB900]"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-[#634700]"></div>
          </div>
        </div>

        <div className="flex flex-col grow">
          <sup>
            <img
              className="-ml-[30px]"
              src={Vector}
              alt="not found"
              loading="lazy"
            />
          </sup>
          <div className="w-[740px] h-[160px]">
            <h2 className="text-white text-[26px] leading-10">
              Not only does my resume look impressive—filled with the
              <br /> names and logos of world-class institutions—but these
              <br /> certificates also bring me closer to my career goals by
              <br /> validating the skills I've learned."
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
