import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import Logo from "../Header/Logo";
import Image from "next/image";
import { footerLinks } from "@/app/api/data";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="pt-10 relative bg-white">
        <div className="container m-auto px-4 max-w-7xl">
          <div className="flex  flex-col justify-between lg:flex-row lg:items-center border-b pb-10 mb-10 gap-6">
            <div className="flex flex-wrap gap-6 md:flex-nowrap justify-center lg:justify-start">
              <div className="flex items-start text-foot-text text-[15px]">
                <Icon
                  icon="weui:location-outlined"
                  className="w-6 h-6 mr-3 mt-1"
                />
                <div className="flex flex-col text-center md:text-start">
                  <span className="">FD-3. Procube Complex</span>
                  <span className="">Vadodara. Gujarat</span>
                </div>
              </div>
              <div className="flex items-center md:items-start text-foot-text">
                <Icon
                  icon="majesticons:phone-retro-line"
                  className="w-6 h-6 mr-1"
                />
                <Link href="#" className="text-[15px] hover:text-prim">
                  +1 (123) 123 1234
                </Link>
              </div>
              <div className="flex items-start text-foot-text">
                <Icon icon="clarity:email-line" className="w-6 h-6 mr-1" />
                <Link href="#" className="text-[15px] hover:text-prim">
                  example.web@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                href="#"
                className="text-muted hover:text-prim transition-colors"
              >
                <Icon icon="fe:facebook" width="28" height="28" />{" "}
              </Link>
              <Link
                href="#"
                className="text-muted hover:text-prim transition-colors"
              >
                <Icon icon="fa6-brands:square-twitter" width="28" height="28" />{" "}
              </Link>
              <Link
                href="#"
                className="text-muted hover:text-prim transition-colors"
              >
                <Icon icon="fa6-brands:linkedin" width="28" height="28" />{" "}
              </Link>
              <Link
                href="#"
                className="text-muted hover:text-prim transition-colors"
              >
                <Icon icon="cbi:youtube-alt" width="30" height="30" />{" "}
              </Link>
            </div>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-12 gap-8 text-center md:text-start"
          >
            <div className="lg:col-span-3">
              <div className="text-black pb-5">
                <Logo />
              </div>
              <p className="text-[14px] leading-6 text-foottext">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                amet nostrum vel iste eveniet minus officia numquam. Tempora
                corrupti natus minima deleniti! Maiores aspernatur harum natus
                nostrum? Cupiditate, fugit quidem?
              </p>
              <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start pt-5">
                <Image
                  src="/images/footer/award-logo-1.webp"
                  alt="award-logo-1"
                  width={70}
                  height={70}
                  className="p-2 cursor-pointer bg-black"
                />
                <Image
                  src="/images/footer/award-logo-2.webp"
                  alt="award-logo-2"
                  width={70}
                  height={70}
                  className="p-2 cursor-pointer bg-black"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-black mb-3 text-center md:text-start text-[18px] font-chakrapetch font-bold">
                Services
              </h4>
              <ul className="text-center md:text-start">
                {footerLinks?.slice(0, 6).map((item) => (
                  <li className="pb-2" key={item.id}>
                    <Link
                      href="#"
                      className="text-foottext text-[15px] hover:text-prim transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <h4 className="text-black mb-3 text-center md:text-start text-[18px] font-chakrapetch font-bold">
                Resources
              </h4>
              <ul>
                {footerLinks?.slice(6, 12).map((item) => (
                  <li className="pb-2 text-center md:text-start" key={item.id}>
                    <Link
                      href="#"
                      className="text-foottext text-[15px] hover:text-prim transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4">
              <p
                className="text-[18px] text-black font-black
              font-chakrapetch"
              >
                Sign Up For Updates
              </p>
              <form className="mt-5">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-white
                    placeholder:text-foottext
                    text-black py-3 pl-5
                    pr-10 border border-border
                    rounded-md"
                  />
                  <Icon
                    icon="solar:plain-2-linear"
                    className="text-foottext absolute text-[20px]
                   top-3.5 right-4 cursor-pointer"
                  />
                </div>
              </form>
              <p
                className="text-black font-bold
              pb-4 pt-10 text-[18px]
              font-chakrapetch"
              >
                Get App
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="#">
                  <Image
                    src="/images/footer/app.webp"
                    className="w-auto h-auto"
                    alt="App Store"
                    width={140}
                    height={45}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/footer/google.webp"
                    className="w-auto h-auto"
                    alt="App Store"
                    width={140}
                    height={45}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center border-t mt-10 pt-6 text-center sm:text-left">
            <p className="mb-3 sm:mb-0 text-[15px] text-foottext">
              2025. All rights reserved by: &nbsp;
              <Link
                href="https://portfolio-nextjs-pied-six.vercel.app/"
                target="_blank"
                className="hover:text-prim"
              >
                Oscar Garcia
              </Link>
            </p>
            <div className="flex gap-4">
              {footerLinks?.slice(12, 15).map((item) => (
                <Link
                  key={item.id}
                  href="#"
                  className="text-foottext
                  hover:text-prim text-[15px]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
