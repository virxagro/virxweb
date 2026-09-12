import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';

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

        {/* Grid de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-virx-cyan/50 transition-colors">
              <div className="h-56 w-full overflow-hidden bg-[#1E1E24] relative">
                {post.imageUrl && (
                  <img 
                    src={post.imageUrl} 
                    alt={post.imageAlt || post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" 
                  />
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-bold tracking-widest text-virx-cyan uppercase mb-4 block">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-extrabold text-white leading-tight mb-4 group-hover:text-virx-cyan transition-colors">
                    {post.title}
                  </h2>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm font-medium text-white/40">
                    {new Date(post.publishedAt + 'T00:00:00').toLocaleDateString('es-AR', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="text-sm font-bold text-white/40 group-hover:text-virx-cyan transition-colors">
                    Leer más →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
