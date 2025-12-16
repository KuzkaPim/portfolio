import { Document, Page, pdfjs } from 'react-pdf';
import { useLocale } from 'next-intl';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const PdfView = () => {
  const locale = useLocale();

  return (
    <Document
      file={locale === 'ru' ? '/assets/RESUME_RU.pdf' : '/assets/RESUME_EN.pdf'}
      loading=""
    >
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
