export default function Footer() {
  return (
    <footer className="corporate-footer">
      <div className="site-container">
        <div className="footer-inner-row">
          <div className="footer-brand-side">
            <span style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "15px" }}>
              عمر عبد الله
            </span>
            <span style={{ margin: "0 8px", color: "var(--border-divider)" }}>|</span>
            <span style={{ color: "var(--text-muted)", fontSize: "13px" }}>
              مطور واجهات وتطبيقات متكاملة
            </span>
          </div>

          <div className="footer-copy-text">
            جميع الحقوق محفوظة © 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
