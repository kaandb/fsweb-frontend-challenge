import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Skills() {
  const { content } = useContext(LanguageContext);
  const { skills } = content;

  return (

    <section id="skills" className="py-20 bg-white dark:bg-[#252128] transition-colors duration-300">
      
      <div className="w-full max-w-[1280px] mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12">
          {skills.title}
        </h2>

        <div className="flex flex-wrap gap-10 lg:gap-24">
          
          {skills.list.map((item, index) => (

            <div key={index} className="flex-1 min-w-[300px] max-w-[500px]">
               
               <h3 className="text-3xl font-medium text-[#4338CA] dark:text-[#B7AAFF] mb-6">
                 {item.name}
               </h3>
               
               <p className="text-[#6B7280] dark:text-white text-base leading-relaxed">
                 {item.desc}
               </p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}