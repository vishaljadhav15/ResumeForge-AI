import {
  Download,
  Moon,
  Save,
  CheckCircle2,
} from "lucide-react";

function Navbar() {
  return (
    <header className="h-[72px] bg-white border-b border-slate-200 px-8 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-md">
          RF
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            ResumeForge <span className="text-blue-600">AI</span>
          </h1>

          <p className="text-sm text-slate-500">
            Build. Optimize. Get Hired.
          </p>
        </div>
      </div>

      {/* Center */}
      <div className="hidden lg:flex items-center gap-4 w-[320px]">
        <div className="flex-1">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-slate-700">
              Resume Progress
            </span>

            <span className="text-slate-500">
              40%
            </span>
          </div>

          <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
            <div className="h-full w-[40%] rounded-full bg-blue-600"></div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <div className="hidden md:flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2">
          <CheckCircle2
            size={18}
            className="text-green-600"
          />

          <span className="text-sm font-medium text-green-700">
            Draft Saved
          </span>
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100">
          <Moon size={20} />
        </button>

        <button className="hidden md:flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 font-medium transition hover:bg-slate-100">
          <Save size={18} />
          Save
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white shadow-lg transition hover:bg-blue-700">
          <Download size={18} />
          Export PDF
        </button>

      </div>

    </header>
  );
}

export default Navbar;