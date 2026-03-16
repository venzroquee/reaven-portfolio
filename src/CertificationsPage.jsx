import React from 'react'
import { ArrowLeft, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const certificationGroups = [
  {
    category: 'Networking',
    items: [
      { title: 'CCNA - Introduction to Networks', issuer: 'Cisco Networking Academy', date: 'Jan 2023' },
      { title: 'CCNA: Switching, Routing, and Wireless Essentials', issuer: 'Cisco Networking Academy', date: 'May 2023' },
    ]
  },
  {
    category: 'Cloud & Infrastructure',
    items: [
      { title: 'AWS Academy Graduate', issuer: 'AWS Academy Cloud Foundations', date: 'Nov 2024' },
      // Add more cloud certs here
    ]
  }
]

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 p-8 md:p-24 animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto">
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-12 transition-all hover:-translate-x-1">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <header className="mb-16 text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Certifications</h1>
          <p className="text-slate-500 text-lg">Professional credentials and academic achievements in Information Technology.</p>
        </header>
        
        <div className="space-y-12">
          {certificationGroups.map((group) => (
            <div key={group.category} className="space-y-6 text-left">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-l-2 border-slate-900 pl-4">
                {group.category}
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {group.items.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-slate-300 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-blue-50 transition-colors">
                        <Award className="text-slate-400 group-hover:text-blue-600" size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg">{cert.title}</p>
                        <p className="text-sm text-slate-500">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-slate-400 whitespace-nowrap">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}