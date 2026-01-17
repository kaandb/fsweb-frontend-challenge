import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Profile() {
  const { content } = useContext(LanguageContext);
  const { profile } = content;

  return (
    <section id="profile" className="py-20 bg-white dark:bg-[#252128] transition-colors duration-300">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        
        <div className="w-full h-[1px] bg-[#BAB2E7] dark:bg-[#4B5563] mb-12"></div>

        <h2 className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12">
          {profile.title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          
          <div className="flex-1">
             
             <h3 className="text-2xl font-medium text-[#4338CA] dark:text-[#B7AAFF] mb-6">
                {profile.basicInfoTitle}
             </h3>
              
             <div className="flex flex-col gap-4">
                {profile.basicInfo.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-bold text-[#1F2937] dark:text-white w-40">
                      {item.label}
                    </span>
                    <span className="text-[#1F2937] dark:text-white mt-1 sm:mt-0">
                      {item.value}
                    </span>
                  </div>
                ))}
             </div>
          </div>

          <div className="flex-1">
              
              <h3 className="text-2xl font-medium text-[#4338CA] dark:text-[#B7AAFF] mb-6">
                {profile.aboutMeTitle}
              </h3>

              <div className="text-[#6B7280] dark:text-white text-lg leading-relaxed space-y-4">
                {profile.aboutMeDesc.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
          </div>

        </div>

      </div>
    </section>
  );
};