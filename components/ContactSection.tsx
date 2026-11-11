import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">. تواصل .</h2>
      <p className="contact-subtitle">
        يمكنك التواصل معي عن طريق الطرق الاتية :
      </p>

      <div className="contact-pills-wrapper">
        {/* 1. Email */}
        <a
          href="mailto:3ommar.a@gmail.com"
          className="contact-pill"
          dir="ltr"
        >
          <span className="contact-pill-text">3ommar.a@gmail.com</span>
          <Mail size={22} className="contact-pill-icon" />
        </a>

        {/* 2. Call */}
        <a
          href="tel:+201098473553"
          className="contact-pill"
          dir="ltr"
        >
          <span className="contact-pill-text">+20 1098473553</span>
          <Phone size={22} className="contact-pill-icon" />
        </a>

        {/* 3. WhatsApp / Chat */}
        <a
          href="https://wa.me/201098473553"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-pill"
          dir="ltr"
        >
          <span className="contact-pill-text">+20 1098473553</span>
          <MessageCircle size={22} className="contact-pill-icon" />
        </a>
      </div>
    </section>
  );
}
