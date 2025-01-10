// pages/index.tsx or wherever your Home component resides
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

  // Simulate loading for a short period to show the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after a delay
    }, 1000); // Adjust this time based on your needs

    return () => clearTimeout(timer);
  }, []);

  // If the page is still loading, show the loader
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
