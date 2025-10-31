import Image from "next/image";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
