import { Metadata } from 'next';
import BlogSection from '@/components/BlogSection';

export const metadata: Metadata = {
  title: 'Blog VIRX | Monitoreo y Medición de Lluvia',
  description: 'Descubrí información útil sobre pluviómetros, tecnología para el campo y cómo medir y registrar milímetros de lluvia.',
};

export default function BlogIndex() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            Conocimiento <span className="text-transparent bg-clip-text bg-gradient-to-r from-virx-cyan to-blue-500">para el campo.</span>
          </h1>
          <p className="text-xl text-white/60 font-medium leading-relaxed">
            Todo lo que necesitás saber sobre pluviómetros, milímetros de lluvia y tecnología aplicada al registro de precipitaciones.
          </p>
        </div>

        {/* Grid de Artículos Refactorizado */}
        <BlogSection />

      </div>
    </div>
  );
}
