import Image from "next/image";
import baner from "../../public/image 31.svg"
import About from "./components/About";
import Features from "./components/Features";

export default function Home() {
  return (
    <main id="home">
      <Image src={baner} alt="Banner" className="w-full h-full" />
      <About />
      <Features />
    </main>
  );
}
