import React, { FC } from "react";
import Image from "next/image"; // Importa el componente Image de Next.js
import Breadcrumb from "@/components/Breadcrumb";
import { BreadcrumbLink } from "@/type/breadcrumb";

interface HeroSubProps {
  title: string;
  description: string;
  breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {
  return (
    <section
      className="relative overflow-x-hidden h-[500px]"
      aria-label="Hero section"
    >
      {/* Imagen de fondo usando Next.js Image - responsiva y cubriendo todo */}
      <Image
        src="/images/section/pheader-bg.webp"
        alt="Background image for hero section" // Añadido alt para accesibilidad
        fill // Hace que la imagen llene el contenedor padre
        // Mantiene el estilo de cover
        className="absolute inset-0 z-0 object-right" // Posiciona absolutamente y detrás de todo
        priority // Opcional: carga prioritaria si es la imagen principal
      />
      {/* Overlay negro con opacidad */}
      <div className="absolute inset-0 bg-black opacity-70 z-1"></div>{" "}
      {/* Cambié ::after por un div para compatibilidad con Next.js Image */}
      {/* Elemento decorativo */}
      <div className="w-full h-full absolute z-0 rounded-b-[119px] -left-1/4 top-0 bg-linear-to-r from-transparent to-white/10"></div>
      <div className="container relative mx-auto px-4 md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-xl) z-10 flex flex-col justify-center items-center text-center text-white h-full">
        {/* Render title and description if provided */}
        {title && (
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        )}
        {description && (
          <p className="text-lg md:text-xl mb-8 max-w-2xl">{description}</p>
        )}

        {/* Breadcrumb */}
        <div className="absolute bottom-4 left-4 z-20">
          <Breadcrumb links={breadcrumbLinks} />
        </div>
      </div>
    </section>
  );
};

export default HeroSub;
