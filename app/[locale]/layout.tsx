import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import "@/app/scroll.css";
import { Providers } from "../providers";
import favicon from "@/public/favicon.svg";
import openGraphImage from "@/app/[locale]/opengraph-image.svg"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://maik-emanoel.vercel.app'),
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
    title: 'Maik Emanoel | Portfolio',
    description: "Welcome to Maik Emanoel's portfolio",
    images: openGraphImage.src,
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={locale}
      className="scroll-smooth"
      translate="no"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} min-h-screen bg-background text-primary overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
