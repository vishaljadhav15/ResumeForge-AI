import { Download, Moon, Save, CheckCircle2, Menu } from "lucide-react";

import { useResume } from "../../context/ResumeContext";

import { calculateResumeProgress } from "../../utils/calculateResumeProgress";

function Navbar() {
  const { resumeData, setSidebarOpen } = useResume();

  const progress = calculateResumeProgress(resumeData);
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="flex h-[72px] items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu size={24} />
          </button>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-md">
            RF
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
              ResumeForge <span className="text-blue-600">AI</span>
            </h1>

            <p className="hidden text-sm text-slate-500 sm:block">
              Build. Optimize. Get Hired.
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="hidden lg:flex w-[320px] items-center gap-4">
          <div className="flex-1">
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-medium text-slate-700">
                Resume Progress
              </span>

              <span className="text-slate-500">{progress}% </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              ></div>{" "}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden xl:flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2">
            <CheckCircle2 size={18} className="text-green-600" />

            <span className="text-sm font-medium text-green-700">
              Draft Saved
            </span>
          </div>

          <button className="hidden md:flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100">
            <Moon size={20} />
          </button>

          <button className="hidden lg:flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 font-medium transition hover:bg-slate-100">
            <Save size={18} />
            Save
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 font-medium text-white shadow-lg transition hover:bg-blue-700 md:px-5">
            <Download size={18} />

            <span className="hidden sm:inline">Export PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
