"use client";
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import HeroSub from "@/components/SharedComponents/HeroSub";

type Props = { params: Promise<{ slug: string }> };

const BlogDetails = ({ params }: Props) => {
  const { slug } = React.use(params);
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

      <div className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14
          "
        ></div>
      </div>
    </>
  );
};
export default BlogDetails;
