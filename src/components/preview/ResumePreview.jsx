import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { useResume } from "../../context/ResumeContext";

import { Button } from "../common";
import ResumePage from "./ResumePage";

function ResumePreview() {
  const { resumeData } = useResume();

  const resumeRef = useRef(null);

  const handleExportPDF = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${resumeData.fullName || "Resume"}`,
  });

  return (
    <section className="w-full overflow-y-auto border-l border-slate-200 bg-slate-100 p-4 md:p-6 lg:w-[520px] lg:p-8">

      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-800">
          Live Preview
        </h2>

        <Button onClick={handleExportPDF}>
          Export PDF
        </Button>
      </div>

      <div
        className="flex justify-center"
      >
        <div
          ref={resumeRef}
          className="resume-print w-full max-w-[595px] bg-white shadow-2xl"
        >
          <ResumePage />
        </div>
      </div>

    </section>
  );
}

export default ResumePreview;