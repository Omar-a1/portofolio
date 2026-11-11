"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SectionDivider from "@/components/SectionDivider";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const contactEl = document.getElementById("contact");
      const projectsEl = document.getElementById("projects");
      const aboutEl = document.getElementById("about");

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveTab("contact");
      } else if (projectsEl && scrollPos >= projectsEl.offsetTop) {
        setActiveTab("projects");
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveTab("about");
      } else {
        setActiveTab("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="portfolio-wrapper" dir="rtl">
      {/* 1. Navbar */}
      <Navbar activeTab={activeTab} onNavigate={scrollTo} />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* Divider */}
      <SectionDivider />

      {/* 4. Projects Section */}
      <ProjectsSection />

      {/* Divider */}
      <SectionDivider />

      {/* 5. Contact Section */}
      <ContactSection />

      {/* 6. Footer */}
      <Footer onNavigate={scrollTo} />
    </div>
  );
}
