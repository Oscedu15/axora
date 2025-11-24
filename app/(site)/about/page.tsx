import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Team from "@/components/Home/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Axora",
};

export default function About() {
  const breadcrumbLiks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/about",
      text: "About",
    },
  ];
  return (
    <>
      <HeroSub title="About" description="" breadcrumbLinks={breadcrumbLiks} />
      <div className="overflow-hidden py-14 lg:py-18 bg-prim-light">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14
          "
        >
          <div className="about-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row">
            <div className="">
              <span className="sub-title text-14 font-chakrapetch capitalize ps-5 pe-3 bg-prim text-white py-1 rounded-xl relative">
                Choose the Best
              </span>
              <h2 className="w-full text-center lg:text-start lg:3/4 mt-4 font-chakrapetch max-w-[600px] lg:text-35 font-semibold">
                Empowering Business with Expertise.
              </h2>
            </div>
            <Link
              href="/contact"
              className="text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center mx-auto lg:mx-0 mt-6 lg:mt-0
            tracking-wider group"
            >
              Request A Call
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45
            transition-all duration-300"
              />
            </Link>
          </div>
          <div className="about-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            <div
              className="about-item w-full bg-white shadow-xl p-5 rounded-xl space-y-6
                 border group hover:bg-prim transition-all duration-500 flex flex-col justify-between"
            >
              <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 mt-4 text-center">
                Innovative Solutios
              </h4>
              <div className="solution-icon border mt-4 border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360 mb-12 mx-auto md:mx-0">
                <Icon
                  icon="famicons:bulb-outline"
                  width="40"
                  height="40"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <p className="text-pera-dark text-center font-normal group-hover:text-white transition-colors duration-500">
                We stay ahead of the curve, leveraging cutting-edge technologies
                and strategies to keep you competitive in a marketplace.
              </p>
            </div>
            <div
              className="about-item w-full bg-white shadow-xl p-5 rounded-xl space-y-6
                 border group hover:bg-prim transition-all duration-500 flex flex-col justify-between"
            >
              <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 mt-4 text-center">
                Innovative Solutios
              </h4>
              <div className="solution-icon border mt-4 border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360 mb-12  mx-auto md:mx-0">
                <Icon
                  icon="tdesign:location"
                  width="40"
                  height="40"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <p className="text-pera-dark text-center font-normal group-hover:text-white transition-colors duration-500">
                We stay ahead of the curve, leveraging cutting-edge technologies
                and strategies to keep you competitive in a marketplace.
              </p>
            </div>
            <div
              className="about-item w-full text-center bg-white shadow-xl p-5 rounded-xl space-y-6
                 border group hover:bg-prim transition-all duration-500 flex flex-col justify-between"
            >
              <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 mt-4 text-center">
                Award-Winning Expertise
              </h4>
              <div className="solution-icon border mt-4 border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360 mb-12 mx-auto md:mx-0">
                <Icon
                  icon="streamline-plump:customer-support-3"
                  width="40"
                  height="40"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <p className="text-pera-dark text-center font-normal group-hover:text-white transition-colors duration-500">
                We stay ahead of the curve, leveraging cutting-edge technologies
                and strategies to keep you competitive in a marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-14 lg:py-18 bg-prim-light">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex lg:flex-row
        flex-col items-start gap-5"
        >
          <div className="content w-full lg:w-[55%]">
            <div className="">
              <span className="sub-title text-14 font-chakrapetch capitalize ps-5 pe-3 bg-prim text-white py-1 rounded-xl relative">
                Choose the Best
              </span>
              <h2 className="w-full text-center lg:text-start lg:w-3/4 mt-4 font-chakrapetch max-w-[600px] lg:text-35 font-semibold">
                Driving Innovation and Excellence for Sustainable Corporate
                Succes Worlwide.
              </h2>
              <div className="flex lg:flex-row  flex-col gap-4 mt-4">
                <div className="bg-white p-5 text-center lg:text-start  rounded-xl">
                  <h4 className="font-unbounded text-xl pb-3">Our Mission</h4>
                  <p className="capitalize pb-5">
                    Our mission is empower businesses through innovate best
                    solution, exceptional service.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-1">
                      <Icon icon="tabler:arrow-right" width="12" height="24" />
                      Exceptonial Customer
                    </li>
                    <li className="flex gap-1">
                      <Icon icon="tabler:arrow-right" width="12" height="24" />
                      Exceptonial Customer
                    </li>
                    <li className="flex gap-1">
                      <Icon icon="tabler:arrow-right" width="12" height="24" />
                      Exceptonial Customer
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-5 text-center lg:text-start rounded-xl">
                  <h4 className="font-unbounded text-xl pb-3">Our Vision</h4>
                  <p className="capitalize pb-5">
                    Our mission is empower businesses through innovate best
                    solution, exceptional service.
                  </p>
                  <ul className="space-y-2 5">
                    <li className="flex gap-1">
                      <Icon icon="tabler:arrow-right" width="12" height="24" />
                      Exceptonial Customer
                    </li>
                    <li className="flex gap-1">
                      <Icon icon="tabler:arrow-right" width="12" height="24" />
                      Exceptonial Customer
                    </li>
                    <li className="flex gap-1">
                      <Icon icon="tabler:arrow-right" width="12" height="24" />
                      Exceptonial Customer
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="#"
                className="text-white bg-dark h-[50px] text-16 lg:text-sm w-full rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center mx-auto lg:mx-0 mt-6
            tracking-wider group"
              >
                Learn More About Us
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
          <div className="image lg:w-[45%] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/about/about-01.webp"
              alt="about-image"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <Team limit={4} />
    </>
  );
}
