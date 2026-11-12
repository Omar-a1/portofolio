"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const mailtoLink = `mailto:3ommar.a@gmail.com?subject=${encodeURIComponent(
        "تواصل جديد من موقعك الشخصي"
      )}&body=${encodeURIComponent(
        `الاسم: ${formData.name}\nالبريد: ${formData.email}\n\nالرسالة:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    }, 500);
  };

  return (
    <section id="contact" className="editorial-section">
      <div className="site-container">
        <div className="section-label-bar">
          <span className="section-index-num">04 //</span>
          <span className="section-label-text">تواصل معي</span>
        </div>

        <h2 className="section-heading-main">بدء محادثة عمل</h2>
        <p className="section-lead-text">
          إذا كان لديك مشروع جديد ترغب في تنفيذه، أو استفسار تقني، يُسعدني استقبال رسالتك وسأرد في أقرب وقت.
        </p>

        <div className="contact-editorial-layout">
          {/* Direct Channels */}
          <div className="direct-channels-list">
            <a
              href="mailto:3ommar.a@gmail.com"
              className="channel-row"
            >
              <span className="channel-label">البريد الإلكتروني المباشر</span>
              <span className="channel-val">3ommar.a@gmail.com</span>
            </a>

            <a
              href="https://wa.me/201098473553"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-row"
            >
              <span className="channel-label">واتساب (محادثة مباشرة)</span>
              <span className="channel-val">+20 1098473553</span>
            </a>

            <a
              href="tel:+201098473553"
              className="channel-row"
            >
              <span className="channel-label">رقم الهاتف</span>
              <span className="channel-val">+20 1098473553</span>
            </a>
          </div>

          {/* Minimalist Contact Form */}
          <div className="minimal-contact-form">
            <form onSubmit={handleSubmit}>
              <div className="clean-form-group">
                <label htmlFor="name" className="clean-label">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الكريم"
                  className="clean-input"
                />
              </div>

              <div className="clean-form-group">
                <label htmlFor="email" className="clean-label">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  dir="ltr"
                  className="clean-input"
                  style={{ textAlign: "right" }}
                />
              </div>

              <div className="clean-form-group">
                <label htmlFor="message" className="clean-label">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اشرح فكرة مشروعك أو ما تحتاجه باختصار..."
                  className="clean-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-form-submit"
              >
                {isSubmitting ? "جاري المعالجة..." : "إرسال الرسالة"}
              </button>

              {isSubmitted && (
                <div className="form-alert-success">
                  تم فتح برنامج البريد الإلكتروني لإرسال رسالتك مباشرة، شكراً لتواصلك!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
