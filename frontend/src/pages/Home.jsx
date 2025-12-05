import React from "react";
import Hero from "../components/Hero";
import TechStack from "../components/home/TechStack";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessFlow from "../components/home/ProcessFlow";
import PortfolioPreview from "../components/home/PortfolioPreview";
import Testimonials from "../components/home/Testimonials";
import ProjectCTA from "../components/home/ProjectCTA";
import Ballpit from "../components/Ballpit";
import SEO from "../components/SEO";

function Home() {
  return (
    <div className="bg-[#060712] relative">
      <SEO
        title="Home"
        description="Zenvoa Technologies builds premium web applications and scalable digital solutions to transform your business."
      />
      <Ballpit />
      <div className="relative z-10">
        <Hero />
        <TechStack />
        <WhyChooseUs />
        <ServicesSection />
        <ProcessFlow />
        <PortfolioPreview />
        <Testimonials />
        <ProjectCTA />
      </div>
    </div>
  );
}

export default Home;
