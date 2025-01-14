"use client";
import HeroSection from "@/hero";
import Footer from "./footer";
import TargetPublic from "@/publico";
import About from "@/about";
import NavBar from "@/navbar";
import PictureBig from "@/pictureBig";
import Service from "@/service";
import SideBar from "@/sidebar";
import { useState, useEffect } from "react";
import Loader from "@/loader";


export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
