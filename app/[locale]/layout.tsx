import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import "@/app/scroll.css";
import { Providers } from "../providers";
import { SynchronizeProvider } from "../contexts/synchronizeContext";
import { metadataOptions } from "../utils/metadata-options";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = metadataOptions

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
        <Providers>
          <SynchronizeProvider>{children}</SynchronizeProvider>
        </Providers>
      </body>
    </html>
  );
}
