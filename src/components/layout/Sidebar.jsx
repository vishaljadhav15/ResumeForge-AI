import {
  User,
  GraduationCap,
  Briefcase,
  FolderKanban,
  Star,
  Award,
  FileText,
  CircleGauge,
} from "lucide-react";

const menuItems = [
  {
    name: "Personal Information",
    icon: User,
    active: true,
  },
  {
    name: "Education",
    icon: GraduationCap,
  },
  {
    name: "Experience",
    icon: Briefcase,
  },
  {
    name: "Projects",
    icon: FolderKanban,
  },
  {
    name: "Skills",
    icon: Star,
  },
  {
    name: "Certifications",
    icon: Award,
  },
  {
    name: "Summary",
    icon: FileText,
  },
];

function Sidebar() {
  return (
    <aside className="w-[280px] bg-slate-900 text-white flex flex-col justify-between p-5">

      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Resume Sections
        </p>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200
                ${
                  item.active
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

      {/* ATS Card */}

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

        <div className="mt-5 flex items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-yellow-400 text-2xl font-bold">
            0%
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-slate-300">
          Complete more sections to improve your ATS score.
        </p>

      </div>

    </aside>
  );
}

export default Sidebar;