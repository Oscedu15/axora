"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { headerData } from "./Navigation/menuData";
import HeaderLink from "./Navigation/headerLinks";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Sidebar from "./Sidebar";
import MobileHeaderLink from "./Navigation/mobileHeaderLinks";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed h-24 px-4 top-5 left-[2.5%] py-1 z-50 w-[95%] flex navbar
    items-center transition-all duration-500 rounded-3xl 
    ${
      sticky
        ? "bg-black/80 backdrop-blur-lg shadow-lg w-[90%]"
        : "backdrop-blur-sm bg-white/10"
    }`}
      >
        <div className="container mx-auto max-w-[1100px] flex items-center justify-between xl:gap-16 lg:gap-8 py-6">
          <div className="text-white">
            <Logo />
          </div>
          <nav className="hidden lg:flex grow items-center justify-center space-x-10 text-base">
            {headerData?.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="nva-right gap-4 hidden lg:flex items-center">
            <Link
              href="/contact"
              className="text-white bg-dark h-[50px] rounded-full font-chakraPetch font-semibold flex gap-2 ps-4 pe-2 py-2 w-auto justify-center items-center tracking-wider group"
            >
              Let´s Talk
              <Icon
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300"
                icon="tabler:arrow-right"
                width="24"
                height="24"
              />
            </Link>

            <button
              className=" block p-2 cursor-pointer group"
              aria-label="Toggle mobile menu"
              onClick={() => setIsOpenSidebar(true)}
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-4 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out group-hover:w-6"></span>
              <span className="block  w-6 h-0.5 mt-1.5 bg-white"></span>
            </button>
          </div>
          <button
            className="lg:hidden block p-2 cursor-pointer group"
            aria-label="Toggle mobile menu"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-4 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out group-hover:w-6"></span>
            <span className="block  w-6 h-0.5 mt-1.5 bg-white"></span>
          </button>
        </div>
      </header>
      {/* Mobile */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed right-0 top-0 h-screen w-full sm:w-[50%] lg:w-[40%] shadow-2xl bg-dark-blur 
          backdrop-blur-lg p-10 z-50 transform transition-transform overflow-y-scroll
           duration-500 ease-in-out
          ${navbarOpen ? "translate-x-0" : "translate-x-[110%]"} `}
      >
        <div className="text-white flex w-full justify-between items-center">
          <Logo />
          <button
            className=""
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <Icon icon="material-symbols:close" width="25" height="25" />
          </button>
        </div>
        <nav className="flex flex-col items-start py-4">
          {headerData?.map((item, index) => (
            <MobileHeaderLink
              key={index}
              item={item}
              setNavbarOpen={setNavbarOpen}
              navbarOpen={navbarOpen}
            />
          ))}
        </nav>
        {/* Search */}
        <h3 className="font-chakrapetch pb-3">Search Now!</h3>
        <form className="search-box relative flex">
          <input
            type="text"
            placeholder="Search Here..."
            className="bg-white ps-3 h-[45px]"
            required
          />
          <button className="absolute right-0 h-full border-l border-border cursor-pointer">
            <Icon icon="ei:search" width="50" height="30" />
          </button>
        </form>
        {/* Contact Info */}
        <h3 className="font-chakrapetch pb-3 pt-8">Contact Info</h3>
        <div className="space-y-3">
          <div className="">
            <span className="font-chakrapetch text-pera-light">Phone</span>
            <br />
            <Link
              href="/contact"
              className="text-white font-unbounded font-normal"
            >
              (+91) 1232 3456
            </Link>
          </div>
          <div className="">
            <span className="font-chakrapetch text-pera-light">Email</span>
            <br />
            <Link
              href="/contact"
              className="text-white font-unbounded font-normal"
            >
              info@axora.com
            </Link>
          </div>
          <div className="">
            <span className="font-chakrapetch text-pera-light">Address</span>
            <br />
            <Link
              href="/contact"
              className="text-white font-unbounded font-normal"
            >
              FF - 42, Procube Complex Vadodara
            </Link>
          </div>
        </div>
        {/* Social */}
        <h3 className="font-chakrapetch pb-3 pt-8">Contact Info</h3>
        <div className="social-icons flex gap-3">
          <Link href="#">
            <Icon
              icon="gg:facebook"
              width="30"
              height="30"
              className="text-white p-1 rounded-sm cursor-pointer
            bg-blue-600 transition duration-500
            hover:-translate-y-1"
            />
          </Link>
          <Link href="#">
            <Icon
              icon="gg:instagram"
              width="30"
              height="30"
              className="text-white p-1 rounded-sm cursor-pointer
            bg-pink-500 transition duration-500
            hover:-translate-y-1"
            />
          </Link>
          <Link href="#">
            <Icon
              icon="mdi:youtube"
              width="30"
              height="30"
              className="text-white p-1 rounded-sm cursor-pointer
            bg-red-500 transition duration-500
            hover:-translate-y-1"
            />
          </Link>
          <Link href="#">
            <Icon
              icon="basil:linkedin-solid"
              width="30"
              height="30"
              className="text-white p-1 rounded-sm cursor-pointer
            bg-blue-400 transition duration-500
            hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
      <Sidebar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
    </>
  );
};

export default Header;
