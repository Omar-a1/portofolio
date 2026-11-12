"use client";

import Image from "next/image";

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <div className="site-container">
        <div className="hero-editorial-grid">
          {/* Main Text Content */}
          <div className="hero-editorial-text">
            

            <h1 className="hero-main-title">أهلاً، أنا عمر</h1>

            <h2 className="hero-role-title">
              مطور واجهات وتطبيقات متكاملة{" "}
              <span className="hero-role-accent">(Full Stack Developer)</span>
            </h2>

            <p className="hero-summary">
              أقوم بهندسة وبناء مواقع وتطبيقات ويب سريعة، مستقرة، وتتسم بالتصميم
              الهادئ والمدروس. أجمع بين صياغة الواجهات التفاعلية النظيفة وبناء
              الأنظمة الخلفية وقواعد البيانات بكفاءة وموثوقية عالية.
            </p>

            <div className="hero-action-buttons">
              <button
                onClick={() => onNavigate("projects")}
                className="btn-solid-plum"
              >
                تصفح المشاريع
              </button>

              <button
                onClick={() => onNavigate("contact")}
                className="btn-outline-clean"
              >
                بدء محادثة
              </button>
            </div>
          </div>

          {/* Clean Profile Photo Frame */}
          <div className="hero-editorial-photo">
            <div className="photo-matte-frame">
              <Image
                src="/images/hero-avatar.png"
                alt="عمر عبد الله"
                fill
                priority
                sizes="(max-width: 640px) 250px, 280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
