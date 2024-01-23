import { useTranslations } from "next-intl";
import { Suspense } from "react";

import BgEffect from "../components/BgEffect";
import About from "../sections/About";
import Home from "../sections/Home";
import FloatingNavbar from "@/app/components/FloatingNavbar";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import ProjectsLoading from "../components/projects/ProjectsLoading";

export default function App() {
  const t = useTranslations("floating-navbar");

  const pillTabs = [
    {
      name: t("home"),
      path: "#home",
    },
    {
      name: t("about"),
      path: "#about",
    },
    {
      name: t("projects"),
      path: "#projects",
    },
    {
      name: t("contact"),
      path: "#contact ",
    },
  ];

  return (
    <>
      <div className="max-w-[1000px] min-h-screen mx-auto px-5 flex flex-col relative">
        <Home />
        <About />
        <Suspense fallback={<ProjectsLoading />}>
          <Projects />
        </Suspense>
        <Contact />
        <Footer />
      </div>


      <FloatingNavbar pillTabs={pillTabs} />
      <BgEffect />
    </>
  );
}
