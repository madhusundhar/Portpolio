import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Code2, 
  Phone, 
  MapPin, 
  Sparkles, 
  FileText,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  onResumeClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onResumeClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#1c1917', '#44403c', '#78716c', '#d6d3d1']
      });
    } catch {
      // safe fallback
    }

    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            <span>08</span>
            <span className="w-8 h-[1px] bg-stone-300" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 uppercase">
            LET'S CONNECT AND BUILD SOMETHING.
          </h2>
          <p className="mt-2 text-stone-500 text-sm sm:text-base font-serif italic max-w-xl">
            "I'm open to opportunities, internships, collaborations and interesting technical challenges."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="editorial-card p-6 sm:p-7 rounded-2xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2.5 truncate">
                  <div className="p-1.5 rounded-lg bg-stone-200 text-stone-900 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono text-stone-900 hover:text-stone-600 transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white hover:bg-stone-100 text-stone-600 hover:text-stone-950 border border-stone-200 transition-colors flex-shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Phone Details */}
              <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-stone-600">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-stone-800 flex-shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-stone-800 flex-shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="editorial-card p-6 rounded-2xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                Profiles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-800 hover:text-blue-600 transition-all text-xs font-medium"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-800 hover:text-stone-950 transition-all text-xs font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-800 hover:text-amber-600 transition-all text-xs font-medium"
                >
                  <Code2 className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

            {/* Resume Access Card */}
            <div className="editorial-card p-6 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-stone-100 text-stone-900">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-950 uppercase tracking-tight">Curriculum Vitae</h4>
                  <p className="text-xs text-stone-500 font-mono">PDF ready for recruiters</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    onResumeClick();
                  }}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors shadow-xs"
                >
                  View Resume
                </a>
                <a
                  href={PERSONAL_INFO.driveResumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-950 border border-stone-200 transition-colors"
                  title="Open Google Drive folder"
                  aria-label="Open Google Drive folder"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-6 sm:p-8 rounded-2xl shadow-sm relative">
              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-bold text-stone-950 uppercase tracking-tight flex items-center gap-2">
                  <span>Send a Direct Message</span>
                  <Sparkles className="w-4 h-4 text-stone-900" />
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  Dispatches directly to my inbox at {PERSONAL_INFO.email}.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-medium text-stone-700">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager"
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-medium text-stone-700">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-medium text-stone-700">
                    Subject / Opportunity
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Internship Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-medium text-stone-700">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Madhusundharan, we reviewed your projects and would like to schedule an interview..."
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-stone-950 hover:bg-stone-800 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none group shadow-xs"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message via Email Client</span>
                </button>

                {formSubmitted && (
                  <p className="text-xs text-center text-emerald-600 font-mono pt-1">
                    ✓ Email client opened. Thank you for connecting!
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
