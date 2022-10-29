import React from "react";
import Icon_inactive from "../s-img/Icon_inactive.png";
import Icon_active from "../s-img/Icon_active.png";
import Img_1 from "../s-img/Image_1.png";
import Img_2 from "../s-img/Image_2.png";
import Img_3 from "../s-img/Image_3.png";
import Rating from "../s-img/Rating.png";

const Second = () => {
  return (
    <div className="bg-[#E5E5E5]">
      <div className="flex flex-col pt-[200px] items-center max-w-[1200px] justify-center gap-y-[55px] h-[1045px] mx-auto">
        <div className="">
          <div className="flex flex-row justify-between sm:w-[500px] md:w-[800px] xl:w-[1200px]">
            <div className="">
              <h2 className="text-[#171100] font-bold text-[38px]">
                Our popular courses
              </h2>
              <div>
                <p className="text-[18px] font-normal text-[#5F5B53]">
                  Build new skills with new trendy courses and shine
                  <br /> for the next future career.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-[18px]">
              <img
                src={Icon_inactive}
                className="cursor-pointer"
                alt="not found"
                loading="lazy"
              />
              <img
                src={Icon_active}
                className="cursor-pointer"
                alt="not found"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="sm:w-[500px] md:w-[900px] xl:w-[1200px] flex flex-row gap-[55px] grow mx-auto">
          <figure className="rounded-xl xl:w-[370px] md:w-[320px] sm:[290px] xl:h-[466px] md:h-[400px] sm:h-[350px] bg-[#ffffff]">
            <img src={Img_1} alt="not found" loading="lazy" />
            <div className="px-[22px]">
              <div className="flex flex-row justify-between pt-[16px]">
                <h3 className="text-[#171100] font-semibold text-[18px]">
                  Basic web design
                </h3>
                <img src={Rating} alt="not found" />
              </div>
              <p className="text-[14px] text-[#5F5B53] font-normal pt-[6px]">
                Get the best course, gain knowledge and
                <br /> shine for your future career.
              </p>
              <div className="flex flex-row justify-between">
                <p className="text-[18px] font-semibold pt-[16px]">$120.75</p>
                <div className="bg-[#FFB900] rounded-full w-[118px] h-[50px] flex flex-row items-center justify-center cursor-pointer z-10">
                  <p className="text-white  text-[14px] font-semibold">
                    Book Now
                  </p>
                </div>
              </div>
            </div>
          </figure>
          <figure className="rounded-xl xl:w-[370px] md:w-[320px] sm:[290px] xl:h-[466px] md:h-[400px] sm:h-[350px] bg-[#ffffff]">
            <img src={Img_2} alt="not found" loading="lazy" />
            <div className="px-[22px]">
              <div className="flex flex-row justify-between pt-[16px]">
                <h3 className="text-[#171100] font-semibold text-[18px]">
                  UI/UX design
                </h3>
                <img src={Rating} alt="not found" />
              </div>
              <p className="text-[14px] text-[#5F5B53] font-normal pt-[6px]">
                Get the best course, gain knowledge and
                <br /> shine for your future career.
              </p>
              <div className="flex flex-row justify-between">
                <p className="text-[18px] font-semibold pt-[16px]">$120.75</p>
                <div className="bg-[#171100] rounded-full w-[118px] h-[50px] flex flex-row items-center justify-center cursor-pointer z-10">
                  <p className="text-white  text-[14px] font-semibold">
                    Book Now
                  </p>
                </div>
              </div>
            </div>
          </figure>
          <figure className="rounded-xl xl:w-[370px] md:w-[320px] sm:[290px] xl:h-[466px] md:h-[400px] sm:h-[350px] bg-[#ffffff]">
            <img src={Img_3} alt="not found" loading="lazy" />
            <div className="px-[22px]">
              <div className="flex flex-row justify-between pt-[16px]">
                <h3 className="text-[#171100] font-semibold text-[18px]">
                  Web App design
                </h3>
                <img src={Rating} alt="not found" />
              </div>
              <p className="text-[14px] text-[#5F5B53] font-normal pt-[6px]">
                Get the best course, gain knowledge and
                <br /> shine for your future career.
              </p>
              <div className="flex flex-row justify-between">
                <p className="text-[18px] font-semibold pt-[16px]">$120.75</p>
                <div className="bg-[#171100] rounded-full w-[118px] h-[50px] flex flex-row items-center justify-center cursor-pointer z-10">
                  <p className="text-white  text-[14px] font-semibold">
                    Book Now
                  </p>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Second;
