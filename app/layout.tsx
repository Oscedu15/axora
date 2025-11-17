import type { Metadata } from "next";
import { Chakra_Petch, Mona_Sans, Poppins, Unbounded } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakraPetch",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const mona = Mona_Sans({
  variable: "--font-mona",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axora  Office",
  description: "Una Clinica dedicada al fortalecimiento de tu salud",
  keywords: "venezuela, slaud, clinica, doctor, carabobo, enfermera",
  authors: [
    {
      name: "Oscar Garcia",
      url: "https://portfolio-nextjs-pied-six.vercel.app/",
    },
  ],
  // viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Axora  Office",
    description: "Una Clinica dedicada al fortalecimiento de tu salud",
    url: "https://medicare-nine-steel.vercel.app/",
    siteName: "Axora Office",
    images: [
      {
        url: "/logo.jpg",
        width: 1200, // Ancho de la imagen
        height: 630, // Alto de la imagen
        alt: "Dental Clean Logo", // Texto alternativo para la imagen
        type: "image.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clean +",
    description: "Ecoemprendimiento en acción.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${mona.variable} ${unbounded.variable} ${chakraPetch.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
