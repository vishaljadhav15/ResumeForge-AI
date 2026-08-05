import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import EditorPanel from "../editor/EditorPanel";
import ResumePreview from "../preview/ResumePreview";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-64px)]">
        <Sidebar />

        <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
          <EditorPanel />

          <ResumePreview />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;