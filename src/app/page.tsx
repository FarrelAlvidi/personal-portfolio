import Image from "next/image";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
    </div>
  );
}
