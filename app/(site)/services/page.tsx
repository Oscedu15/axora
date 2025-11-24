import HeroSub from "@/components/SharedComponents/HeroSub";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { servicesData } from "@/app/api/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Axora",
};

export default function Services() {
  const breadcrumbLiks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/services",
      text: "Services",
    },
  ];
  return (
    <>
      <HeroSub
        title="Services"
        description=""
        breadcrumbLinks={breadcrumbLiks}
      />

      <div className="overflow-hidden py-14 lg:py-18 bg-prim-light">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14
          "
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData?.map((service, index) => (
              <div
                className="service-item group hover:bg-prim cursor-pointer transition-all duration-500 bg-white rounded-2xl shadow-xl hover:shadow-2xl flex flex-col gap-2 p-8"
                key={index}
              >
                <div className="service-cion border border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360 mb-10 md:mb-16 mx-auto md:mx-0">
                  <Icon
                    icon={service.icon}
                    width="40"
                    height="40"
                    className="group-hover:text-white transition-colors duration-500"
                  />
                </div>
                <h4 className="font-unbounded  text-center md:text-start font-medium text-18 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h4>
                <p className="text-pera-dark  text-center md:text-start font-normal group-hover:text-white transition-colors duration-500">
                  {service.description}
                </p>
                <Link
                  href={service.ref || "#"}
                  className="bg-dark text-white px-2 py-1.5 text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 justify-center items-center tracking-wider group group-hover:text-dark group-hover:bg-white transition-colors duration-500 mt-auto mx-auto md:mx-0"
                >
                  Learn More
                  <Icon
                    icon="tabler:arrow-right"
                    width="24"
                    height="24"
                    className="bg-prim text-white  rounded-full h-full w-[35px] p-1.5 transition-transform duration-500 group-hover:-rotate-45"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
