import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Image Imports ---
import finance1 from './assets/finance1.png';
import finance2 from './assets/finance2.png';
import finance4 from './assets/finance4.png';
import finance5 from './assets/finance5.png';
import finance6 from './assets/finance6.png';
import finance7 from './assets/finance7.png';
import finance8 from './assets/finance8.png';
import finance9 from './assets/finance9.png';
import finance10 from './assets/finance10.png';

import seasmart1 from './assets/seasmart1.png';
import seasmart2 from './assets/seasmart2.png';
import seasmart3 from './assets/seasmart3.png';
import seasmart4 from './assets/seasmart4.png';

import rail1 from './assets/rail1.png';
import rail2 from './assets/rail2.png';
import rail3 from './assets/rail3.png';
import rail4 from './assets/rail4.png';
import rail5 from './assets/rail5.png';
import rail6 from './assets/rail6.png';
import rail7 from './assets/rail7.png';
import rail8 from './assets/rail8.png';

const projects = [
  {
    title: "PMVIC Web Application",
    description: "A secure motor vehicle inspection system featuring record integrity via SHA-512 digital signatures and 2FA.",
    tech: ["Node.js", "Express", "HashiCorp Vault", "PostgreSQL", "TypeScript", "MinIO"],
  },
  {
    title: "Restaurant Inventory & POS",
    description: "Full-stack management system with role-based permissions and advanced reporting functionality.",
    tech: ["Node.js", "Express", "JavaScript", "PostgreSQL", "Bootstrap CSS", "EJS"]
  },
  {
    title: "Simulated Campus Network Configuration ",
    description: "Multi-site campus network architecture featuring secure WAN/VPN tunnels, VLAN segmentation, and centralized wireless management.",
    tech: ["Cisco Packet Tracer", "VPN", "WLC", "VLAN/ACL"]
  },
  {
    title: "SeaSmart Sourcing",
    description: "User-centric web prototype for local fishing communities, featuring a digital inventory system to showcase daily catches.",
    tech: ["Figma", "UI/UX"],
    images: [seasmart1, seasmart2, seasmart3, seasmart4]
  },
  {
    title: "Finance Tracker Mobile App",
    description: "Real-time mobile application featuring secure authentication and automated transaction logging.",
    tech: ["Java", "Firebase"],
    images: [
      finance1, finance2, finance4, finance5, 
      finance6, finance7, finance8, finance9, finance10
    ]
  },
    {
    title: "Railink",
    description: "A smart commuting solution designed to optimize public transport navigation through live ETA updates, train temperature monitoring, and instant digital Beep card reloading.",
    tech: ["Figma", "UI/UX", "Mobile Design"],
    images: [rail1, rail2, rail3, rail4,
             rail5, rail6, rail7, rail8
    ]
  },
];

export default function ProjectsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (gallery, index) => {
    setCurrentGallery(gallery);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const nextPhoto = (e) => {
    if (e) e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevPhoto = (e) => {
    if (e) e.stopPropagation();
    setPhotoIndex((prev) => (prev + currentGallery.length - 1) % currentGallery.length);
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
  }, [isOpen, currentGallery]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 p-8 md:p-24 animate-in fade-in duration-500 relative">
      
      {/* Lightbox Overlay */}
      {isOpen && currentGallery.length > 0 && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white z-[110]">
            <X size={32} />
          </button>

          {currentGallery.length > 1 && (
            <button onClick={prevPhoto} className="absolute left-4 md:left-10 text-white/50 p-3 rounded-full hover:bg-white/10 hover:text-white z-[110]">
              <ChevronLeft size={48} />
            </button>
          )}

          <img 
            src={currentGallery[photoIndex]} 
            className="max-h-[90vh] max-w-[95vw] object-contain shadow-2xl animate-in fade-in zoom-in duration-300"
            alt="Project Full View"
            onClick={(e) => e.stopPropagation()}
          />

          {currentGallery.length > 1 && (
            <button onClick={nextPhoto} className="absolute right-4 md:right-10 text-white/50 p-3 rounded-full hover:bg-white/10 hover:text-white z-[110]">
              <ChevronRight size={48} />
            </button>
          )}

          <div className="absolute bottom-6 text-white/60 font-medium text-sm">
            {photoIndex + 1} / {currentGallery.length}
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-12 transition-all hover:-translate-x-1">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-12 text-left">Projects</h1>

        <div className="space-y-16">
          {projects.map((p, i) => (
            <div key={i} className="border-b border-slate-100 pb-12 last:border-0">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <div className="flex gap-3 text-slate-400/50">
                </div>
              </div>

              <p className="text-slate-600 text-base mb-6 text-left leading-relaxed max-w-2xl">
                {p.description}
              </p>

              {/**/}
              {p.images && p.images.length > 0 && (
                <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
                  {p.images.map((img, index) => (
                    <div 
                      key={index} 
                      className="w-20 md:w-24 aspect-square bg-slate-50 rounded-lg overflow-hidden border border-slate-100 shadow-sm flex-shrink-0 group cursor-pointer"
                      onClick={() => openLightbox(p.images, index)}
                    >
                      <img 
                        src={img} 
                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" 
                        alt="Preview"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}