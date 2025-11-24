import Link from "next/link";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Axora",
};

export default function Contact() {
  const breadcrumbLiks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/contact",
      text: "Contact",
    },
  ];
  return (
    <>
      <HeroSub
        title="Contacto"
        description=""
        breadcrumbLinks={breadcrumbLiks}
      />

      <div className="overflow-hidden py-14 lg:py-18 bg-prim-light">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14
          "
        >
          <div className="contact-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="contact-item bg-white shadow-xl p-5 w-full space-y-6 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] text-center flex flex-col justify-between">
              <div className="contact-icon mx-auto w-[70px] h-[70px] rounded-full flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                <Icon
                  icon="tdesign:location"
                  width="30"
                  height="30"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div className="contact-info text-center">
                <h4 className="font-unbounded text-18 pb-2 group-hover:text-white duration-300 transition-colors">
                  Our Location
                </h4>
                <p className="text-gray-500  group-hover:text-white duration-300 transition-colors">
                  45-Renner Burg, West Round, MT 94259-302
                </p>
              </div>
            </div>
            <div className="contact-item bg-white shadow-xl p-5 w-full space-y-6 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] text-center flex flex-col justify-between">
              <div className="contact-icon mx-auto w-[70px] h-[70px] rounded-full flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                <Icon
                  icon="ic:outline-email"
                  width="30"
                  height="30"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div className="contact-info text-center">
                <h4 className="font-unbounded text-18 pb-2 group-hover:text-white duration-300 transition-colors">
                  Email Us
                </h4>
                <p className="text-gray-500  group-hover:text-white duration-300 transition-colors">
                  example@gmail.com <br />
                  example@gmail.com
                </p>
              </div>
            </div>
            <div className="contact-item bg-white shadow-xl p-5 w-full space-y-6 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] text-center flex flex-col justify-between">
              <div className="contact-icon mx-auto w-[70px] h-[70px] rounded-full flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                <Icon
                  icon="material-symbols:call-outline-sharp"
                  width="30"
                  height="30"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div className="contact-info text-center">
                <h4 className="font-unbounded text-18 pb-2 group-hover:text-white duration-300 transition-colors">
                  Call Us
                </h4>
                <p className="text-gray-500  group-hover:text-white duration-300 transition-colors">
                  +1 (009) 544-7865
                  <br />
                  +1 (009) 544-7865
                </p>
              </div>
            </div>
            <div className="contact-item bg-white shadow-xl p-5 w-full space-y-6 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] text-center flex flex-col justify-between">
              <div className="contact-icon mx-auto w-[70px] h-[70px] rounded-full flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                <Icon
                  icon="hugeicons:chat"
                  width="30"
                  height="30"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div className="contact-info text-center">
                <h4 className="font-unbounded text-18 pb-2 group-hover:text-white duration-300 transition-colors">
                  Live Chat
                </h4>
                <p className="text-gray-500  group-hover:text-white duration-300 transition-colors">
                  livechat@bexon.com <br />
                  <Link href="/contact">Need Help?</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-14 bg-prim-light">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14
          "
        >
          <div className="flex flex-col gap-5 w-full lg:flex-row">
            <div className="w-full lg:w-[50%] bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl text-center font-semibold text-[#0D1E20] mb-8 font-unbounded">
                Feel Free to Get in Touch or Visit our Location.
              </h2>
              <form className="grid md:grid-cols-2 gap-6">
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    id="name"
                    className="w-full border-gray-300 
                  focus:outline-none py-2 border-b focus:border-teal-50"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="correo"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="correo"
                    placeholder="Enter Your Name"
                    className="w-full border-gray-300 
                  focus:outline-none py-2 border-b focus:border-teal-50"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="telefono"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="telefono"
                    className="w-full border-gray-300 
                  focus:outline-none py-2 border-b focus:border-teal-50"
                    placeholder="Enter Your Phone"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Choose an Option
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-full border-gray-300 
                  focus:outline-none py-2 border-b focus:border-teal-50"
                  >
                    <option value="">Business Strategy</option>
                    <option value="">Customer Experience</option>
                    <option value="">Sustainability and ESG</option>
                    <option value="">Training and Development</option>
                    <option value="">IT Support & Maintenance</option>
                    <option value="">Marketing Strategy</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor=""
                    className="mb-2 block text-gray-600 font-medium"
                  >
                    Type Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Whrite Your Message"
                    id=""
                    className="w-full border-gray-300 
                  focus:outline-none py-2 border-b focus:border-teal-50"
                  ></textarea>
                </div>
                <Link
                  href="#"
                  className="text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center mx-auto lg:mx-0 mt-6 lg:mt-0
                            tracking-wider group"
                >
                  Seend Messge
                  <Icon
                    icon="tabler:arrow-right"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45
                            transition-all duration-300"
                  />
                </Link>
              </form>
            </div>
            <div className="w-full lg:w-[50%] h-[300px] lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15706.722841049057!2d-67.96428635!3d10.20656305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sve!4v1763591728651!5m2!1ses-419!2sve"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
