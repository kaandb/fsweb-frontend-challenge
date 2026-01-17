import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {
  const { content } = useContext(LanguageContext);
  const { hero } = content; 

  return (
    <section className="pt-10 pb-20 bg-white dark:bg-[#252128] transition-colors duration-300">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="w-20 h-[1px] bg-[#4338CA] dark:bg-[#B7AAFF]"></div>
              <span className="text-[#4338CA] dark:text-[#B7AAFF] font-medium">Kaan Demirbağ</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-6 leading-tight">
              {hero.title}
            </h1>

            <p className="text-[#6B7280] dark:text-white text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              {hero.desc}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              
              <Link 
                to="/hire-me" 
                className="px-8 py-3 bg-[#4731D3] text-white rounded-md hover:bg-[#3730A3] transition-colors font-medium inline-block"
              >
                {hero.cta_hire}
              </Link>
              
              <a 
                href={hero.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border border-[#E1E1E1] dark:border-[#FFFFFF] dark:bg-[#252128] dark:text-white rounded-md flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-[#383838] transition-colors text-[#3730A3]"
              >
                <FaGithub /> {hero.cta_github}
              </a>

              <a 
                href={hero.linkedinLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border border-[#E1E1E1] dark:border-[#FFFFFF] dark:bg-[#252128] dark:text-white rounded-md flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-[#383838] transition-colors text-[#3730A3]"
              >
                <FaLinkedinIn /> {hero.cta_linkedin}
              </a>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -z-10 top-0 right-0 w-3/4 h-3/4 bg-[#CBF281] dark:bg-[#000000] rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
              alt="Profile" 
              className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-square"
            />
          </div>

        </div>
      </div>
    </section>
  );
};