import { Server, Layout, Code2, Database } from "lucide-react";

export default function AboutSection() {
  const backendSkills = [
    "Node.js",
    "Express.js Framework",
    "RESTful APIs",
    "Database Architecture",
  ];

  const frontendSkills = [
    "HTML5",
    "CSS3 (Responsive)",
    "JavaScript (ES6+)",
    "React.js",
  ];

  return (
    <section id="about" className="about-section">
      {/* عنوان القسم */}
      <h2 className="about-title">. عني .</h2>

      {/* نبذة عني */}
      <div className="about-bio-container">
        <p className="about-bio-text">
          عمر، مطور واجهات وتطبيقات متكاملة (Full Stack Developer) شغفي ببرمجة وتصميم
          المواقع بدأ في سن الثانية عشرة. بفضل رحلتي التعليمية المستمرة،
          اكتسبت مهارات قوية في تطوير المواقع والأنظمة السحابية، حيث
          أسعى لتقديم منتجات رقمية عالية الجودة، تتسم بالدقة في التنفيذ وتصميم
          مريح وسريع ومناسب لأعلى المقاييس العالمية. يسعدني تحويل أفكارك ورؤيتك إلى واقع رقمي
          متميز.
        </p>
      </div>

      {/* طريقة العمل والتقنيات */}
      <div className="work-method-container">
        <h3 className="work-method-title">. طريقة العمل والتقنيات .</h3>
        <p className="work-method-subtitle">
          أعمل كمطور <span>Full Stack Developer</span> متكامل عبر بناء حلول برمجية قوية بالتقنيات الآتية:
        </p>

        <div className="tech-cards-grid">
          {/* كارت Backend */}
          <div className="tech-card">
            <div className="tech-card-header">
              <div className="tech-card-icon">
                <Server size={22} />
              </div>
              <div>
                <h4 className="tech-card-title">Backend Development</h4>
                <p className="tech-card-desc">الأنظمة الخلفية وقواعد البيانات وإدارة الـ APIs</p>
              </div>
            </div>

            <ul className="tech-badges-list">
              {backendSkills.map((skill, index) => (
                <li key={index} className="tech-badge">
                  <span className="tech-badge-dot" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* كارت Frontend */}
          <div className="tech-card">
            <div className="tech-card-header">
              <div className="tech-card-icon">
                <Layout size={22} />
              </div>
              <div>
                <h4 className="tech-card-title">Frontend Development</h4>
                <p className="tech-card-desc">بناء واجهات مستخدم تفاعلية وسريعة الاستجابة</p>
              </div>
            </div>

            <ul className="tech-badges-list">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="tech-badge">
                  <span className="tech-badge-dot" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
