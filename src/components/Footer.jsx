import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Footer() {
  const { content } = useContext(LanguageContext);
  const { footer } = content;

  return (
    <footer className="py-24 bg-[#F9F9F9] dark:bg-[#141414] transition-colors duration-300">
      
      <div className="w-full max-w-[1280px] mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
          

          <div className="text-center md:text-left">
            

            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-10 max-w-lg leading-tight">
              {footer.title}
            </h2>
            

            <a 
              href={`mailto:${footer.email}`} 
              className="flex items-center justify-center md:justify-start gap-2 text-[#AF0C48] dark:text-[#E1E1E1] transition-colors"
            >

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                 <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-medium underline underline-offset-4">
                {footer.email}
              </span>
            </a>

          </div>


          <div className="flex gap-8">
            {footer.links.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target={link.name === "Personal Blog" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`text-lg font-medium transition-colors ${
                  index === 0 
                    ? "text-[#0A0A14] dark:text-[#E1E1E1] hover:text-[#4338CA]" 
                    : "text-[#00AB6B] hover:text-[#008f59]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};