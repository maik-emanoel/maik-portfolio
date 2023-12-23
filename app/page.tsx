import BgEffect from "./components/BgEffect";
import ButtonsOnScroll from "./components/ButtonsOnScroll";
import About from "./sections/About";
import Home from "./sections/Home";
import FloatingNavbar from "@/app/components/FloatingNavbar";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="max-w-[1000px] min-h-screen mx-auto px-5 flex flex-col relative">
      <Home />
      <About />
      <Projects />
      <Contact />

      <FloatingNavbar />
      {/* <BgEffect /> */}
      <ButtonsOnScroll />
    </div>
  );
}
