import { Icon } from "@iconify/react";
import React from "react";
import Logo from "../Logo";
import Link from "next/link";

interface SidebarProps {
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpenSidebar,
  setIsOpenSidebar,
}) => {
  return (
    <div
      className={`hidden lg:block fixed top-0 right-0 h-screen lg:w-[35%]
        xxl:w-[40%] shadow-2xl bg-dark-blur backdrop-blur-lg 
        p-10 rounded-tl-3xl rounded-bl-3xl z-50
        transform transition-transform duration-500 ease-in-out
        overflow-y-scroll 
        ${isOpenSidebar ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Heade */}
      <div
        className="text-white flex items-center
      justify-between w-full"
      >
        <Logo />
        <div
          className="close-btn group bg-white rounded-sm
        text-prim p-2 cursor-pointer
        "
          onClick={() => setIsOpenSidebar(false)}
        >
          <Icon
            icon="material-symbols:close"
            width="20"
            height="20"
            className="group-hover:rotate-90 transition
            duration-500 "
          />
        </div>
      </div>
      {/* Content */}
      <p className="text-pera-light py-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
        illo perspiciatis amet cum, provident itaque eligendi dolores minima
        consectetur.
      </p>
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
  );
};

export default Sidebar;
