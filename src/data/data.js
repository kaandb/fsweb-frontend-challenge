export const data = {
  tr: {
    header: {
      skills: "Yetenekler",
      projects: "Projeler",
      hire: "Beni İşe Al",
      theme: "KOYU MOD",
      lang: "İNGİLİZCE"
    },
    hero: {
      title: "Yaratıcı düşünür, Minimalizm aşığı",
      desc: "Merhaba, ben Kaan. Ben bir full-stack geliştiriciyim. Eğer harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir frontend ürünleri oluşturacak bir geliştirici arıyorsanız, haydi el sıkışalım.",
      cta_hire: "Beni İşe Al",
      cta_github: "Github",
      cta_linkedin: "Linkedin",
      githubLink: "https://github.com/kaandb", 
      linkedinLink: "https://linkedin.com/in/kaan-demirbağ-670327374", 
    },
    skills: {
      title: "Yetenekler",
      list: [
        {
          name: "JavaScript",
          desc: "Modern ES6+ özellikleri, asenkron yapılar (Async/Await), DOM manipülasyonu ve fonksiyonel programlama konusunda deneyimliyim."
        },
        {
          name: "React.js",
          desc: "Component bazlı mimari, Hooks, Context API, React Router ve state yönetimi (Redux/Context) konularında yetkinim."
        },
        {
          name: "HTML & CSS",
          desc: "Semantik HTML5 yapısı, CSS3, Flexbox/Grid sistemleri, responsive (mobil uyumlu) tasarımlar ve Tailwind CSS konularında uzmanım."
        }
      ]
    },
    profile: {
      title: "Profil",
      basicInfoTitle: "Profil",
      aboutMeTitle: "Hakkımda",
      basicInfo: [
        { label: "Doğum Tarihi", value: "1999" },
        { label: "İkamet Şehri", value: "İstanbul" },
        { label: "Eğitim Durumu", value: "Boğaziçi Ünv. İngilizce Öğretmenliği, 2025" },
        { label: "Tercih Ettiği Rol", value: "Frontend Developer" }
      ],
      aboutMeDesc: [
        "Kod yazmayı, sorunlara yaratıcı çözümler bulmayı ve kullanıcı dostu arayüzler tasarlamayı seviyorum.",
        "Sürekli öğrenmeye açık bir yapım var. Frontend dünyasındaki yenilikleri takip ediyor ve projelerimde en güncel pratikleri uygulamaya özen gösteriyorum."
      ]
    },
    projects: {
      title: "Projeler",
      list: [
        {
          id: 1,
          title: "Pizza Sipariş SPA",
          desc: "React ile geliştirilen bu Tek Sayfa Uygulaması (SPA), kullanıcıların pizza siparişi verebileceği dinamik bir arayüz sunar. Proje kapsamında Routing, Form yönetimi, Cypress ile test yazımı ve Axios ile veri akışı başarıyla uygulanmıştır.",
          tags: ["React", "Cypress", "Axios", "SPA"],
          links: { 
            repo: "https://github.com/kaandb/fsweb-s8-challenge-pizza",
            view: "https://fsweb-s8-challenge-pizza-sage.vercel.app/"
          },
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop" 
        },
        {
          id: 2,
          title: "HTML Pizza Challenge",
          desc: "Figma tasarımı referans alınarak geliştirilen bu proje, semantik HTML ve CSS becerilerinin bir göstergesidir. Tamamen responsive (mobil ve masaüstü uyumlu) olarak tasarlanmış ve JavaScript kullanılmadan saf CSS ile şekillendirilmiştir.",
          tags: ["HTML5", "CSS3", "Responsive", "Figma"],
          links: { 
            repo: "https://github.com/kaandb/fsweb-s4-bonus-challenge-html-pizza", 
            view: "https://fsweb-s4-bonus-challenge-html-pizza-blond.vercel.app/"
          },
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop"
        }
      ]
    },
    footer: {
      title: "Bir sonraki ürününüzde birlikte çalışalım.",
      email: "kaanumb@gmail.com",
      links: [
        { name: "Personal Blog", url: "#" },
        { name: "Github", url: "https://github.com/kaandb" },
        { name: "Linkedin", url: "https://linkedin.com/in/kaan-demirbağ-670327374" }
      ]
    }
  },
  
  en: {
    header: {
      skills: "Skills",
      projects: "Projects",
      hire: "Hire Me",
      theme: "DARK MODE",
      lang: "TÜRKÇE"
    },
    hero: {
      title: "Creative thinker, Minimalism lover",
      desc: "Hi, I'm Kaan. I'm a full-stack developer. If you are looking for a Developer to craft solid and scalable frontend products with great user experiences, let's shake hands.",
      cta_hire: "Hire Me",
      cta_github: "Github",
      cta_linkedin: "Linkedin",
      githubLink: "https://github.com/kaandb",
      linkedinLink: "https://linkedin.com/in/kaan-demirbağ-670327374",
    },
    skills: {
      title: "Skills",
      list: [
        {
          name: "JavaScript",
          desc: "Experienced in modern ES6+ features, asynchronous structures (Async/Await), DOM manipulation, and functional programming."
        },
        {
          name: "React.js",
          desc: "Proficient in Component-based architecture, Hooks, Context API, React Router, and state management (Redux/Context)."
        },
        {
          name: "HTML & CSS",
          desc: "Expert in Semantic HTML5 structures, CSS3, Flexbox/Grid systems, responsive (mobile-first) designs, and Tailwind CSS."
        }
      ]
    },
    profile: {
      title: "Profile",
      basicInfoTitle: "Profile",
      aboutMeTitle: "About Me",
      basicInfo: [
        { label: "Birth Date", value: "1999" },
        { label: "City", value: "Istanbul" },
        { label: "Education", value: "Bogazici Unv. Foreign Language Education, 2025" },
        { label: "Preferred Role", value: "Frontend Developer" }
      ],
      aboutMeDesc: [
        "I love coding, finding creative solutions to problems, and designing user-friendly interfaces.",
        "I am always open to learning. I follow innovations in the frontend world and strive to apply the latest practices in my projects."
      ]
    },
    projects: {
      title: "Projects",
      list: [
        {
          id: 1,
          title: "Pizza Order SPA",
          desc: "Developed with React, this Single Page Application (SPA) offers a dynamic interface for users to order pizza. Routing, Form management, testing with Cypress, and data flow with Axios have been successfully implemented.",
          tags: ["React", "Cypress", "Axios", "SPA"],
          links: { 
            repo: "https://github.com/kaandb/fsweb-s8-challenge-pizza",
            view: "https://fsweb-s8-challenge-pizza-sage.vercel.app/"
          },
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop"
        },
        {
          id: 2,
          title: "HTML Pizza Challenge",
          desc: "Developed referencing a Figma design, this project demonstrates semantic HTML and CSS skills. It is designed to be fully responsive (mobile and desktop compatible) and styled using pure CSS without JavaScript.",
          tags: ["HTML5", "CSS3", "Responsive", "Figma"],
          links: { 
            repo: "https://github.com/kaandb/fsweb-s4-bonus-challenge-html-pizza", 
            view: "https://fsweb-s4-bonus-challenge-html-pizza-blond.vercel.app/" 
          },
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop"
        }
      ]
    },
    footer: {
      title: "Let’s work together on your next product.",
      email: "kaanumb@gmail.com",
      links: [
        { name: "Personal Blog", url: "#" },
        { name: "Github", url: "https://github.com/kaandb" },
        { name: "Linkedin", url: "https://linkedin.com/in/kaan-demirbağ-670327374" }
      ]
    }
  }
};