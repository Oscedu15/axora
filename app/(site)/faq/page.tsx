"use client";
import Image from "next/image";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "¿Qué materiales se pueden reciclar fácilmente en casa?",
    answer:
      "Materiales como papel, cartón, vidrio, plástico (tipos 1 y 2) y metales se pueden reciclar fácilmente. Separa los residuos y llévalos a centros de reciclaje locales.",
  },
  {
    question: "¿Cómo reutilizar botellas de plástico?",
    answer:
      "Las botellas de plástico se pueden convertir en macetas, organizadores o incluso en arte. Limpia y corta según tus necesidades para darles una segunda vida.",
  },
  {
    question: "¿Por qué es importante reciclar?",
    answer:
      "Reciclar reduce la cantidad de residuos en vertederos, ahorra energía y recursos naturales, y ayuda a combatir el cambio climático.",
  },
  {
    question: "¿Qué hacer con residuos orgánicos?",
    answer:
      "Los residuos orgánicos como restos de comida pueden compostarse para crear abono natural, reduciendo así los desechos y enriqueciendo el suelo.",
  },
  {
    question: "¿Qué hacer con residuos orgánicos?",
    answer:
      "Los residuos orgánicos como restos de comida pueden compostarse para crear abono natural, reduciendo así los desechos y enriqueciendo el suelo.",
  },
  {
    question: "¿Qué hacer con residuos orgánicos?",
    answer:
      "Los residuos orgánicos como restos de comida pueden compostarse para crear abono natural, reduciendo así los desechos y enriqueciendo el suelo.",
  },
];

const faqData2: FaqItem[] = [
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

export default function Faq() {
  const breadcrumbLiks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/faq",
      text: "Faq",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toogle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [openIndex2, setOpenIndex2] = useState<number | null>(0);

  const toogle2 = (index: number) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };

  return (
    <>
      <HeroSub
        title="Preguntas Frecuentes"
        description=""
        breadcrumbLinks={breadcrumbLiks}
      />
      <div className="overflow-hidden py-14 lg:py-18 bg-prim-light">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex flex-wrap gap-5 lg:flex-nowrap
          "
        >
          <div className="w-full lg:w-[50%]">
            <Image
              src="/images/faq/faq-image-01.webp"
              alt="faq-image"
              width={300}
              height={300}
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="lg:w-[50%] w-full">
            <div className="space-y-4 w-full lg:w-[80%] mx-auto">
              {faqData?.map((item, index) => (
                <div
                  className={`border rounded-lg overflow-hidden transition-all duration-300
                  ${
                    openIndex === index
                      ? "bg-prim text-white"
                      : "bg-white text-black"
                  }`}
                  key={index}
                >
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                    onClick={() => toogle(index)}
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
      </div>
      <div className="overflow-hidden py-14 lg:py-18 bg-prim-light">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 gap-5
          "
        >
          <div className="w-full text-center mb-10">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Common Questions
            </span>
            <h2 className="mt-4  lg:text-35 font-semibold font-chakrapetch">
              Need Help? Start Here...
            </h2>
          </div>
          <div className="space-y-4 w-full lg:mx-auto">
            {faqData2?.map((item, index2) => (
              <div
                className={`border rounded-lg overflow-hidden transition-all duration-300
                  ${
                    openIndex2 === index2
                      ? "bg-prim text-white"
                      : "bg-white text-black"
                  }`}
                key={index2}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                  onClick={() => toogle2(index2)}
                >
                  <span className="font-medium">{item.question}</span>
                  <Icon
                    icon={
                      openIndex2 === index2
                        ? "akar-icons:minus"
                        : "akar-icons:plus"
                    }
                    className="text-xl cursor-pointer"
                  />
                </button>
                {openIndex2 === index2 && (
                  <div className="px-6 py-4 border-t border-teal-500 bg-teal-600/10 text-white transition-all duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
