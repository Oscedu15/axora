"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { servicesData } from "@/app/api/data";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = { params: Promise<{ slug: string }> };

const faqData: FAQItem[] = [
  {
    question: "¿Qué es el cambio climático?",
    answer:
      "El cambio climático se refiere a alteraciones a largo plazo en las temperaturas y patrones climáticos de la Tierra, principalmente causadas por actividades humanas como la quema de combustibles fósiles.",
  },
  {
    question: "¿Cuáles son las causas principales del cambio climático?",
    answer:
      "Las principales causas incluyen la emisión de gases de efecto invernadero como el CO2, la deforestación, la agricultura intensiva y la industrialización. Estas actividades aumentan la concentración de gases que atrapan el calor en la atmósfera.",
  },
  {
    question: "¿Cómo afecta el cambio climático a la vida cotidiana?",
    answer:
      "Provoca eventos extremos como sequías, inundaciones, huracanes más intensos y aumento del nivel del mar, afectando la agricultura, la salud, el suministro de agua y la biodiversidad.",
  },
  {
    question:
      "¿Qué medidas individuales puedo tomar para combatir el cambio climático?",
    answer:
      "Puedes reducir tu huella de carbono usando transporte público, reciclando, ahorrando energía, comiendo menos carne y apoyando políticas ambientales. Pequeños cambios diarios suman.",
  },
  {
    question:
      "¿Qué están haciendo los gobiernos para abordar el cambio climático?",
    answer:
      "Muchos gobiernos han firmado acuerdos como el Acuerdo de París, implementando políticas para reducir emisiones, promover energías renovables y financiar proyectos de adaptación y mitigación.",
  },
];

const ServicesDetails = ({ params }: Props) => {
  const { slug } = React.use(params);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return notFound();

  const breadcrumbLiks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/servicesDetails",
      text: "ServicesDetails",
    },
  ];

  const toogle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <HeroSub
        title="ServicesDetails"
        description=""
        breadcrumbLinks={breadcrumbLiks}
      />

      <section className="pb-20">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex flex-col lg:flex-row gap-5
          "
        >
          <div className="w-full lg:w-[60%]">
            <div
              className="bg-white rounded-2xl 
             space-y-6 p-5 text-center md:text-start"
            >
              {service?.image && (
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={400}
                  className="w-full h-[400] object-cover rounded-2xl"
                />
              )}
              <h4
                className="font-unbounded font-medium
                text-3xl uppercase text-center lg:text-start"
              >
                {service.title}
              </h4>
              <p className="text-pera-dark text-16 leading-6">
                {service.description}
              </p>
              <p className="pb-4 text-pera-dark text-16 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                enim aliquid consequuntur, expedita, nam dolore quibusdam rerum,
                id omnis aliquam asperiores odit obcaecati? Ad ea veniam
                voluptate quisquam cum veritatis? enim aliquid consequuntur,
                expedita, nam dolore quibusdam rerum, id omnis aliquam
                asperiores odit obcaecati? Ad ea veniam voluptate quisquam cum
                veritatis?
              </p>
              <ul className="grid grid-cols-2 gap5">
                {[
                  "Pesonalization at Scale",
                  "Customer Retention",
                  "Improved Customer Retention",
                  "Support Optimization",
                  "Data-Driven Insights",
                  "Proactive Engagement",
                  "Omni-channel Integration",
                ].map((item, index) => (
                  <li className="flex items-center gap-2 pb-3" key={index}>
                    <Icon
                      icon="material-symbols:check-rounded"
                      width="24"
                      height="24"
                      className="bg-prim text-white rounded-full pb-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap md:flex-nowrap">
                <Image
                  src={service.imagedetails}
                  alt="blog-image"
                  width={200}
                  height={200}
                  className="w-full rounded-lg h-full"
                />
                <Image
                  src={service.imagedetails2}
                  alt="blog-image"
                  width={200}
                  height={200}
                  className="w-full rounded-lg h-full"
                />
              </div>
              <h4 className="font-unbounded font-medium text-3xl text-center lg:text-start">
                Our Range of Customer Services
              </h4>
              <p className="pb-4 text-pera-dark text-16 leading-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam maiores blanditiis dicta! Dolore quas assumenda fugiat
                eius quis! Facilis, veritatis. Ducimus voluptatum commodi non
                totam accusamus officia vero quasi voluptatem?
              </p>
              <div className="space-y-4 w-full">
                {faqData?.map((item, index) => (
                  <div
                    className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "bg-prim text-white"
                        : "bg-white text-black"
                    }`}
                    key={index}
                  >
                    <button
                      onClick={() => toogle(index)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                    >
                      <span className="font-medium">{item.question}</span>
                      <Icon
                        icon={
                          openIndex === index
                            ? "akar-icons:minus"
                            : "akar-icons:plus"
                        }
                        className="text-xl cursor-pointer"
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-6 py-4 border-t border-teal-500 bg-teal-600/10 text-white transition-all duration-200">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] lg:self-start lg:sticky top-20 space-y-5 py-5">
            <div className="border border-gray-100 p-5 shadow-lg rounded-xl">
              <h4 className="text-black pb-5 text-center lg:text-start font-semibold">
                More Services
              </h4>
              <div className="flex flex-col gap-5">
                {servicesData?.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex justify-between items-center bg-white shadow-lg p-3 rounded-lg hover:bg-prim hover:text-white transition-colors duration-300 "
                  >
                    <span>{s.title}</span>
                    <Icon icon="weui:arrow-outlined" width="12" height="24" />
                  </Link>
                ))}
              </div>
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
export default ServicesDetails;
