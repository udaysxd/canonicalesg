'use client';

import { useState } from 'react';

interface PdfDownloadButtonProps {
  filename: string;
  title: string;
}

export default function PdfDownloadButton({ filename, title }: PdfDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = () => {
    setIsGenerating(true);
    
    // Store original title
    const originalTitle = document.title;
    
    // Set document title for PDF
    document.title = title;
    
    // Add print styles
    const style = document.createElement('style');
    style.id = 'pdf-print-styles';
    style.textContent = `
      @media print {
        header, footer, nav, .no-print { display: none !important; }
        body { 
          font-family: Georgia, 'Times New Roman', serif !important;
          font-size: 12pt !important;
          line-height: 1.6 !important;
          color: #000 !important;
        }
        h1 { font-size: 24pt !important; margin-bottom: 20pt !important; }
        h2 { font-size: 18pt !important; margin-top: 24pt !important; margin-bottom: 12pt !important; }
        h3 { font-size: 14pt !important; margin-top: 18pt !important; margin-bottom: 9pt !important; }
        p { font-size: 12pt !important; margin-bottom: 12pt !important; }
        a { text-decoration: none !important; color: #000 !important; }
        article { max-width: 100% !important; }
        .prose p { font-size: 12pt !important; }
        .prose h2 { font-size: 18pt !important; }
        .prose h3 { font-size: 14pt !important; }
      }
    `;
    document.head.appendChild(style);
    
    // Small delay to ensure styles are applied
    setTimeout(() => {
      window.print();
      
      // Cleanup
      document.title = originalTitle;
      const printStyle = document.getElementById('pdf-print-styles');
      if (printStyle) {
        document.head.removeChild(printStyle);
      }
      setIsGenerating(false);
    }, 100);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1a1a1a] bg-white border border-[#ddd] rounded-md hover:bg-[#f5f5f5] hover:border-[#ccc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed no-print"
    >
      {isGenerating ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Preparing...
        </>
      ) : (
        <>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download as PDF
        </>
      )}
    </button>
  );
}
