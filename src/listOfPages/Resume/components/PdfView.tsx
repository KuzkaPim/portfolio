import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfView = () => {
  return (
    <Document file="/assets/resume.pdf" loading="">
      <div className="mt-8 w-full rounded-2xl aspect-[0.7/1] bg-primary overflow-hidden">
        <Page
          loading=""
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={1.5}
        />
      </div>
    </Document>
  );
};

export default PdfView;
