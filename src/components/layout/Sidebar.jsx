import {
  User,
  GraduationCap,
  Briefcase,
  FolderKanban,
  Star,
  Award,
  FileText,
  CircleGauge,
  X,
} from "lucide-react";

import { useResume } from "../../context/ResumeContext";
import { calculateATSScore } from "../../utils/calculateATSScore";

function Sidebar() {
  const {
    resumeData,
    currentSection,
    setCurrentSection,
    sidebarOpen,
    setSidebarOpen,
  } = useResume();

  const atsScore = Math.round(calculateATSScore(resumeData));

  const menuItems = [
    {
      id: "personal",
      name: "Personal Information",
      icon: User,
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
    },
    {
      id: "experience",
      name: "Experience",
      icon: Briefcase,
    },
    {
      id: "projects",
      name: "Projects",
      icon: FolderKanban,
    },
    {
      id: "skills",
      name: "Skills",
      icon: Star,
    },
    {
      id: "certificates",
      name: "Certifications",
      icon: Award,
    },
    {
      id: "summary",
      name: "Summary",
      icon: FileText,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-[280px]
          flex-col
          justify-between
          bg-slate-900
          p-5
          text-white
          transition-transform
          duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:static
          lg:translate-x-0
        `}
      >
        <div>
          {/* Mobile Header */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <h2 className="text-lg font-bold">
              Resume Sections
            </h2>

            <button
              onClick={() => setSidebarOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <p className="mb-5 hidden text-xs font-semibold uppercase tracking-widest text-slate-400 lg:block">
            Resume Sections
          </p>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                    currentSection === item.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon size={20} />

                  <span className="font-medium">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-5">
          <div className="flex items-center gap-2">
            <CircleGauge
              size={20}
              className="text-yellow-400"
            />

            <h3 className="font-semibold">
              ATS Score
            </h3>
          </div>

          <div className="mt-5 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-yellow-400 text-2xl font-bold">
              {atsScore}%
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-slate-300">
            Complete more sections to improve your ATS score.
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;