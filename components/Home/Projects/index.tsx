"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { projectsData } from "@/app/api/data";

const Projects: React.FC = () => {
  return (
    <>
      <section className="bg-light overflow-hidden py-14 lg:py-18 xl:22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="proccess-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row">
            <div className="">
              <span className="sub-title text-14 font-chakrapetch capitalize ps-5 pe-3 bg-prim text-white py-1 rounded-xl relative">
                Our Projects
              </span>
              <h2 className="w-full text-center lg:text-start lg:3/4 mt-4 font-chakrapetch max-w-[600px] lg:text-35 font-semibold">
                Breaking Boundaries, Building Dreams.
              </h2>
            </div>
          </div>
          <div className="projects-swiper relative mt-10">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1.5}
              loop={true}
              centeredSlides={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              allowTouchMove={false}
              breakpoints={{
                1400: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              className="companies-swiper relative"
            >
              {projectsData?.map((project, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="project-item flex flex-col sm:flex-row justify-center items-center
                        w-full bg-white shadow-2xl p-5 rounded-xl gap-5 h-auto lg:h-[550px]"
                  >
                    <div className="project-image w-full sm:w-[50%] h-full">
                      <Image
                        src={project.image}
                        width={350}
                        height={350}
                        className="w-full h-full object-cover rounded-xl"
                        alt="project-item"
                      />
                    </div>
                    <div className="project-content w-full sm:w-[50%]">
                      <span className="bg-white border border-prim rounded-sm px-2 text-prim font-chakrapetch font-medium">
                        {project.category}
                      </span>
                      <h4 className="pt-2 pb-4 text-16 lg:text-24 font-unbounded">
                        {project.title}
                      </h4>
                      <p className="text-prim-dark font-normal text-14 pb-5">
                        {project.description}
                      </p>
                      <Link
                        href={project.link}
                        className="text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center mx-auto lg:mx-0 mt-6 lg:mt-0
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

export default Projects;
