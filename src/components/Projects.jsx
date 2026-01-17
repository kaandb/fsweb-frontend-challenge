import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Projects() {
  const { content } = useContext(LanguageContext);
  const { projects } = content;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#252128] transition-colors duration-300">
      
      <div className="w-full max-w-[1280px] mx-auto px-4">

        <div className="w-full h-[1px] bg-[#BAB2E7] dark:bg-[#4B5563] mb-12"></div>

        <h2 className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12">
          {projects.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {projects.list.map((item) => (

            <div key={item.id} className="bg-white dark:bg-[#2B2730] rounded-xl shadow-xl overflow-hidden flex flex-col border border-gray-100 dark:border-none">
              
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#4338CA] dark:text-[#B7AAFF] mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-[#6B7280] dark:text-white mb-6 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-[#3730A3] rounded-full text-xs font-bold text-[#3730A3] dark:bg-[#383838] dark:border-none dark:text-[#8F88FF]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-auto">
                    <a href={item.links.repo} target="_blank" rel="noopener noreferrer" className="text-[#3730A3] dark:text-[#E1E1E1] font-semibold underline underline-offset-4 hover:text-[#4338CA] transition-colors">
                      Github
                    </a>
                    
                    {item.links.view && (
                      <a href={item.links.view} target="_blank" rel="noopener noreferrer" className="text-[#3730A3] dark:text-[#E1E1E1] font-semibold underline underline-offset-4 hover:text-[#4338CA] transition-colors">
                        View Site
                      </a>
                    )}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};