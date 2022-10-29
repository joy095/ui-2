import React from "react";
import guy_lesson_1 from "../s-img/guy-lesson-1.png";
import play_btn from "../s-img/play_btn.png";
import Card from "../s-img/Card.png";

const First = () => {
  return (
    <div>
      <div className="bg-[#FFFCF4]">
        <header className="flex flex-row items-center justify-between max-w-[1200px] px-2 h-[135px] mx-auto">
          <div className="">
            <h2 className="text-2xl font-sans font-bold">
              Lesson<span className="text-[#FFB900]">.</span>
            </h2>
          </div>
          <div className="flex flex-row items-center space-x-[32px]">
            <h3 className="flex flex-row font-semibold text-[#171100] cursor-pointer">
              <span className="">
                H
                <div className="-pb-[4px] border-b-2 border-[#171100]" />
              </span>
              ome
            </h3>
            <h3 className="h-link">Courses</h3>
            <h3 className="h-link">Pricing</h3>
            <h3 className="h-link">Review</h3>
            <div className="h-[50px] w-[145px] bg-[#171100] rounded-full flex flex-row items-center justify-center cursor-pointer">
              <h3 className="text-white font-semibold text-[16px]">Sign Up</h3>
            </div>
          </div>
        </header>

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[140px]">
          <div className="static">
            <img src={guy_lesson_1} alt="not found" loading="lazy" />
            <span className="relative bottom-[308px] left-[268px]">
              <img src={Card} alt="not found" loading="lazy" />
            </span>
          </div>
          <div className="flex flex-col">
            <div className="max-h-[650px] space-y-[25px] pt-[50px]">
              <h1 className="font-bold text-[58px] text-[#171100] tracking-tight">
                Learn without
                <br /> limits and spread
                <br /> knowledge.
              </h1>
              <p className="text-[18px] text-[#5F5B53];">
                Build new skills for that “this is my year” feeling with
                <br /> courses, certificates, and degrees from world-class
                <br /> universities and companies.
              </p>
              <div className="flex flex-row flex-shrink-0 items-center">
                <div className="h-[65px] w-[180px] bg-[#FFB900] rounded-full flex flex-row items-center justify-center z-10 cursor-pointer">
                  <h3 className="text-white font-semibold text-[#18px] cursor-pointer z-10">
                    See Courses
                  </h3>
                </div>
                <div className="cursor-pointer">
                  <img src={play_btn} loading="lazy" alt="not found" />
                </div>
                <h3 className="text-[#171100] text-[18px] font-semibold">
                  Watch Video
                </h3>
              </div>
              <div>
                <p className="font-normal text-[18px] text-[#5F5B53]">
                  Recent engagement
                </p>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row items-center">
                  <h3 className="text-[#171100] text-[44px] font-bold">50K</h3>
                  <span className="font-normal text-[18px] text-[#5F5B53] pl-2 pt-4">
                    Students
                  </span>
                </div>
                <div className="flex flex-row items-center pl-[30px]">
                  <h3 className="text-[#171100] text-[44px] font-bold">70+</h3>
                  <span className="font-normal text-[18px] text-[#5F5B53] pl-2 pt-4">
                    Courses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
