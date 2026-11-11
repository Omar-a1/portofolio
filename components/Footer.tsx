import { Mail, Phone, MessageCircle } from "lucide-react";

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const pageLinks = [
    { id: "home", label: "الرئيسية" },
    { id: "about", label: "عني" },
    { id: "projects", label: "مشاريعي" },
    { id: "contact", label: "تواصل" },
  ];

  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-main-row">
          {/* الصفحات */}
          <div className="footer-col footer-col-right">
            <span className="footer-heading">. الصفحات .</span>
            <div className="footer-links-list">
              {pageLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="footer-link-btn"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* تواصل */}
          <div className="footer-col">
            <span className="footer-heading">. تواصل .</span>
            <div className="footer-pills-row">
              <a
                href="mailto:3ommar.a@gmail.com"
                className="footer-pill"
                dir="ltr"
              >
                <span className="footer-pill-text">3ommar.a@gmail.com</span>
                <Mail size={14} className="footer-pill-icon" />
              </a>

              <a
                href="tel:+201098473553"
                className="footer-pill"
                dir="ltr"
              >
                <span className="footer-pill-text">+20 1098473553</span>
                <Phone size={14} className="footer-pill-icon" />
              </a>

              <a
                href="https://wa.me/201098473553"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-pill"
                dir="ltr"
              >
                <span className="footer-pill-text">+20 1098473553</span>
                <MessageCircle size={14} className="footer-pill-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          All rights reserved © Omar Abdallah
        </div>
      </div>
    </footer>
  );
}
