import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Linkedin,
  Github,
  Camera,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import ThemeToggle from './ThemeToggle'; // Added Toggle

import profilePic from './assets/img2.jpg';
import cert1 from "/cert1.jpg";
import grad from "/grad.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryImages = [cert1, grad];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const nextPhoto = (e) => {
    if (e) e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevPhoto = (e) => {
    if (e) e.stopPropagation();
    setPhotoIndex((prev) => (prev + galleryImages.length - 1) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-100 transition-colors duration-300">
      
      <ThemeToggle />

      {/* --- Lightbox Overlay --- */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 z-50 bg-transparent border-none">
            <X size={32} />
          </button>

          <button onClick={prevPhoto} className="absolute left-4 md:left-10 text-white p-2 rounded-full hover:bg-white/10 transition-all z-50 bg-transparent border-none">
            <ChevronLeft size={48} />
          </button>

          <img
            src={galleryImages[photoIndex]}
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl animate-in fade-in zoom-in duration-300"
            alt="Full View"
          />

          <button onClick={nextPhoto} className="absolute right-4 md:right-10 text-white p-2 rounded-full hover:bg-white/10 transition-all z-50 bg-transparent border-none">
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-6 text-white/60 font-medium text-sm">
            {photoIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column*/}
        <div className="md:col-span-8 space-y-12">
          {/* Header Section */}
          <section className="flex flex-col md:flex-row items-start gap-8 text-left">
            <div className="w-48 h-48 bg-gray-200 dark:bg-slate-800 rounded-3xl overflow-hidden shrink-0 border border-gray-100 dark:border-slate-800 shadow-sm">
              <img src={profilePic} alt="Reaven Roque Profile" className="w-full h-full object-cover profile-position" />
            </div>

            <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Reaven Manuelle Roque
              </h1>
              <p className="text-gray-500 dark:text-slate-400 font-medium leading-none">venzroque0929@gmail.com</p>
              <p className="text-gray-500 dark:text-slate-400 font-medium">Manila, Philippines</p>
              <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold pt-3">Software Developer | IT Graduate</p>

              <div className="flex gap-4 pt-3">
                <a href="https://www.linkedin.com/in/reaven-roque" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/venzroquee" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-black dark:hover:text-white transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="space-y-4 text-left">
            <h2 className="text-xl font-bold border-b border-slate-100 dark:border-slate-800 pb-2">About</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg text-pretty">
              <p>Hey! I'm a BS Information Technology graduate from De La Salle University - Manila. I specialize in building secure web applications, with a background in web development and software development aimed at automating manual workflows.</p>
              <p>I also have hands-on experience in configuring network infrastructure, managing firewalls, and implementing critical network services like VLANs, DHCP, and VPN connectivity.</p>
              <p>Lately, I've been keen on learning more about system administration and AI in particular on how AI-driven solutions can be used to automate manual tasks, detect system issues, and accelerate the deployment of scalable infrastructure.</p>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="space-y-6 text-left">
            <div className="flex justify-between items-baseline border-b border-slate-100 dark:border-slate-800 pb-2">
              <h2 className="text-xl font-bold">Tech Stack</h2>
              <Link to="/tech-stack" className="text-sm font-medium text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">See All</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'].map(s => (
                    <span key={s} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Backend & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Vault', 'AWS'].map(s => (
                    <span key={s} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="space-y-6 text-left">
            <div className="flex justify-between items-baseline border-b border-slate-100 dark:border-slate-800 pb-2">
              <h2 className="text-xl font-bold">Projects</h2>
              <Link to="/projects" className="text-sm font-medium text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">See All</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-100 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">PMVIC Web Application</h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  Secure motor vehicle inspection system featuring record integrity via SHA-512 digital signatures and 2FA.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'Vault', 'PostgreSQL', 'TypeScript', 'MinIO'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded uppercase">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="p-5 border border-slate-100 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">Restaurant Inventory & POS</h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  Full-stack management system with role-based permissions and advanced reporting functionality.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'JavaScript', 'PostgreSQL', 'Bootstrap', 'EJS'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="space-y-6 text-left border-t border-slate-50 dark:border-slate-900 pt-8">
            <div className="flex justify-between items-baseline border-b border-slate-100 dark:border-slate-800 pb-2">
              <h2 className="text-xl font-bold">Certifications</h2>
              <Link to="/certifications" className="text-sm font-medium text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">See All</Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">CCNA - Introduction to Networks</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Cisco Networking Academy</p>
                </div>
                <span className="text-xs font-bold text-slate-400">Jan 2023</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">AWS Academy Graduate</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">AWS Academy Cloud Foundations</p>
                </div>
                <span className="text-xs font-bold text-slate-400">Nov 2024</span>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (4/12 grid) */}
        <div className="md:col-span-4 space-y-10">
          <section className="space-y-6 text-left">
            <h2 className="text-xl font-bold">Experience</h2>
            <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-2 pl-6 space-y-10">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-slate-950 shadow-sm"></div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white leading-none">IT Support Intern</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">TRYP by Wyndham Mall of Asia</p>
                  <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-tighter">Feb 2025 - Apr 2025</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-slate-950"></div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white leading-none">BS Information Technology</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">De La Salle University - Manila</p>
                  <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-tighter">June 2020 - Nov 2025 </p>
                </div>
              </div>
            </div>
          </section>

          <a href="/Roque_Reaven Manuelle_Resume v2.pdf" download className="group block p-6 bg-slate-900 dark:bg-slate-800 rounded-[2rem] text-white transition-all hover:scale-[1.02] text-left no-underline">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors text-2xl">📄</div>
              <div>
                <h3 className="text-xl font-bold text-white">Get my Resume</h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">Download my latest Resume for an overview of my professional experience and technical qualifications.</p>
              </div>
              <div className="w-full py-3 bg-white text-black rounded-xl text-center text-sm font-bold mt-2">Download PDF</div>
            </div>
          </a>

          <section className="space-y-6 text-left pt-6">
            <div className="flex items-center gap-2">
              <Camera size={20} className="text-slate-400" />
              <h2 className="text-xl font-bold">Gallery</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((img, index) => (
                <div key={index} onClick={() => openLightbox(index)} className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center">
                  <img src={img} alt="Gallery Thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-200 dark:text-slate-700">
                <Camera size={24} />
              </div>
              <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-200 dark:text-slate-700">
                <Camera size={24} />
              </div>
            </div>
            <p className="text-xs text-slate-400 italic leading-relaxed">Moment from DLSU graduation and my certification of completion.</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;