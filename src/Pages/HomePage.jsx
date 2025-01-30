import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../Components/NavbarComponent";
import Footer from "../Components/FooterComp";
import WorkExperience from "../Components/WorkExperienceComp";
import TechExperience from "../Components/Technology";
import JourneySection from "../Components/JourneyComponent";
import ContactSection from "../Components/ContactFormComp";
import CardsGrid from "../Components/ProjectCardComponent";
import EducationSection from "../Components/EducationComponent";
import HeroSectionComponent from "../Components/HeroSectionComponent";



const HomeComponent = () => {
  return (
    <>
      <header className="">
        <Navbar />
      </header>
      <main className="w-full h-full mt-20 bg-white">
        <HeroSectionComponent />
        <JourneySection/>
        <EducationSection/>
        <div className="w-full flex justify-center items-center">
          <Outlet />
        </div>
        <WorkExperience/>
        <TechExperience/>
        <CardsGrid/>
        <ContactSection/>
      </main>
      <footer>
      <Footer/>
      </footer>
    </>
  );
};

export default HomeComponent;
