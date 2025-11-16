"use client";
import React from "react";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { testimonialData } from "@/app/api/data";

const Testimonial: React.FC = () => {
  return (
    <>
      <section className="py-4 overflow-hidden lg:py-18 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 spcae-y-14">
          <div className="testimonials-item w-full flex h-auto lg:h-[550px] gap-5 flex-wrap lg:flex-nowrap">
            <div className="testimonials-image w-full lg:w-1/2 overflow-hidden h-full rounded-2xl relative">
              <Image
                src="/images/testimonials/testimonial-img.jpg"
                alt="testimonial-image"
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
              <div className="rating-box absolute bottom-5 right-5 bg-dark text-white max-w-2xl w-[200px] h-[150px] flex flex-col justify-between items-start p-3 rounded-2xl">
                <span className="text-5xl font-unbounded">4.9</span>
                <div className="">
                  <div className="star flex">
                    <Icon
                      icon="material-symbols:star-rounded"
                      width="24"
                      height="24"
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width="24"
                      height="24"
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width="24"
                      height="24"
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width="24"
                      height="24"
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width="24"
                      height="24"
                      className="text-yellow-400"
                    />
                  </div>
                  <p className="">(50 + Clients Review)</p>
                </div>
              </div>
              <h4 className="absolute text-white ">Hear from Our Customers</h4>
            </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="w-full lg:w-1/2 h-full"
              modules={[Autoplay]}
              centeredSlides={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
            >
              {testimonialData?.map((item) => (
                <SwiperSlide key={item.id} className="w-full h-full">
                  <div className="testimonials-content w-full bg-white shadow-lg rounded-2xl flex flex-col justify-center items-start p-8 h-full">
                    <Icon
                      icon="iconoir:quote-solid"
                      width={90}
                      height={90}
                      className="text-dark mb-5"
                    />
                    <p className="text-pera-dark text-16 leading-7 md:text-22 md:leading-8 pb-8 border-b-2 border-dashed">
                      {item.text}
                    </p>
                    <div className="user flex items-center gap-2 pt-8">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={90}
                        height={90}
                        className="rounded-full object-cover h-[70px] w-[70px]"
                      />
                      <div className="user-info">
                        <h4 className="text-18">{item.name}</h4>
                        <span className="text-pera-light">{item.position}</span>
                      </div>
                    </div>
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

export default Testimonial;
