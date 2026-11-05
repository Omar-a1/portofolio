"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Mail, Phone, MessageCircle, ExternalLink, Sparkles } from "lucide-react";

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

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#242424] text-white overflow-x-hidden" dir="rtl">
      {/* 1. FIXED FLOATING NAVBAR - Stays visible on scroll across all devices */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="w-full max-w-[787px] bg-[#0D0D0D]/95 backdrop-blur-md rounded-[30px] p-[10px] flex items-center justify-between shadow-2xl border border-white/5 pointer-events-auto transition-all duration-300">
          {/* 1. الرئيسية (Home) */}
          <button
            onClick={() => scrollTo("home")}
            className={`w-[22%] sm:w-[161px] h-[37px] rounded-[18.5px] text-xs font-normal transition-all duration-300 cursor-pointer flex items-center justify-center ${
              activeTab === "home"
                ? "bg-[#D9D9D9] text-black font-bold shadow-md scale-[1.02]"
                : "bg-[#D9D9D9]/[0.07] text-white hover:bg-white/20 hover:scale-[1.02]"
            }`}
          >
            الرئيسية
          </button>

          {/* 2. عني (About) */}
          <button
            onClick={() => scrollTo("about")}
            className={`w-[22%] sm:w-[161px] h-[37px] rounded-[18.5px] text-xs font-normal transition-all duration-300 cursor-pointer flex items-center justify-center ${
              activeTab === "about"
                ? "bg-[#D9D9D9] text-black font-bold shadow-md scale-[1.02]"
                : "bg-[#D9D9D9]/[0.07] text-white hover:bg-white/20 hover:scale-[1.02]"
            }`}
          >
            عني
          </button>

          {/* 3. مشاريعي (Projects) */}
          <button
            onClick={() => scrollTo("projects")}
            className={`w-[22%] sm:w-[161px] h-[37px] rounded-[18.5px] text-xs font-normal transition-all duration-300 cursor-pointer flex items-center justify-center ${
              activeTab === "projects"
                ? "bg-[#D9D9D9] text-black font-bold shadow-md scale-[1.02]"
                : "bg-[#D9D9D9]/[0.07] text-white hover:bg-white/20 hover:scale-[1.02]"
            }`}
          >
            مشاريعي
          </button>

          {/* 4. تواصل (Contact) */}
          <button
            onClick={() => scrollTo("contact")}
            className={`w-[22%] sm:w-[161px] h-[37px] rounded-[18.5px] text-xs font-normal transition-all duration-300 cursor-pointer flex items-center justify-center ${
              activeTab === "contact"
                ? "bg-[#D9D9D9] text-black font-bold shadow-md scale-[1.02]"
                : "bg-[#D9D9D9]/[0.07] text-white hover:bg-white/20 hover:scale-[1.02]"
            }`}
          >
            تواصل
          </button>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section
        id="home"
        className="relative w-full pt-[100px] sm:pt-[120px] pb-[80px] sm:pb-[110px] px-4 md:px-8 flex flex-col items-center overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #59018C 0%, #FFCD75 100%)",
        }}
      >
        {/* Subtle dynamic ambient glow orbs */}
        <div className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-[#8300CF]/30 rounded-full blur-[80px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/2 -left-20 w-[300px] h-[300px] bg-[#FFCD75]/25 rounded-full blur-[90px] pointer-events-none animate-float" />

        {/* Hero Content: RTL layout (Text on Right, Photo on Left in desktop) */}
        <div className="w-full max-w-[1040px] mt-[20px] md:mt-[30px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 px-4 sm:px-8 z-10">
          {/* Right in RTL: Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right order-2 md:order-1">
            <h1 className="text-white text-[42px] sm:text-[56px] md:text-[64px] font-bold leading-tight font-cairo drop-shadow-md">
              اهلا, انا عمر
            </h1>
            <p className="text-white text-sm sm:text-base font-bold mt-2 font-cairo tracking-wide flex items-center gap-2">
              <Sparkles size={16} className="text-[#FFCD75] animate-spin" style={{ animationDuration: "8s" }} />
              مبرمج ومصمم مواقع
            </p>
          </div>

          {/* Left in RTL: Omar's Photo */}
          <div className="relative w-[220px] sm:w-[233px] h-[290px] sm:h-[310px] rounded-[70px] overflow-hidden shadow-2xl flex-shrink-0 animate-float order-1 md:order-2">
            <Image
              src="/images/hero-avatar.png"
              alt="عمر عبد الله"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION (عني) */}
      <section
        id="about"
        className="w-full bg-[#242424] pt-[65px] pb-[80px] px-6 sm:px-12 flex flex-col items-center"
      >
        <h2 className="text-white text-[38px] sm:text-[48px] font-bold text-center font-cairo mb-8">
          . عني .
        </h2>

        <div className="w-full max-w-[940px]">
          <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] font-bold leading-[1.9] text-center md:text-justify font-cairo transition-all">
            عمر، مطور واجهات خلفية (Full Stack Developer) شغفي ببرمجة وتصميم
            المواقع بدأ في سن الثانية عشرة. بفضل رحلتي التعليمية المستمرة،
            اكتسبت مهارات قوية في تطوير المواقع (full stack developer)، حيث
            أسعى لتقديم منتجات رقمية عالية الجودة، تتسم بالدقة في التنفيذ وتصميم
            مريح ومناسب للمقاييس العالمية. يسعدني تحويل رؤيتك إلى واقع رقمي
            متميز.
          </p>
        </div>
      </section>

      {/* Modern High-End Separator with Softened Opacity & Ambient Glow */}
      <div className="w-full flex justify-center py-2">
        <div className="w-full max-w-[1200px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
      </div>

      {/* 4. PROJECTS SECTION (مشاريعي) */}
      <section
        id="projects"
        className="w-full bg-[#242424] pt-[60px] pb-[100px] px-4 sm:px-8 flex flex-col items-center"
      >
        <h2 className="text-white text-[34px] sm:text-[40px] font-bold text-center font-cairo mb-[50px]">
          . مشاريعي .
        </h2>

        {/* 3 Cards: Order RTL (مشروع ذكّر -> مشروع تنظيم عملاء -> مشروع انجز) */}
        <div className="w-full max-w-[1120px] flex flex-wrap items-center justify-center gap-6 lg:gap-[38px]">
          {/* Card 1: مشروع ذكّر */}
          <div className="w-[317px] h-[320px] bg-[#303030] rounded-[36px] flex flex-col items-center pt-[17px] px-[14px] pb-[16px] shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 group cursor-pointer">
            <div className="relative w-[160px] h-[160px] rounded-[28px] overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/project-zakker.png"
                alt="مشروع ذكّر"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-white group-hover:text-[#FFCD75] text-[14px] font-bold text-center font-cairo mt-[18px] transition-colors">
              مشروع ذكّر
            </h3>
            <p className="text-[#C4C4C4] text-[10px] font-bold text-center font-cairo mt-[7px]">
              مشروع ديني
            </p>
            <a
              href="https://zakkerr.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFCD75] text-[10px] font-bold text-center font-cairo mt-[8px] transition-colors flex items-center gap-1"
              dir="ltr"
            >
              <span>zakkerr.vercel.app</span>
              <ExternalLink size={11} className="opacity-70 group-hover:opacity-100" />
            </a>
          </div>

          {/* Card 2: مشروع تنظيم عملاء */}
          <div className="w-[317px] h-[320px] bg-[#303030] rounded-[36px] flex flex-col items-center pt-[17px] px-[7px] pb-[16px] shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 group cursor-pointer">
            <div className="relative w-[302px] h-[160px] rounded-[28px] overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/project-customers.png"
                alt="مشروع تنظيم عملاء"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-white group-hover:text-[#FFCD75] text-[14px] font-bold text-center font-cairo mt-[18px] transition-colors">
              مشروع تنظيم عملاء
            </h3>
            <p className="text-[#C4C4C4] text-[10px] font-bold text-center font-cairo mt-[7px]">
              مشروع تنظيم
            </p>
            <a
              href="https://mycustomers.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFCD75] text-[10px] font-bold text-center font-cairo mt-[8px] transition-colors flex items-center gap-1"
              dir="ltr"
            >
              <span>mycustomers.vercel.app</span>
              <ExternalLink size={11} className="opacity-70 group-hover:opacity-100" />
            </a>
          </div>

          {/* Card 3: مشروع انجز */}
          <div className="w-[317px] h-[320px] bg-[#303030] rounded-[36px] flex flex-col items-center pt-[17px] px-[7px] pb-[16px] shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 group cursor-pointer">
            <div className="relative w-[302px] h-[160px] rounded-[28px] overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/project-engz.png"
                alt="مشروع انجز"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-white group-hover:text-[#FFCD75] text-[14px] font-bold text-center font-cairo mt-[18px] transition-colors">
              مشروع انجز
            </h3>
            <p className="text-[#C4C4C4] text-[10px] font-bold text-center font-cairo mt-[7px]">
              صفحة هبوط (تجريبية)
            </p>
            <a
              href="https://engz-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFCD75] text-[10px] font-bold text-center font-cairo mt-[8px] transition-colors flex items-center gap-1"
              dir="ltr"
            >
              <span>engz-app.vercel.app</span>
              <ExternalLink size={11} className="opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </section>

      {/* Modern High-End Separator with Softened Opacity & Ambient Glow */}
      <div className="w-full flex justify-center py-2">
        <div className="w-full max-w-[1200px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
      </div>

      {/* 5. CONTACT SECTION (تواصل) */}
      <section
        id="contact"
        className="w-full bg-[#242424] pt-[60px] pb-[100px] px-4 sm:px-8 flex flex-col items-center"
      >
        <h2 className="text-white text-[38px] sm:text-[48px] font-bold text-center font-cairo mb-[30px]">
          . تواصل .
        </h2>

        <p className="text-white text-[14px] font-bold text-center font-cairo mb-[55px]">
          يمكنك التواصل معي عن طريق الطرق الاتية :
        </p>

        {/* Contact Pills */}
        <div className="w-full max-w-[1050px] flex flex-wrap items-center justify-center gap-6 sm:gap-[30px]">
          {/* 1. Email */}
          <a
            href="mailto:3ommar.a@gmail.com"
            className="w-[310px] h-[50px] bg-[#303030] hover:bg-[#3d3d3d] rounded-[9px] px-4 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group"
            dir="ltr"
          >
            <span className="text-white group-hover:text-[#FFCD75] text-[14px] font-bold font-cairo transition-colors">
              3ommar.a@gmail.com
            </span>
            <Mail size={22} className="text-[#FEF7FF] flex-shrink-0 group-hover:scale-110 transition-transform" />
          </a>

          {/* 2. Call */}
          <a
            href="tel:+201098473553"
            className="w-[310px] h-[50px] bg-[#303030] hover:bg-[#3d3d3d] rounded-[9px] px-4 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group"
            dir="ltr"
          >
            <span className="text-white group-hover:text-[#FFCD75] text-[14px] font-bold font-cairo transition-colors">
              +20 1098473553
            </span>
            <Phone size={22} className="text-[#FEF7FF] flex-shrink-0 group-hover:scale-110 transition-transform" />
          </a>

          {/* 3. WhatsApp / Chat */}
          <a
            href="https://wa.me/201098473553"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[310px] h-[50px] bg-[#303030] hover:bg-[#3d3d3d] rounded-[9px] px-4 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group"
            dir="ltr"
          >
            <span className="text-white group-hover:text-[#FFCD75] text-[14px] font-bold font-cairo transition-colors">
              +20 1098473553
            </span>
            <MessageCircle size={22} className="text-[#FEF7FF] flex-shrink-0 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer
        className="w-full relative px-6 sm:px-12 pt-[40px] pb-[35px]"
        style={{
          background: "linear-gradient(180deg, #59018C 0%, #8300CF 100%)",
        }}
      >
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            {/* Right: الصفحات */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-white text-[12px] font-bold mb-3 font-cairo">
                . الصفحات .
              </span>
              <div className="flex flex-col items-center md:items-start gap-1.5 text-white text-[12px] font-bold font-cairo">
                <button
                  onClick={() => scrollTo("home")}
                  className="hover:opacity-75 transition-opacity cursor-pointer"
                >
                  الرئيسية
                </button>
                <button
                  onClick={() => scrollTo("about")}
                  className="hover:opacity-75 transition-opacity cursor-pointer"
                >
                  عني
                </button>
                <button
                  onClick={() => scrollTo("projects")}
                  className="hover:opacity-75 transition-opacity cursor-pointer"
                >
                  مشاريعي
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="hover:opacity-75 transition-opacity cursor-pointer"
                >
                  تواصل
                </button>
              </div>
            </div>

            {/* Center: Contact pills in footer */}
            <div className="flex flex-col items-center">
              <span className="text-white text-[12px] font-bold mb-3 font-cairo">
                . تواصل .
              </span>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="mailto:3ommar.a@gmail.com"
                  className="w-[189px] h-[35px] bg-[#303030] hover:bg-[#3d3d3d] rounded-[9px] px-2.5 flex items-center justify-between group shadow transition-all duration-200"
                  dir="ltr"
                >
                  <span className="text-white text-[11px] font-bold font-cairo truncate">
                    3ommar.a@gmail.com
                  </span>
                  <Mail size={14} className="text-[#FEF7FF] flex-shrink-0 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href="tel:+201098473553"
                  className="w-[189px] h-[35px] bg-[#303030] hover:bg-[#3d3d3d] rounded-[9px] px-2.5 flex items-center justify-between group shadow transition-all duration-200"
                  dir="ltr"
                >
                  <span className="text-white text-[11px] font-bold font-cairo">
                    +20 1098473553
                  </span>
                  <Phone size={14} className="text-[#FEF7FF] flex-shrink-0 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href="https://wa.me/201098473553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[189px] h-[35px] bg-[#303030] hover:bg-[#3d3d3d] rounded-[9px] px-2.5 flex items-center justify-between group shadow transition-all duration-200"
                  dir="ltr"
                >
                  <span className="text-white text-[11px] font-bold font-cairo">
                    +20 1098473553
                  </span>
                  <MessageCircle size={14} className="text-[#FEF7FF] flex-shrink-0 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full text-center pt-4 border-t border-white/10 text-white text-[12px] font-bold font-cairo">
            All rights reserved © Omar Abdallah
          </div>
        </div>
      </footer>
    </div>
  );
}
