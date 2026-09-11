import { useState, type FormEvent } from 'react';
import { MessageSquare, X, Send, CheckCircle2 } from 'lucide-react';

interface FeedbackTabProps {
  userEmail: string;
}

export const FeedbackTab = ({ userEmail }: FeedbackTabProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Fallback: mailto link
    const mailto = `mailto:${userEmail}?subject=${encodeURIComponent('Direct Inquiry / Feedback for Ikenna')}&body=${encodeURIComponent(
      `From: ${email || 'Anonymous'}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailto;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setMessage('');
      setEmail('');
      setIsOpen(false);
    }, 2000);
  };

  return (
    <>
      {/* Floating Tech Blue Tab on Right Edge - Styled as in photo */}
      <button
        onClick={() => setIsOpen(true)}
        id="portfolio-feedback-tab"
        className="fixed right-0 top-3/4 -translate-y-1/2 z-40 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs py-2 px-3.5 rounded-l-lg shadow-lg flex items-center gap-1.5 transition-all cursor-pointer tracking-wide rotate-0"
        title="Send feedback or direct inquiry"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>Feedback</span>
      </button>

      {/* Feedback Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div 
            className="bg-[#111111] rounded-2xl shadow-2xl border border-[#333333] w-full max-w-md p-6 relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-400 hover:bg-[#222222] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-900/20 text-[#2563eb] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Send Direct Feedback</h3>
                <p className="text-xs text-gray-500">Reach Ikenna Emmanuel (kendikreator)</p>
              </div>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-white text-sm">Thank you for your feedback!</h4>
                <p className="text-xs text-gray-500">Opening your email client to deliver message...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Your Email (optional)</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#444444] rounded-lg focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Feedback / Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share feedback, job inquiry, or project request..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#444444] rounded-lg focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-2 text-xs font-medium text-gray-400 hover:bg-[#222222] rounded-lg cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
