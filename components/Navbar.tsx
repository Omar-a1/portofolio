"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpLeft } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  onNavigate: (id: string) => void;
}

export default function Navbar({ activeTab, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "الرئيسية" },
    { id: "about", label: "عني" },
    { id: "skills", label: "المهارات والتخصص" },
    { id: "projects", label: "مشاريعي" },
    { id: "contact", label: "تواصل معي" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="top-navbar">
      <div className="site-container">
        <div className="navbar-inner">
          {/* Logo / Brand Name on Right */}
          <button
            onClick={() => handleNavClick("home")}
            className="nav-brand"
            aria-label="الرئيسية"
          >
            <span>عمر عبد الله</span>
            <span className="nav-brand-dot">.</span>
          </button>

          {/* Desktop Nav Links in Center */}
          <nav aria-label="القائمة الرئيسية">
            <ul className="nav-links-menu">
              {navItems.slice(0, 4).map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`nav-link-item ${isActive ? "active" : ""}`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Contact Action Button on Left */}
          <div className="nav-actions-desktop">
            <button
              onClick={() => handleNavClick("contact")}
              className={`nav-cta-btn ${activeTab === "contact" ? "active" : ""}`}
            >
              <span>تواصل معي</span>
              <ArrowUpLeft size={15} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id} className="mobile-nav-item">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}
                  >
                    <span className="mobile-link-num">0{index + 1}</span>
                    <span className="mobile-link-label">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-footer">
            <p className="mobile-nav-desc">
              مطور واجهات وتطبيقات متكاملة (Full Stack Developer)
            </p>
            <a
              href="mailto:3ommar.a@gmail.com"
              className="mobile-nav-email"
              dir="ltr"
            >
              3ommar.a@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Overlay backdrop for mobile */}
      {mobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
