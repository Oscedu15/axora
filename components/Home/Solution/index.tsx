"use client";

import React from "react";
import Link from "next/link";
import { solutionData } from "@/app/api/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Solution: React.FC = () => {
  return (
    <>
      <section className="bg-light overflow-hidden py-14 lg:py-18 xl:22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="solution-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row">
            <div className="">
              <span className="sub-title text-14 font-chakrapetch capitalize ps-5 pe-3 bg-prim text-white py-1 rounded-xl relative">
                Our Solution
              </span>
              <h2 className="w-full text-center lg:text-start lg:3/4 mt-4 font-chakrapetch max-w-[600px] lg:text-35 font-semibold">
                Tailor-Made Business Solutions for Modern Corporates
              </h2>
            </div>
            <Link
              href="/about"
              className="text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center mx-auto lg:mx-0 mt-6 lg:mt-0
            tracking-wider group"
            >
              Explore More
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45
            transition-all duration-300"
              />
            </Link>
          </div>
          <div className="relative mt-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="solution-wrapper"
            >
              {solutionData?.map((solution, index) => (
                <SwiperSlide key={index} className="">
                  <div
                    className="solution-item w-full bg-white shadow-xl p-5 space-y-6 rounded-xl
                 border group hover:bg-prim transition-all duration-500 h-[400px] flex flex-col justify-between"
                  >
                    <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 mt-4 text-center">
                      {solution.title}
                    </h4>
                    <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                      <Icon
                        icon={solution.icon}
                        width="32"
                        height="32"
                        className="group-hover:text-white transition-colors duration-500"
                      />
                    </div>
                    <p className="text-pera-dark text-center font-normal group-hover:text-white transition-colors duration-300">
                      {solution.description}
                    </p>
                    <Link
                      href="#"
                      className="hover:text-white text-dark bg-white hover:bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center
            tracking-wider group"
                    >
                      Learn More
                      <Icon
                        icon="tabler:arrow-right"
                        width="24"
                        height="24"
                        className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45
            transition-all duration-300"
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;
