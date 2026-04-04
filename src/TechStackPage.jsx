import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'; // Added Toggle

const categories = [
  { name: 'Frontend', skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3'] },
  { name: 'Backend', skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Vault', 'Firebase', 'MinIO File Storage', 'Python', 'C++', 'C' , 'PHP'] },
  { name: 'DevOps & Cloud', skills: ['AWS', 'Docker', 'Vercel','Github'] },
  { name: 'Networking', skills: ['VLANS', 'DHCP/DNS', 'WLANS/WLC', 'VPN Connectivity' ,'Fortigate' ,'Sangfor' , 'Ruijie Networking'] },
  { name: 'OS & Tools', skills: ['Windows Server', 'Linux (Ubuntu/Debian', 'Windows IAM'] },
  { name: 'Support Tools', skills: ['Zoho Workspace', 'Anydesk', 'Teamviewer', 'Ultraviewer' , 'Troubleshooting (L1/L2)'] },
  { name: 'Security & IAM', skills: [ 'SHA-256', 'SHA-512', '2FA (TOTP)', 'HashiCorp Vault', 'AWS IAM', 'AES Encryption'] }
]

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 p-8 md:p-24 animate-in fade-in duration-500 transition-colors duration-300 relative">
      
      <ThemeToggle />

      <div className="max-w-3xl mx-auto">
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 dark:hover:text-white mb-12 transition-all hover:-translate-x-1">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <header className="mb-16 text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Techical Expertise</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">A comprehensive toolkit of the technologies I use to build secure, scalable applications and provide end-to-end IT infrastructure support .</p>
        </header>
        
        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-6 text-left">
              <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest border-l-2 border-slate-900 dark:border-slate-500 pl-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
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