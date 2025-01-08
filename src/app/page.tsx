"use client"

import HeroSection from "@/hero";
import Footer from "./footer";
import TargetPublic from "@/publico";
import About from "@/about";
import NavBar from "@/navbar";
import PictureBig from "@/pictureBig";
import Service from "@/service";
import SideBar from "@/sidebar";
import { useState } from "react";


export default function Home() {

  const [isOpen,setIsOpen]= useState<boolean>(false);

  const toggleModal = () => {
      setIsOpen(!isOpen)
  }

  return (
   <div>
    <NavBar isOpen={isOpen} toggle={toggleModal}/>
   <SideBar isOpen={isOpen} toggle={toggleModal} />
    <HeroSection></HeroSection>
    <TargetPublic/>
    <About/>
    <Service />
    <PictureBig />
    <Footer/>
   </div>
  );
}
