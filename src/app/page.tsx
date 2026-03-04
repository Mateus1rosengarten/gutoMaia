"use client";
import HeroSection from "@/components/Hero";
import Footer from "../footer";
import TargetPublic from "@/targetPublic";
import About from "@/about";
import NavBar from "@/navbar";
import PictureBig from "@/footer/pictureBig";
import Service from "@/services";
import SideBar from "@/sidebar";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <NavBar isOpen={isOpen} toggle={toggleModal} />
      <SideBar isOpen={isOpen} toggle={toggleModal} />
      <HeroSection />
      <TargetPublic />
      <About />
      <Service />
      <PictureBig />
      <Footer />
    </div>
  );
}
