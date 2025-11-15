"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { companiesData } from "@/app/api/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Companies: React.FC = () => {
  return (
    <>
      <section className="bg-light overflow-hidden py-14 lg:py-18 xl:22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="company-content text-center">
            <div className="">
              <span className="sub-title  mx-auto text-14 font-chakrapetch capitalize ps-5 pe-3 bg-prim text-white py-1 rounded-xl relative">
                Our Partners
              </span>
              <h2 className="w-full text-center lg:3/4 mt-4 font-chakrapetch mx-auto lg:text-35 font-semibold">
                Join Over{" "}
                <span className="bg-dark text-white px-2 rounded-sm">
                  1000+
                </span>
                Companie with Axora Here
              </h2>
            </div>
          </div>
          <div className="relative mt-10">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={5}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              allowTouchMove={false}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              className="companies-swiper relative"
            >
              {companiesData?.map((company, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="companies-item w-full h-[100px] bg-white shadow-xl px-8 rounded-xl
                  flex items-center justify-center cursor-pointer"
                  >
                    <Image
                      src={company.image}
                      alt={`brand-${index + 1}`}
                      width={150}
                      height={80}
                      className="object-contain"
                    />
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

export default Companies;
