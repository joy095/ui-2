import React from "react";
import Images from "../s-img/Images.png";
import Rectangle_11 from "../s-img/Rectangle_11.png";

const Forth = () => {
  return (
    <div className="bg-[#E5E5E5] h-[1480px] flex flex-col pt-[200px]">
      <div className="flex flex-row mx-auto h-[438px] items-center xl:w-[1170px] md:-[1000px] sm:w-[800px] gap-x-10">
        <div className="grid grid-cols-2 gap-x-32">
          <div className="h-[438px] w-[570px]">
            <img
              className="h-[438px] xl:w-[570px] md:w-[500px] sm:w-[400px]"
              src={Images}
              alt="not found"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#171100] font-bold text-[38px] tracking-tight">
              Learner outcomes through
              <br /> our awesome platform
            </h3>
            <p className="text-[16px] text-[#5F5B53] leading-7">
              87% of people learning for professional development
              <br />
              report career benefits like getting a promotion, a raise, or
              <br /> starting a new career
              <br />
              <br />
              Lesson Impact Report (2022)
            </p>
            <div className="pt-[38px] grow">
              <div className="bg-[#FFB900] rounded-full w-[118px] h-[50px] flex flex-row items-center justify-center cursor-pointer z-10">
                <p className="text-white  text-[14px] font-semibold">
                  Book Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row mx-auto h-[440px] items-center xl:w-[1170px] md:-[1000px] sm:w-[800px] pt-[200px]">
        <div className="flex flex-row grow items-center justify-between h-[438px] w-[570px]">
          <div className="">
            <h1 className="font-bold text-[38px] text-[#171100] leading-10">
              Take the next step toward your
              <br /> personal and professional goals
              <br /> with Lesson.
            </h1>
            <p className="leading-7 text-[16px] text-[#5F5B53]">
              Take the next step toward. Join now to receive personalized and
              more
              <br /> recommendations from the full Coursera catalog.
            </p>
            <div className="pt-[50px] grow">
              <div className="bg-[#FFB900] rounded-full w-[118px] h-[50px] flex flex-row items-center justify-center cursor-pointer z-10">
                <p className="text-white  text-[14px] font-semibold">
                  Join Now
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={Rectangle_11} alt="not found" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forth;
