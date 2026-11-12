"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSplitSection from "@/components/SkillsSplitSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // If user clicked a nav link, skip scroll-spy updates until animation ends
      if (isProgrammaticScroll.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. If reached bottom of document, activate contact
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveTab("contact");
        return;
      }

      // 2. If at the top of the page, activate home
      if (scrollY < 120) {
        setActiveTab("home");
        return;
      }

      const offsetMarker = scrollY + 160;
      const contactEl = document.getElementById("contact");
      const projectsEl = document.getElementById("projects");
      const skillsEl = document.getElementById("skills");
      const aboutEl = document.getElementById("about");

      if (contactEl && offsetMarker >= contactEl.offsetTop) {
        setActiveTab("contact");
      } else if (projectsEl && offsetMarker >= projectsEl.offsetTop) {
        setActiveTab("projects");
      } else if (skillsEl && offsetMarker >= skillsEl.offsetTop) {
        setActiveTab("skills");
      } else if (aboutEl && offsetMarker >= aboutEl.offsetTop) {
        setActiveTab("about");
      } else {
        setActiveTab("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollTo = useCallback((id: string) => {
    // 1. Immediately set active tab
    setActiveTab(id);

    // 2. Lock scroll listener so intermediate sections don't flicker
    isProgrammaticScroll.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 72;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    }

    // Unlock scroll spy after smooth scroll finishes
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 850);
  }, []);

  return (
    <div className="portfolio-wrapper" dir="rtl">
      {/* 1. Traditional Sticky Top Navbar */}
      <Navbar activeTab={activeTab} onNavigate={scrollTo} />

      <main>
        {/* 2. Hero Section */}
        <HeroSection onNavigate={scrollTo} />

        <SectionDivider />

        {/* 3. About Section */}
        <AboutSection />

        <SectionDivider />

        {/* 4. Frontend vs Backend Split Architecture */}
        <SkillsSplitSection />

        <SectionDivider />

        {/* 5. Editorial Minimalist Projects List */}
        <ProjectsSection />

        <SectionDivider />

        {/* 6. Contact Section */}
        <ContactSection />
      </main>

      {/* 7. Corporate Minimal Footer */}
      <Footer />
    </div>
  );
}
