import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header() {
  const { content, toggleLanguage, lang } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const text = content.header;

  return (
    <header className="w-full py-6 bg-transparent">

      <div className="w-full max-w-[1280px] mx-auto px-4">
        
        <div className="flex justify-end items-center gap-4 mb-8 font-bold text-xs sm:text-sm tracking-widest text-[#6B7280] dark:text-[#D9D9D9]">
          
          <div className="flex items-center gap-2 cursor-pointer select-none" onClick={toggleTheme}>
            <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#4731D3]' : 'bg-[#3A3A3A]'}`}>
              <div className={`w-4 h-4 rounded-full bg-[#FFE86E] shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}>
              </div>
            
            </div>
            <span>{text.theme}</span>
          </div>

          <span className="text-[#777777] dark:text-[#777777]">|</span>

          <div className="cursor-pointer text-[#4731D3] dark:text-[#B7AAFF]" onClick={toggleLanguage}>
             <span className='text-[#CBF281]'>{lang === 'tr' ? '' : ''}</span>{text.lang}'YE GEÇ
          </div>
        </div>

        <div className="flex justify-between items-center">
          
          <Link to="/" className="w-10 h-10 bg-[#EEEBFF] dark:bg-[#4731D3] rounded-full flex justify-center items-center font-bold text-[#7B61FF] dark:text-[#8F88FF] transform -rotate-12 text-xl overflow-hidden">
            K
          </Link>

          <nav className="flex items-center gap-8 md:gap-16 text-[#6B7280] dark:text-[#D9D9D9] font-medium text-lg">
            <a href="#skills" className="hover:text-[#4731D3] dark:hover:text-[#8F88FF] transition-colors">
              {text.skills}
            </a>
            <a href="#projects" className="hover:text-[#4731D3] dark:hover:text-[#8F88FF] transition-colors">
              {text.projects}
            </a>
            <Link 
              to="/hire-me" 
              className="px-6 py-2 border border-[#3730A3] text-[#3730A3] bg-white rounded-md hover:bg-[#3730A3] hover:text-white transition-all dark:bg-white dark:text-[#3730A3] dark:hover:bg-[#3730A3] dark:hover:text-white"
            >
              {text.hire}
            </Link>
          </nav>
        </div>

      </div>
    </header>
  );
}