"use client";

interface NavbarProps {
  activeTab: string;
  onNavigate: (id: string) => void;
}

export default function Navbar({ activeTab, onNavigate }: NavbarProps) {
  const navItems = [
    { id: "home", label: "الرئيسية" },
    { id: "about", label: "عني" },
    { id: "projects", label: "مشاريعي" },
    { id: "contact", label: "تواصل" },
  ];

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-btn ${isActive ? "active" : ""}`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
