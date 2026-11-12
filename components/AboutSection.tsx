export default function AboutSection() {
  const principles = [
    {
      title: "التصميم المريح والمدروس",
      desc: "الابتعاد عن الزخارف المشتتة والتركيز على التباين البصري السليم والراحة التامة للعين في كل شاشة.",
    },
    {
      title: "كود منظم وقابل للتوسع",
      desc: "بناء تطبيقات بهياكل واضحة ووثائق نظيفة تسمح بتطوير المشروع وصيانته على المدى الطويل بكل سهولة.",
    },
    {
      title: "سرعة التنفيذ والموثوقية",
      desc: "الالتزام الدقيق بالمواعيد والحلول الهندسية التي تخدم أهداف العمل مباشرة دون تعقيدات زائدة.",
    },
  ];

  return (
    <section id="about" className="editorial-section">
      <div className="site-container">
        <div className="section-label-bar">
          <span className="section-index-num">01 //</span>
          <span className="section-label-text">نبذة عني</span>
        </div>

        <h2 className="section-heading-main">المسيرة البرمجية وفلسفة العمل</h2>

        <div className="about-editorial-box">
          <p className="about-paragraph-lead">
            أنا <strong>عمر عبد الله</strong>، مطور واجهات وتطبيقات متكاملة (Full Stack Developer). بدأت رحلتي في كتابة الكود وتصميم المواقع في سن الثانية عشرة بدافع الشغف الصرف بفهم كيفية بناء الأدوات الرقمية. على مدار سنوات من التعلم المستمر وبناء المشاريع الحقيقية، طورت أسلوب عمل يركز على الجمع بين واجهات مستخدم مريحة وهندسة خلفية متينة. أؤمن أن أفضل البرمجيات هي التي تؤدي وظيفتها بكفاءة هادئة دون تعقيد أو بهرجة مصطنعة.
          </p>

          <div className="about-metrics-row">
            {principles.map((item, index) => (
              <div key={index} className="metric-item">
                <span className="metric-val">
                  <span className="metric-dot" />
                  <span>{item.title}</span>
                </span>
                <p className="metric-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
