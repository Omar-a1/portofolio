export default function SkillsSplitSection() {
  const frontendStack = [
    {
      name: "React.js & Next.js",
      role: "بناء واجهات متقدمة، سريعة التحميل، ومعمارية مكونات معيارية",
    },
    {
      name: "JavaScript (ES6+)",
      role: "برمجة المنطق التفاعلي ومعالجة البيانات على جانب العميل",
    },
    {
      name: "CSS3 / Pure Native CSS",
      role: "تصميم متجاوب دقيق لجميع الشاشات وتأثيرات انسيابية دون تبعيات زائدة",
    },
    {
      name: "HTML5 Semantic Standards",
      role: "هيكلة قياسية محسنة لمحركات البحث ومتاحة لكافة المستخدمين (A11y)",
    },
    {
      name: "أداء واستجابة الواجهات",
      role: "تقليل زمن التحميل وتحسين تجربة المستخدم وتقليل استهلاك الموارد",
    },
  ];

  const backendStack = [
    {
      name: "Node.js Environment",
      role: "بيئة تشغيل عالية الكفاءة قادرة على معالجة الطلبات المتزامنة",
    },
    {
      name: "Express.js Framework",
      role: "تصميم وهندسة واجهات برمجة التطبيقات (RESTful APIs) بسرعة وثبات",
    },
    {
      name: "Python",
      role: "أتمتة المهام، معالجة البيانات، وبناء السكربتات المساعدة الموثوقة",
    },
    {
      name: "Database Architecture",
      role: "تصميم وتنظيم قواعد البيانات العلائقية وغير العلائقية والعمليات الآمنة",
    },
    {
      name: "الأمان وهيكلة الـ APIs",
      role: "التحقق من البيانات، المصادقة (Auth)، وإدارة استجابة المخدم السليمة",
    },
  ];

  return (
    <section id="skills" className="editorial-section">
      <div className="site-container">
        <div className="section-label-bar">
          <span className="section-index-num">02 //</span>
          <span className="section-label-text">القدرات والخبرة التقنية</span>
        </div>

        <h2 className="section-heading-main">تقسيم التخصص التقني</h2>
        <p className="section-lead-text">
          تنظيم واضح ومنفصل للمهارات التقنية لتمكين العملاء والفرق البرمجية من تقييم مجالات العمل بثقة ودقة.
        </p>

        <div className="stack-split-grid">
          {/* 1. Frontend Column */}
          <div className="stack-column">
            <div className="stack-col-header">
              <span className="stack-col-tag">FRONTEND ARCHITECTURE</span>
              <h3 className="stack-col-title">تطوير واجهات المستخدم</h3>
              <p className="stack-col-desc">
                تحويل التصاميم إلى واجهات تفاعلية سريعة، متوافقة ومريحة للمستخدم
              </p>
            </div>

            <ul className="stack-items-list">
              {frontendStack.map((item, idx) => (
                <li key={idx} className="stack-item-row">
                  <span className="stack-tech-name">
                    <span className="tech-dot-indicator" />
                    <span>{item.name}</span>
                  </span>
                  <span className="stack-tech-role">{item.role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Backend Column */}
          <div className="stack-column">
            <div className="stack-col-header">
              <span className="stack-col-tag">BACKEND ENGINEERING</span>
              <h3 className="stack-col-title">تطوير الأنظمة الخلفية</h3>
              <p className="stack-col-desc">
                بناء مخدمات مستقرة، قواعد بيانات مهيكلة، وربط رقمي متين
              </p>
            </div>

            <ul className="stack-items-list">
              {backendStack.map((item, idx) => (
                <li key={idx} className="stack-item-row">
                  <span className="stack-tech-name">
                    <span className="tech-dot-indicator" />
                    <span>{item.name}</span>
                  </span>
                  <span className="stack-tech-role">{item.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
