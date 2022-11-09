import React from "react";
import Social from "../s-img/Social.png";

const Footer = () => {
  // footer
  return (
    <div className="bg-[#2E2100] pt-[96px] px-[135px]">
      <div className="flex flex-row items-start justify-between max-w-[1200px] h-[211px] px-2 mx-auto">
        <div>
          <h2 className="text-2xl font-sans font-bold text-white">
            Lesson<span className="text-[#FFB900]">.</span>
          </h2>
          <p className="text-[#BFBCB2] text-[14px] leading-6">
            Need to help for your dream Career?
            <br /> trust us. With Lesson, study becomes
            <br /> a lot easier with us.
          </p>
          <img
            className="pt-[18px] cursor-pointer"
            src={Social}
            alt="not found"
          />
        </div>
        <div className="">
          <h2 className="font-semibold text-[16px] leading-7 text-white pb-[28px]">
            Company
            <div className="pt-[14px] border-b-2 border-[#59554B]" />
          </h2>
          <ul className="text-[#BFBCB2] space-y-[12px] cursor-pointer">
            <li>About us</li>
            <li>Features</li>
            <li>Our Pricing</li>
            <li>Latest News</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-[16px] leading-7 text-white pb-[28px]">
            Support
            <div className="pt-[14px] border-b-2 border-[#59554B]" />
          </h2>
          <ul className="text-[#BFBCB2] space-y-[12px] cursor-pointer">
            <li>FAQ'S</li>
            <li>Teams & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-[16px] leading-7 text-white pb-[28px]">
            Adress
            <div className="pt-[14px] border-b-2 border-[#59554B]" />
          </h2>
          <ul className="text-[#BFBCB2] space-y-[12px] cursor-pointer">
            <li>
              <span className="text-white">Location:</span> 27 Division St, New
              York,
            </li>
            <li>
              <span className="text-white">Email:</span> email@gmail.com
            </li>
            <li>
              <span className="text-white">Phone:</span> + 00 1234 567 890
            </li>
          </ul>
        </div>
      </div>

      <div className="h-[121px] max-w-[1200px] container mx-auto">
        <br />
        <br />
        <hr className="bg-[#59554B]" style={{ backgroundColor: "#59554B" }} />
      </div>
      <div className="text-[14px] text-[#807D74] container mx-auto w-[360px] h-[26px] -mt-[26px]">
        <p>Copyright ©2022 webdesign.gdn All rights reserved</p>
      </div>
      <br />
    </div>
  );
};

export default Footer;
