import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Language } from '@domain/types/Language';
import { getTranslations } from '@shared/i18n/index';
import { CONTACT_EMAIL_SUBJECT_PREFIX } from '@shared/constants';
import { useLanguage } from '@shared/hooks/useLanguage';

interface Props {
  lang?: Language;
  email: string;
}

export default function ContactForm({ lang = 'es', email }: Props) {
  const { lang: currentLang } = useLanguage(lang);
  const t = getTranslations(currentLang);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const subject = encodeURIComponent(
      `${CONTACT_EMAIL_SUBJECT_PREFIX[currentLang]} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    );
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setFormData({ name: '', email: '', message: '' });
    setStatus('success');
    
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-down">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-700 shadow-md">
              Contacto
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-display text-gray-900 dark:text-gray-50 mb-4 sm:mb-6 tracking-tight px-2">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium px-4">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <form onSubmit={handleSubmit} className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 border-2 border-gray-200 dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 space-y-5 sm:space-y-6 overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 dark:bg-gray-800 opacity-20 rounded-bl-full"></div>
            
            <div className="relative z-10">
              <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-400/50 dark:focus:ring-gray-600/50 focus:border-gray-400 dark:focus:border-gray-600 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm text-sm sm:text-base"
                placeholder={t.contact.name}
              />
            </div>

            <div className="relative z-10">
              <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                {t.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-400/50 dark:focus:ring-gray-600/50 focus:border-gray-400 dark:focus:border-gray-600 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm text-sm sm:text-base"
                placeholder={t.contact.email}
              />
            </div>

            <div className="relative z-10">
              <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-400/50 dark:focus:ring-gray-600/50 focus:border-gray-400 dark:focus:border-gray-600 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 min-h-[120px] sm:min-h-[140px] resize-y shadow-sm text-sm sm:text-base"
                placeholder={t.contact.message}
                rows={6}
              />
            </div>

            {status === 'success' && (
              <div className="relative z-10 p-4 sm:p-5 bg-gray-100 dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 rounded-xl sm:rounded-2xl text-gray-800 dark:text-gray-200 font-semibold animate-scale-in shadow-lg text-sm sm:text-base">
                {t.contact.success}
              </div>
            )}

            {status === 'error' && (
              <div className="relative z-10 p-4 sm:p-5 bg-gray-100 dark:bg-gray-800 border-2 border-gray-500 dark:border-gray-500 rounded-xl sm:rounded-2xl text-gray-800 dark:text-gray-200 font-semibold animate-scale-in shadow-lg text-sm sm:text-base">
                {t.contact.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group relative w-full inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base lg:text-lg bg-gray-900 dark:bg-gray-100 text-gray-50 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl hover:shadow-gray-900/50 dark:hover:shadow-gray-100/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 relative z-10" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="relative z-10">{t.contact.sending}</span>
                </>
              ) : (
                <span className="relative z-10">{t.contact.send}</span>
              )}
            </button>
          </form>

          <div className="text-center mt-8 sm:mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 font-medium">{t.contact.or}</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-3 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs sm:text-sm md:text-base">{email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
