import React, { useEffect } from 'react';
import { X, ExternalLink, Download, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-3xl bg-white border border-stone-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-200 bg-stone-50/80 backdrop-blur-xs flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-stone-900 text-white">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-950 uppercase tracking-tight">
                {PERSONAL_INFO.name} — Curriculum Vitae
              </h3>
              <p className="text-[11px] font-mono text-stone-500">
                Official PDF Document
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 hover:border-stone-400 transition-colors shadow-2xs"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Madhusundharan_P_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-500 hover:text-stone-950 hover:bg-stone-200 transition-colors ml-1 focus:outline-none"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="relative w-full flex-1 bg-stone-100 overflow-hidden flex flex-col">
          <iframe
            src={`${PERSONAL_INFO.resumeUrl}#toolbar=1&navpanes=0`}
            title="Madhusundharan P Resume"
            className="w-full h-full border-none"
          />

          {/* Mobile Fallback Overlay if browser doesn't render iframe PDF */}
          <div className="sm:hidden p-3 bg-stone-50 border-t border-stone-200 text-center">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-stone-900 underline underline-offset-4"
            >
              Tap here to open full PDF directly in browser
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
