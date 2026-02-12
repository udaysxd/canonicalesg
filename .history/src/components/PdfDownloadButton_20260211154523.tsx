'use client';

import { useState } from 'react';

interface PdfDownloadButtonProps {
  filename: string;
  title: string;
}

export default function PdfDownloadButton({ filename, title }: PdfDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    
    try {
      // Dynamically import html2pdf to avoid SSR issues
      const html2pdf = (await import('html2pdf.js')).default;
      
      // Get the article content
      const article = document.querySelector('article');
      if (!article) {
        console.error('Article element not found');
        return;
      }

      // Clone the article to modify it for PDF without affecting the page
      const clone = article.cloneNode(true) as HTMLElement;
      
      // Add title to the clone
      const titleElement = document.createElement('h1');
      titleElement.textContent = title;
      titleElement.style.fontSize = '24px';
      titleElement.style.fontWeight = 'bold';
      titleElement.style.marginBottom = '20px';
      titleElement.style.color = '#1a1a1a';
      
      // Wrap content in a container for styling
      const container = document.createElement('div');
      container.style.padding = '40px';
      container.style.backgroundColor = 'white';
      container.appendChild(titleElement);
      container.appendChild(clone);
      
      // Temporary append to body (hidden) for html2pdf to work
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      document.body.appendChild(container);

      const opt = {
        margin: [10, 10],
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait' 
        }
      };

      await html2pdf().set(opt).from(container).save();
      
      // Clean up
      document.body.removeChild(container);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1a1a1a] bg-white border border-[#ddd] rounded-md hover:bg-[#f5f5f5] hover:border-[#ccc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isGenerating ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Generating PDF...
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
