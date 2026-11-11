import Image from "next/image";
import { ExternalLink } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  url: string;
  image: string;
  width: number;
  height: number;
}

const projectsData: ProjectItem[] = [
  {
    id: "zakker",
    title: "مشروع ذكّر",
    category: "مشروع ديني",
    url: "https://zakkerr.vercel.app",
    image: "/images/project-zakker.png",
    width: 160,
    height: 160,
  },
  {
    id: "customers",
    title: "مشروع تنظيم عملاء",
    category: "مشروع تنظيم",
    url: "https://mycustomers.vercel.app",
    image: "/images/project-customers.png",
    width: 250,
    height: 160,
  },
  {
    id: "engz",
    title: "مشروع انجز",
    category: "صفحة هبوط (تجريبية)",
    url: "https://engz-app.vercel.app",
    image: "/images/project-engz.png",
    width: 250,
    height: 160,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">. مشاريعي .</h2>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div
              className="project-img-wrapper"
              style={{ width: `${project.width}px`, height: `${project.height}px` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="hero-photo-img"
              />
            </div>

            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-category">{project.category}</p>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
              dir="ltr"
            >
              <span>{project.url.replace("https://", "")}</span>
              <ExternalLink size={11} className="project-link-icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
