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
      const html2pdf = (await import('html2pdf.js')).default;
      
      const article = document.querySelector('article');
      if (!article) {
        console.error('Article element not found');
        return;
      }

      // Create container with proper dimensions
      const container = document.createElement('div');
      container.style.width = '800px';
      container.style.padding = '40px';
      container.style.backgroundColor = 'white';
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';
      
      // Add title
      const titleElement = document.createElement('h1');
      titleElement.textContent = title;
      titleElement.style.fontSize = '28px';
      titleElement.style.fontWeight = 'bold';
      titleElement.style.marginBottom = '24px';
      titleElement.style.color = '#1a1a1a';
      titleElement.style.lineHeight = '1.3';
      container.appendChild(titleElement);
      
      // Copy article HTML content directly
      const contentDiv = document.createElement('div');
      contentDiv.innerHTML = article.innerHTML;
      container.appendChild(contentDiv);
      
      // Add necessary styles for PDF rendering
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        h2 { font-size: 22px; font-weight: 600; margin-top: 32px; margin-bottom: 16px; color: #1a1a1a; }
        h3 { font-size: 18px; font-weight: 600; margin-top: 24px; margin-bottom: 12px; color: #222; }
        p { font-size: 16px; line-height: 1.7; margin-bottom: 16px; color: #333; }
        li { font-size: 16px; line-height: 1.7; margin-bottom: 8px; color: #333; }
        ul, ol { margin-bottom: 16px; padding-left: 24px; }
        strong { font-weight: 600; color: #111; }
        hr { margin: 32px 0; border: none; border-top: 1px solid #ddd; }
      `;
      container.appendChild(styleElement);
      
      document.body.appendChild(container);

      // Wait for content to be rendered
      await new Promise(resolve => setTimeout(resolve, 100));

      const opt = {
        margin: [15, 15] as [number, number],
        filename: filename,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false,
          width: 800
        },
        jsPDF: { 
          unit: 'mm' as const, 
          format: 'a4' as const, 
          orientation: 'portrait' as const
        }
      };

      await html2pdf().set(opt).from(container).save();
      
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
