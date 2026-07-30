import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import EditorPanel from "../editor/EditorPanel";
import ResumePreview from "../preview/ResumePreview";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar />
        <EditorPanel />
        <ResumePreview />
      </div>
    </div>
  );
}

export default DashboardLayout;