import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 font-sans selection:bg-blue-500">
      {/* Navbar Ringkas */}
      <nav className="flex justify-between items-center mb-16 py-4">
        <div className="font-black text-2xl tracking-tighter">AR.</div>
        <div className="flex gap-4 items-center">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Ready for Work</p>
        </div>
      </nav>

      {/* Hero Section - Data Abiyyu */}
      <header className="mb-24">
        <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Industrial Electronics Engineer</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
          Abiyyu Rafa <br/> Ramadhan
        </h1>
        <p className="max-w-xl text-zinc-400 text-lg leading-relaxed">
          Lulusan SMK Negeri 1 Purwakarta (2026). [span_4](start_span)[span_5](start_span)Fokus pada pelayanan pelanggan dengan landasan teknis elektronika yang presisi.[span_4](end_span)[span_5](end_span)
        </p>
      </header>

      {/* Grid Informasi - Dari CV */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <section className="p-6 border border-zinc-800 rounded-2xl hover:border-blue-500 transition-colors">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Technical & Skills</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {['Troubleshooting', 'Data Entry', 'Content Creation', 'Project Management', 'Electronics'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">{skill}</span>
            ))}
          [span_6](start_span)[span_7](start_span)</div>[span_6](end_span)[span_7](end_span)
        </section>

        <section className="p-6 border border-zinc-800 rounded-2xl">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Education & Certification</h3>
          <div className="space-y-4">
            <div>
              <p className="text-white font-medium">SMK Negeri 1 Purwakarta</p>
              [span_8](start_span)[span_9](start_span)<p className="text-xs text-zinc-500">Graduated June 2026[span_8](end_span)[span_9](end_span)</p>
            </div>
            <div className="pt-2">
              [span_10](start_span)[span_11](start_span)<p className="text-white font-medium text-sm leading-snug">LSP - Competency Cert. in Industrial Electronics[span_10](end_span)[span_11](end_span)</p>
              [span_12](start_span)[span_13](start_span)<p className="text-white font-medium text-sm leading-snug">Coursera - Google Project Management[span_12](end_span)[span_13](end_span)</p>
            </div>
          </div>
        </section>
      </div>

      {/* Kontak Langsung */}
      <footer className="border-t border-zinc-900 pt-12 pb-20">
        <h2 className="text-2xl font-bold mb-6 tracking-tight">Tertarik bekerja sama?</h2>
        <div className="flex flex-col gap-4">
          [span_14](start_span)<a href="mailto:abiyyurafaramadhan2@gmail.com" className="text-zinc-400 hover:text-white transition-colors">abiyyurafaramadhan2@gmail.com[span_14](end_span)</a>
          [span_15](start_span)<a href="https://wa.me/085861404472" className="inline-block w-fit bg-white text-black px-6 py-3 rounded-full font-bold text-sm">WhatsApp: 085861404472[span_15](end_span)</a>
        </div>
        [span_16](start_span)<p className="mt-20 text-[10px] text-zinc-600 uppercase tracking-widest">© 2026 Abiyyu Rafa • Purwakarta, West Java[span_16](end_span)</p>
      </footer>
    </main>
  );
}
