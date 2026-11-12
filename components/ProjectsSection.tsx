import Image from "next/image";

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  problemSolved: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
}

const projectsList: ProjectItem[] = [
  {
    id: "zakker",
    num: "01",
    title: "مشروع ذكّر — تطبيق الأذكار والأدعية اليومية",
    category: "تطبيق ويب ديني متكامل",
    problemSolved:
      "توفير بيئة هادئة وبسيطة لقراءة ومتابعة الورد والأذكار اليومية بدون إعلانات مزعجة أو تشويش بصري، مع دعم التصفح السريع والعمل دون انقطاع.",
    tags: ["Html", "Css","Java script", "Pure CSS", "Responsive"],
    demoUrl: "https://zakkerr.vercel.app",
    githubUrl: "https://github.com/3ommar-a/zakker",
    image: "/images/project-zakker.png",
  },
  {
    id: "customers",
    num: "02",
    title: "منصة تنظيم العملاء — Customers CRM",
    category: "نظام إدارة بيانات ومتابعة أعمال",
    problemSolved:
      "تنظيم سجلات العملاء والحالات والمهام في لوحة تحكم واحدة وسريعة، مما يقلل الوقت الضائع في المتابعات اليدوية ويزيد من دقة تتبع البيانات.",
    tags: ["JavaScript", "Node.js", "Express", "Database (Mongo DB)"],
    demoUrl: "https://mycustomers.vercel.app",
    githubUrl: "https://github.com/3ommar-a/mycustomers",
    image: "/images/project-customers.png",
  },
  {
    id: "engz",
    num: "03",
    title: "منصة إنجز — Landing Page",
    category: "صفحة هبوط رقمية عالية التحويل",
    problemSolved:
      "صياغة صفحة هبوط تفاعلية لمنتج تقني توضح القيمة الجوهرية للخدمة وتشجع الزوار على اتخاذ الإجراء من خلال تجربة تصفح سلسة ومقنعة.",
    tags: ["Html", "UI/UX", "Interactive Web","Css", "Performance"],
    demoUrl: "https://engz-app.vercel.app",
    githubUrl: "https://github.com/3ommar-a/engz-landing",
    image: "/images/project-engz.png",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="editorial-section">
      <div className="site-container">
        <div className="section-label-bar">
          <span className="section-index-num">03 //</span>
          <span className="section-label-text">أعمال مختارة</span>
        </div>

        <h2 className="section-heading-main">المشاريع المنفذة</h2>
        <p className="section-lead-text">
          أمثلة واقعية على تطبيقات وأنظمة قمت بتطويرها لحل مشكلات فعلية وتقديم قيمة حقيقية للمستخدمين.
        </p>

        <div className="projects-editorial-list">
          {projectsList.map((project) => (
            <article key={project.id} className="project-editorial-row">
              {/* Project Visual Preview */}
              <div className="project-preview-box">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 860px) 100vw, 290px"
                />
              </div>

              {/* Project Editorial Content */}
              <div className="project-info-area">
                <div>
                  <div className="project-top-meta">
                    <span className="project-num">PROJECT {project.num}</span>
                    <span className="project-category-badge">{project.category}</span>
                  </div>

                  <h3 className="project-headline">{project.title}</h3>

                  <p className="project-problem-text">{project.problemSolved}</p>

                  <ul className="project-tags-row">
                    {project.tags.map((tag, i) => (
                      <li key={i} className="project-tag-item">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-links-group">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-main"
                  >
                    <span>معاينة مباشرة</span>
                    <span aria-hidden="true">↗</span>
                  </a>

                  {/* <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-github"
                  >
                    <span>مستودع الكود</span>
                    <span aria-hidden="true">↗</span>
                  </a> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
