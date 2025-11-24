"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { blogsData } from "@/app/api/data";
import blog1 from "@/public/images/blog/service-1.webp";
import blog2 from "@/public/images/blog/service-2.webp";
import blog3 from "@/public/images/blog/service-3.webp";

const recentPosts = [
  {
    image: blog1,
    title: "Entreprenur Mindset: Habits That Drive Success",
    date: "01 Oct, 2025",
  },
  {
    image: blog2,
    title: "Innovate Strategies for Business Growth",
    date: "15 Oct, 2025",
  },
  {
    image: blog3,
    title: "Leadership Lessons for modern Entrepreneurs",
    date: "22 Oct, 2025",
  },
];

const breadcrumbLiks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/blog",
    text: "Blog",
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterdBlog = blogsData.filter(
    (item) =>
      item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      item.description
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <>
      <HeroSub title="Blog" description="" breadcrumbLinks={breadcrumbLiks} />
      <div className="overflow-hidden py-14 lg:py-18 bg-prim-light">
        <div
          className="container flex items-center mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14 gap-5 flex-col lg:flex-row
          "
        >
          <div className="w-full lg:w-[60%] -mt-3">
            {filterdBlog.length > 0 ? (
              filterdBlog.map((item) => (
                <div
                  className="blog-item borde hover:shadow-2xl transition-shadow duration-200 p-3 md:p-5 relative border-border w-full bg-white rounded-2xl group h-auto my-3"
                  key={item.id}
                >
                  <div className="blog-image w-full rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={250}
                      height={250}
                      className="w-full h-80 group-hover:scale-110 transition duration-500 object-cover"
                    />
                    <span className="absolute right-5 top-5 text-white font-chakrapetch bg-white/10 font-semibold backdrop-blur-sm rounded-sm text-2xl text-center p-3">
                      {item.date}
                    </span>
                  </div>
                  <div className="blog-content text-center md:text-start px-2 py-2 space-y-5">
                    <p className="">
                      <span className="border border-dark px-2 rounded-sm">
                        {item.category}
                      </span>
                      &nbsp;By: {item.author}
                    </p>
                    <h4 className="font-unbounded font-medium pb-2">
                      {item.title}
                    </h4>
                    <p className="leading-6 text-pera-dark">
                      {item.description}
                    </p>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="w-fit rounded-full bg-dark text-white ps-4 pe-2 py-2 mx-auto md:mx-0 font-chakrapetch font-semibold flex gap-2 px-2 justify-center items-center tracking-wider group mt-5 lg:mt-0 "
                    >
                      Read More
                      <Icon
                        icon="tabler:arrow-right"
                        width="24"
                        height="24"
                        className="bg-prim text-white rounded-full h-full w-[30px] p-1.5 group-hover:-rotate-45 transition duration-300"
                      />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-10">
                No blogs found matching {searchTerm}
              </p>
            )}
          </div>
          <div className="lg:w-[40%] w-full lg:self-start sticky top-0 right-0">
            <div className="lg:sticky top-20 space-y-5">
              <div className="shadow-lg border border-gray-100 bg-white p-5 rounded-xl">
                <h4 className="text-black pb-5">Search Here</h4>
                <form
                  className="search-box"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Search here"
                    className="border-border w-full rounded-md p-3"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </div>
              <div className="border border-gray-100 shadow-lg bg-white p-5 rounded-xl">
                <h4 className="text-black pb-5">Recent Posts</h4>
                <div className="flex flex-col gap-4">
                  {recentPosts?.map((post, i) => (
                    <div className="flex items-center gap-3" key={i}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={200}
                        height={100}
                        className="w-[250px] h-[100px] object-cover rounded-xl"
                      />
                      <div className="">
                        <h4 className="font-chakrapetch pb-2 text-14 lg:text-18 font-semibold">
                          {post.title}
                        </h4>
                        <span className="uppercase text-pera-dark">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-gray-100 shadow-lg bg-white p-5 rounded-xl">
                <h5 className="text-black font-bold pb-5">Categories</h5>
                <ul className="flex flex-col gap-2">
                  <li className="flex justify-between items-center">
                    <span className="font-semibold text-dark">Business</span>(3)
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold text-dark">Corporate</span>
                    (4)
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold text-dark">Designing</span>
                    (2)
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold text-dark">Innovation</span>
                    (2)
                  </li>
                </ul>
              </div>
              <div className="border-gray-100 shadow-lg bg-white p-5 rounded-xl">
                <h4 className="text-black text-center lg:text-start mb-2">
                  Tags{" "}
                </h4>
                <div className="flex flex-wrap gap-2 p-2">
                  {[
                    "Branding",
                    "Business",
                    "Consulting",
                    "Design",
                    "Innovate",
                    "Lead",
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
      </div>
    </>
  );
}
