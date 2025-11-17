import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { blogsData } from "@/app/api/data";

const Blog: React.FC = () => {
  return (
    <>
      <section
        className="overflow-hidden py-14 lg:py-18
      xl:py-22 bg-prim-light"
      >
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14
          "
        >
          <div className="text-center mb-10 blog-content">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Our Blogs
            </span>
            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold mb-5">
              Startegies and Insights.
            </h2>
          </div>
          <div className="blog-wrapper grid lg:grid-cols-2 gap-5">
            {blogsData?.slice(0, 1).map((item) => (
              <div
                className="blog-item w-full shadow-lg bg-white p-5 rounded-2xl group h-auto md:h-[640px]"
                key={item.id}
              >
                <div className="blog-image w-full rounded-2xl overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={250}
                    height={250}
                    className="w-full h-80 group-hover:scale-110 transition duration-300 object-cover"
                  />
                  <span className="absolute right-5 bottom-5 max-w-sm text-white font-chakrapetch bg-white/10 font-semibold backdrop-blur-sm rounded-sm text-2xl text-center p-3">
                    {item.date}
                  </span>
                </div>
                <div className="blog-content px-2 py-5 space-y-5">
                  <p className="">
                    <span
                      className="border border-border px-2 rounded-sm
                        "
                    >
                      {item.category}
                    </span>
                    by: {item.author}
                  </p>
                  <h4 className="font-unbounded font-medium pb-2">
                    {item.title}
                  </h4>
                  <p className="leading-6 text-pera dark">{item.description}</p>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 px-2 justify-center items-center tracking-wider group mt-5 lg:mt-0"
                  >
                    Read More
                    <Icon
                      icon="tabler:arrow-right"
                      width="24"
                      height="24"
                      className="bg-prim text-white rounded-full h-full w-[30px] p-1.5 group-hover:-rotate-45 transition duration-300 "
                    />
                  </Link>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-1 h-auto md:h-[620px] gap-5">
              {blogsData?.slice(2, 4).map((item) => (
                <div
                  className="blog-item h-auto md:h-[310px] w-full flex flex-wrap md:flex-nowrap shadow-lg bg-white p-5 rounded-2xl group overflow-hidden "
                  key={item.id}
                >
                  <div className="blog-image w-full rounded-2xl relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={250}
                      height={250}
                      className="w-full h-full group-hover:scale-110 transition duration-500 object-cover"
                    />
                    <span className="absolute right-5 bottom-5 max-w-sm text-white bg-white/10 font-semibold backdrop-blur-sm rounded-sm text-2xl text-center p-3 font-chakrapetch ">
                      {item.date}
                    </span>
                  </div>
                  <div className="blog-content px-2 py-5 space-y-5">
                    <p className="">
                      <span className="border border-border px-2 rounded-sm">
                        {item.category}
                      </span>
                      by: {item.author}
                    </p>
                    <h4 className="font-unbounded pb-2 text-20 font-medium">
                      {item.title}
                    </h4>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 px-2 justify-center items-center tracking-wider group mt-5 lg:mt-0"
                    >
                      Read More
                      <Icon
                        icon="tabler:arrow-right"
                        width="24"
                        height="24"
                        className="bg-prim text-white rounded-full h-full w-[30px] p-1.5 group-hover:-rotate-45 transition duration-300 "
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
