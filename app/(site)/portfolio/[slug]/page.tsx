import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import portfolio1 from "@/public/images/protfoliodetails/project-gallery-1.webp";
import portfolio2 from "@/public/images/protfoliodetails/project-gallery-2.webp";
import portfolio3 from "@/public/images/protfoliodetails/project-gallery-3.webp";
import { portfolioData } from "@/app/api/data";

type Props = { params: Promise<{ slug: string }> };

const projectsValue = [
  { label: "Clients", value: "Innovate Iteriors Group" },
  { label: "Bugdet", value: "100M USD" },
  { label: "Location", value: "Maplewood Heights, CA" },
  { label: "Sector", value: "Corporate Bussiness" },
  { label: "Complete Date", value: "Jul 20, 2025" },
];

const PorfolioDetails = ({ params }: Props) => {
  const { slug } = React.use(params);
  const item = portfolioData.find((p) => p.slug === slug);
  if (!item) return notFound();
  const breadcrumbLiks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/porfolioDetail",
      text: "PorfolioDetail",
    },
  ];
  return (
    <>
      <HeroSub
        title="PorfolioDetail"
        description=""
        breadcrumbLinks={breadcrumbLiks}
      />

      <div className="pb-20">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex flex-col lg:flex-row gap-5
          "
        >
          <div className="w-full lg:w-[60%]">
            <div className="bg-white p-5 rounded-2xl space-y-6">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <h4 className="font-unbounded text-center lg:text-start font-medium uppercase text-3xl">
                {item.title}
              </h4>
              <p className="pb-4 text-dark text-16 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente doloremque cumque, quo, porro quas, non quam ut
                voluptatem eius dolore ex at assumenda similique sed magni!
                Accusamus beatae dignissimos temporibus.
              </p>
              <h4 className="font-unbounded font-medium text-center lg:text-start text-3xl">
                Project Overview
              </h4>
              <p className="pb-4 text-pera-dark text16 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                pariatur, reiciendis assumenda facere explicabo soluta neque,
                voluptate unde vel, non magni molestias dolor aut esse
                distinctio ipsa quo sunt nostrum!
              </p>
              <h4 className="font-unbounded text-center lg:text-start font-medium text-3xl">
                Project Gallery
              </h4>
              <p className="pb-4 text-pera-dark text16 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                pariatur, reiciendis assumenda facere explicabo soluta neque.
              </p>
              <Image
                src={portfolio1}
                alt="portfolio-gallery"
                className="rounded-lg"
              />
              <div className="flex flex-col md:flex-row gap-6 max-w-[350px]">
                <Image
                  src={portfolio2}
                  alt="portfolio-gallery"
                  className="rounded-xl"
                />
                <Image
                  src={portfolio3}
                  alt="portfolio-gallery"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] lg:self-start lg:sticky top-20 space-y-5 pb-5 lg:pb-0 lg:py-5">
            <div className=" bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-black pb-5 text-center lg:text-start font-semibold">
                Project Info
              </h4>
              <div className="space-y-6">
                {projectsValue?.map((item, index) => (
                  <div className="flex items-start gap-3" key={index}>
                    <div className="bg-[#007c7c] text-white w-10 h-10 flex items-center justify-center rounded-full shrink-0 ">
                      <Icon icon="mdi:account-star" width="22" height="22" />
                    </div>
                    <div className="">
                      <p className="text-sm text-gray-600">{item.label}</p>
                      <p className="text-base text-gray-900 font-semibold">
                        {item.value}
                      </p>
                    </div>{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-gray-100 shadow-lg bg-white p-5 rounded-xl">
              <h4 className="text-black font-semibold text-center lg:text-start pb-5">
                Tags{" "}
              </h4>
              <div className="flex flex-wrap gap-2 p-2">
                {[
                  "Design",
                  "Branding",
                  "UI/UX",
                  "Development",
                  "Creative",
                  "Marketing",
                ].map((tag) => (
                  <span
                    className="border border-border px-3 py-0.5 hover:bg-pera-dark hover:border-transparent hover:text-white rounded-xl transition-colors duration-300"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PorfolioDetails;
