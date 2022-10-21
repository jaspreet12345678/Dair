import { Viewer } from "@react-pdf-viewer/core";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";

const Pdf = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "750px",
        }}
      >
        {/* <Viewer fileUrl="./Rapport-GRM.pdf" /> */}
        <Viewer
          fileUrl="./Rapport-GRM.pdf"
          plugins={[
            // Register plugins
            defaultLayoutPluginInstance,
          ]}
        />
      </div>
    </Worker>
  );
};

export default Pdf;
