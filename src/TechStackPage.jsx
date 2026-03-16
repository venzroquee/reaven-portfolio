import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Frontend', skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3'] },
  { name: 'Backend', skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Vault', ,'Firebase', 'MinIO File Storage', 'Python', 'C++', 'C' , 'PHP'] },
  { name: 'DevOps & Cloud', skills: ['AWS', 'Docker', 'Vercel'] },
  { name: 'Security & Identity', skills: [ 'SHA-256', 'SHA-512', '2FA (TOTP)', 'HashiCorp Vault', 'AWS IAM', 'AES Encryption'] }
]

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 p-8 md:p-24 animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto">
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-12 transition-all hover:-translate-x-1">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Tech Stack</h1>
          <p className="text-slate-500 text-lg">A comprehensive list of the tools and technologies I use to build secure, scalable applications.</p>
        </header>
        
        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-l-2 border-slate-900 pl-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}