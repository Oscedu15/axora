import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Commitment: React.FC = () => {
  const tags = [
    "Growth",
    "Success",
    "Innovate",
    "Impact",
    "Lead",
    "Focus",
    "Tech",
  ];
  return (
    <>
      <section className="bg-light overflow-hidden py-14 lg:py-18 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-8">
          <div className="commitment-content bg-white p-8 rounded-2xl">
            <div className="">
              <span className="sub-title mx-auto text-14 font-chakrapetch capitalize ps-5 pe-3 bg-prim text-white py-1 rounded-xl relative">
                Chose the Best
              </span>
              <h2 className="text-center lg:text-start mt-4 font-chakrapetch mx-auto lg:text-35 font-semibold">
                Committed Delivering Measurable Results and Building from the
                Lasting Relationships through out trust and innovation and
                corporate shared
              </h2>
            </div>
            <Link
              href="/services"
              className="text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center mx-auto lg:mx-0 mt-5
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
          <div
            className="grid gap-8 grid-cols-1 lg:grid-cols-2
          xl:grid-cols-3"
          >
            <div className="w-full bg-white p-8 rounded-2xl">
              <h2 className="font-semibold text-center lg:text-start lg:text-24 font-chakrapetch mb-5">
                Rebranding Strategy for a Growing
              </h2>
              <div className="w-fit flex items-center pt-8 pb-10 overflow-hidden">
                <Image
                  src="/images/commitment/user1.jpg"
                  alt="avatar-image"
                  className="object-cover w-[100px ] h-[100px] rounded-full scale-105 border-4 border-white
                 shadow-xl translate-x-3"
                  width={100}
                  height={200}
                />
                <Image
                  src="/images/commitment/user2.jpg"
                  alt="avatar-image"
                  className="object-cover w-[120px ] h-[120px] scale-110 rounded-full border-4 border-white shadow-xl z-2"
                  width={100}
                  height={200}
                />
                <Image
                  src="/images/commitment/user3.jpg"
                  alt="avatar-image"
                  className="object-cover w-[100px ] h-[100px] rounded-full border-4 border-white shadow-xl -translate-x-3 z-0"
                  width={100}
                  height={200}
                />
              </div>
              <div className="flex gap-5">
                <span className="text-5xl font-semibold">200</span>
                <p className="text-pera-dark">
                  Satisfied customers work with our axora.
                </p>
              </div>
            </div>
            <div className="w-full bg-white p-8 rounded-2xl">
              <h2 className="font-semibold lg:text-24  text-center lg:text-start font-chakrapetch mb-5">
                Rebranding Strategy for a Growing
              </h2>
              <div className="w-full h-[230px]">
                <Image
                  src="/images/commitment/strategy-chart.webp"
                  alt="strategy-chart-image"
                  className="w-full h-full object-contain mx-auto"
                  width={350}
                  height={350}
                />
              </div>
            </div>
            <div className="w-full  text-center lg:text-start bg-white p-8 rounded-2xl flex justify-between items-start flex-col">
              <div className="mb-8">
                <h2 className="font-semibold lg:text-24 font-chakrapetch pb-1">
                  Rebranding Strategy for a Growing
                </h2>
                <p className="">
                  Our team are always available to addressed our concerns,
                  providing quick solution
                </p>
              </div>
              <ul className="flex flex-wrap gap-3 w-full">
                {tags?.map((tag, index) => (
                  <li
                    className="border border-white rounded-md overflow-hidden cursor-pointer"
                    key={index}
                  >
                    <span className="bg-black/10 backdrop-blur-sm px-3 py-1 inline-block text-sm font-medium">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commitment;
