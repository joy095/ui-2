import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom";
import Rating from "../s-img/Rating.png";

const Ecom = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/fetch")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-[#FFFCF4]">
      <div className="flex flex-col max-w-[1200px] items-center mx-auto">
        <h1 className="pt-[50px] font-bold text-[38px] text-[#130606]">Ecom</h1>
        <Link to="/admin">
          <p className="text-[20px] bg-yellow-400 rounded-full p-2 text-white font-semibold">
            Admin panel
          </p>
        </Link>

        <Carousel
          className="max-w-[1200px]"
          responsiveLayout={[
            {
              breakpoint: 1200,
              cols: 4,
            },
            {
              breakpoint: 990,
              cols: 3,
            },
          ]}
          mobileBreakpoint={670}
          rows={1}
          loop
          cols={3}
        >
          {posts.map((data) => (
            <Carousel.Item key={data.id}>
              <div className="flex flex-row items-center max-w-[1200px] justify-center gap-y-[55px] h-[600px] mx-auto">
                <figure className="rounded-xl xl:w-[370px] md:w-[320px] sm:[290px] xl:h-[466px] md:h-[400px] sm:h-[350px] bg-[#9fd0ce9f]">
                  <img
                    className="object-cover rounded-t-xl h-[273px] w-[370px]"
                    src={data.image}
                    alt="not found"
                    loading="lazy"
                  />
                  <div className="px-[22px]">
                    <div className="flex flex-row justify-between pt-[16px]">
                      <h3 className="text-[#171100] font-semibold text-[18px]">
                        {data.p_name}
                      </h3>
                      <img src={Rating} alt="not found" />
                    </div>
                    <p className="text-[14px] text-[#5F5B53] font-normal pt-[6px]">
                      {data.details}
                    </p>
                    <div className="flex flex-row justify-between">
                      <p className="text-[18px] font-semibold pt-[16px]">
                        ${data.price}
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Ecom;
