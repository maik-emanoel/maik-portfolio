import BgEffect from "./components/BgEffect";
import Home from "./sections/Home";
import FloatingNavbar from '@/app/components/FloatingNavbar'

export default function App() {
  return (
    <div className="max-w-[1000px] min-h-screen mx-auto px-5 flex flex-col">
      <Home />

      <FloatingNavbar />
      {/* <BgEffect /> */}
    </div>
  )
}
