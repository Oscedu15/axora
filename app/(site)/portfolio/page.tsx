import { portfolioData } from "@/app/api/data";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | Axora",
};

type PortfolioItem = {
  image: string;
  slug: string;
  title: string;
  category: string;
};

export default function Porfolio() {
  const breadcrumbLiks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/portfolio",
      text: "Portfolio",
    },
  ];

  const grouped: PortfolioItem[][] = portfolioData.reduce(
    (acc: PortfolioItem[][], _, i) => {
      if (i % 2 === 0) acc.push(portfolioData.slice(i, i + 2));
      return acc;
    },
    []
  );
  return (
    <>
      <HeroSub
        title="Portfolio"
        description=""
        breadcrumbLinks={breadcrumbLiks}
      />

      <div className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl)
           md:max-w-(--breakpoint-md) px-4 space-y-6
          "
        >
          {grouped?.map((pair, rowIndex) => (
            <div
              className="portfolio-wrapper w-full flex flex-col lg:flex-row gap-5"
              key={rowIndex}
            >
              {pair?.map((item, i) => {
                const isLarge =
                  (rowIndex % 2 === 0 && i == 0) ||
                  (rowIndex % 2 !== 0 && i == 1);
                return (
                  <Link
                    key={i}
                    href={`/portfolio/${item.slug}`}
                    className={`relative rounded-2xl overflow-hidden group cursor-pointer
                   ${isLarge ? "w-full lg:w-[70%]" : "w-full lg:w-[30%]"}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={isLarge ? 800 : 600}
                      height={isLarge ? 500 : 400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute
                     inset-0 bg-black/40 
                     group-hover:bg-black/60 transition-all
                     duration-300"
                    />

                    <div
                      className={`absolute
                       text-white
                   ${isLarge ? "bottom-8 left-8 " : "bottom-4 left-4"}`}
                    >
                      <span className="border border-border px-2 rounded-sm">
                        {item.category}
                      </span>
                      <h3
                        className={`font-unbounded font-medium mt-2 ${
                          isLarge ? "text-3xl" : "text-lg"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
