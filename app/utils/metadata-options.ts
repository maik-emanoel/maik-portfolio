import favicon from "@/public/favicon.svg";
import openGraphImage from "@/app/[locale]/opengraph-image.svg";
import { Metadata } from "next";

export const metadataOptions: Metadata = {
  metadataBase: new URL("https://maik-emanoel.vercel.app"),
  title: "Maik Emanoel | Portfolio",
  description:
    "Welcome to Maik Emanoel's portfolio. Dive into a world of web development, where each project is a unique journey. Discover the intersection of creativity and technology. Let's connect and explore the possibilities together. Your digital journey starts here!",
  creator: "Maik Emanoel",
  keywords: [
    "Web Development",
    "Frontend Development",
    "React",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Portfolio",
    "Tailwind",
  ],
  icons: [{ rel: "icon", url: favicon.src }],
  openGraph: {
    title: "Maik Emanoel | Portfolio",
    description: "Welcome to Maik Emanoel's portfolio",
    images: openGraphImage.src,
  },
}