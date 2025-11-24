import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative overflow-x-hidden h-screen w-full bg-midnight_text">
      <Image
        src="/images/section/pheader-bg.webp"
        alt="Background image for not-found page"
        fill
        className="absolute inset-0 z-0 object-right"
        priority
      />

      <div className="absolute inset-0 bg-black opacity-70 z-5"></div>

      <div className="w-full h-full absolute z-0 rounded-b-[119px] -left-1/4 top-0 bg-linear-to-r from-transparent to-white/10"></div>

      <div className="container relative mx-auto px-4 md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-xl) z-10 flex flex-col justify-center items-center text-center text-white h-full">
        <div className="solution-icon border mt-10 border-dark w-[200px] h-[200px] rounded-full flex justify-center items-center prim-grident mb-6">
          <Icon
            icon="tabler:error-404"
            width="100"
            height="100"
            className="text-white"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-chakrapetch">
          Page Not Found
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl font-poppins">
          Oops! The page you´re looking for doesn´t exist. Let´s get you back on
          track.
        </p>

        <Link
          href="/"
          className="text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group"
        >
          Go Home
          <Icon
            icon="tabler:arrow-right"
            width="24"
            height="24"
            className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
