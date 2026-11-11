import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">اهلا, انا عمر</h1>
          <p className="hero-subtitle">
            <Sparkles size={16} className="sparkle-icon" />
            مبرمج ومصمم مواقع
          </p>
        </div>

        <div className="hero-photo-wrapper">
          <Image
            src="/images/hero-avatar.png"
            alt="عمر عبد الله"
            fill
            priority
            className="hero-photo-img"
          />
        </div>
      </div>
    </section>
  );
}
