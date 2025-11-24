import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { blogsData } from "@/app/api/data";
import blog1 from "@/public/images/blog/service-1.webp";
import blog2 from "@/public/images/blog/service-2.webp";
import blog3 from "@/public/images/blog/service-3.webp";

const recentPosts = [
  {
    image: blog1,
    title: "Entrepenur Mindset: Habits That Drive Success",
    date: "01 Oct, 2025",
  },
  {
    image: blog2,
    title: "Innovative Strategies for Business Growth",
    date: "15 Oct, 2025",
  },
  {
    image: blog3,
    title: "Leadership Lessons for Modern Entreprenurs",
    date: "22 Oct, 2025",
  },
];

import blog01 from "@/public/images/blogdetails/blog-1.webp";
import blog02 from "@/public/images/blogdetails/blog-2.webp";

export const metadata: Metadata = {
  title: "Blog Details | Axora",
};

type Props = { params: Promise<{ slug: string }> };

const BlogDetails = ({ params }: Props) => {
  const { slug } = React.use(params);
  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) return notFound();
  const breadcrumbLiks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/blogDetails",
      text: "BlogDetails",
    },
  ];
  return (
    <>
      <HeroSub
        title="BlogDetails"
        description=""
        breadcrumbLinks={breadcrumbLiks}
      />

      <section className="pb-20">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex flex-col lg:flex-row gap-5
          "
        >
          <div className="w-full lg:w-[60%]">
            <div className="bg-white p-5 rounded-xl">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <h4 className="font-unbounded font-medium uppercase text-3xl py-5">
                {blog.title}
              </h4>
              <p className="pb-4 text-pera-dark text-16 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati necessitatibus praesentium laboriosam id
                exercitationem aliquam natus possimus, ex reprehenderit iste
                sed, dolorem animi magnam, porro ipsum velit. Dolores, assumenda
                architecto.
              </p>
              <p className="pb-4 text-pera-dark text-16 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati necessitatibus praesentium laboriosam id
                exercitationem aliquam natus possimus, ex reprehenderit iste
                sed, dolorem animi magnam, porro ipsum velit. Dolores, assumenda
                architecto.
              </p>
              <div className="border border-border rounded-lg p-5 bg-dark/30">
                <Icon
                  icon="tabler:quote"
                  width="60"
                  height="60"
                  className="mb-10"
                />
                <h5 className="text-black font-semibold font-chakrapetch leading-8">
                  The true entrepreneur is a doer, not a dreamer. Innovation is
                  the catalyst that transforms ideas into reality. In today´s
                  fast-paced world, success depends not on just surviving
                  change.
                </h5>
                <span className="w-full text-end block font-semibold font-unbounded">
                  - Kevin Hooks
                </span>
              </div>
              <h4 className="font-unbounded py-5">
                Kye lessons of Business Potential
              </h4>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam nihil distinctio nulla, eaque, voluptas, officia
                assumenda veritatis error deleniti accusamus quae voluptates
                exercitationem? Soluta omnis dolore suscipit blanditiis, minima
                fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque voluptates tempora quis aut excepturi doloremque sapiente
                saepe illum sed, quisquam incidunt minima, explicabo ducimus,
                voluptatibus architecto odit ipsam at! Odio.
              </p>
              <div className="flex flex-wrap md:flex-nowrap py-8 gap-3">
                <Image
                  src={blog01}
                  alt="blog-01"
                  width={200}
                  height={200}
                  className="w-full rounded-lg h-full"
                />
                <Image
                  src={blog02}
                  alt="blog-01"
                  width={200}
                  height={200}
                  className="w-full rounded-lg h-full"
                />
              </div>
              <p className="pb-4 text-pera-dark text-16 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati necessitatibus praesentium laboriosam id
                exercitationem aliquam natus possimus, ex reprehenderit iste
                sed, dolorem animi magnam, porro ipsum velit. Dolores, assumenda
                architecto.
              </p>
              <ul className="grid grid-cols-2 gap-5">
                <li className="flex items-center gap-2">
                  <Icon
                    icon="material-symbols:check-rounded"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full p-0.5"
                  />
                  <span>Embrace Innovation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="material-symbols:check-rounded"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full p-0.5"
                  />
                  <span>Scalable Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="material-symbols:check-rounded"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full p-0.5"
                  />
                  <span>Customer Approach</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="material-symbols:check-rounded"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full p-0.5"
                  />
                  <span>Resilence</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="material-symbols:check-rounded"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full p-0.5"
                  />
                  <span>Embrace Innovation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="material-symbols:check-rounded"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full p-0.5"
                  />
                  <span>Scalable Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="material-symbols:check-rounded"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full p-0.5"
                  />
                  <span>Customer Approach</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="material-symbols:check-rounded"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full p-0.5"
                  />
                  <span>Resilence</span>
                </li>
              </ul>
              <h4 className="font-unbounded pb-5 pt-8">Leave a Comment</h4>
              <p className="text-pera-light font-light pb-3">
                Your email address will not be published. Required fields are
                maked
              </p>
              <form className="">
                <textarea
                  className="border border-border p-5 mb-5 resize-none"
                  placeholder="Enter Your Comments"
                  rows={8}
                  required
                ></textarea>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <input
                    type="text"
                    className="border border-border px-5 h-[45px]"
                    required
                    placeholder="Enter Name"
                  />
                  <input
                    type="text"
                    className="border border-border px-5 h-[45px]"
                    required
                    placeholder="Enter Email"
                  />
                  <input
                    type="text"
                    className="border border-border px-5 h-[45px]"
                    required
                    placeholder="Enter Website"
                  />
                </div>
                <div className="space-x-2 py-2 mt-2">
                  <input type="checkbox" />
                  <span className="">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </span>
                </div>
                <button className="w-fit mt-2 text-white bg-dark h-[50px] text-16 lg:text-sm rounded-full font-chakrapetch font-semibold flex gap-2 pe-2 ps-4 py-2 justify-center items-center tracking-wider group cursor-pointer">
                  Post A Comment
                  <Icon
                    icon="tabler:arrow-right"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full h-full w-[30px] p-1.5 group-hover:-rotate-45 transition duration-300"
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="lg:w-[40%] w-full lg:self-start lg:sticky top-20 space-y-5 py-5">
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
              <div className="text-black pb-5">Categories</div>
              <ul className="flex flex-col gap-2">
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-dark">Business</span>(3)
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-dark">Corporate</span>(4)
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-dark">Designing</span>(2)
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-dark">Innovation</span>(2)
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
      </section>
    </>
  );
};
export default BlogDetails;
