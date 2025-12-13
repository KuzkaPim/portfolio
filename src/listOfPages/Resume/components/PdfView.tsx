import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfView = () => {
  return (
    <Document file="/assets/resume.pdf" loading="">
      <Page
        className="rounded-2xl overflow-hidden mt-8"
        loading=""
        pageNumber={1}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        scale={1.5}
      />
    </Document>
  );
};

export default PdfView;
