import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

// Helper function to handle both Promise and synchronous params (Next.js 14/15 compat)
async function getSlug(params: Props['params']) {
  return typeof params === 'object' && 'then' in params ? (await params).slug : (params as { slug: string }).slug;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = await getSlug(params);
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: 'Post no encontrado' };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const slug = await getSlug(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 text-white">
      {/* Header del Artículo */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <Link href="/blog" className="text-virx-cyan font-bold uppercase tracking-widest text-xs mb-8 inline-block hover:text-white transition-colors">
          ← Volver al Blog
        </Link>
        <div className="mb-6 flex justify-center items-center gap-4 text-white/50 text-sm font-medium">
          <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">{post.category}</span>
          <span>•</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt + 'T00:00:00').toLocaleDateString('es-AR', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-8">
          {post.h1}
        </h1>
        <div className="flex justify-center items-center gap-3 text-white/70">
          <div className="w-10 h-10 rounded-full bg-virx-cyan/20 flex items-center justify-center text-virx-cyan font-bold border border-virx-cyan/30">
            V
          </div>
          <span className="font-medium">Por {post.author}</span>
        </div>
      </header>

      {/* Imagen Principal */}
      {post.imageUrl && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden relative border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 opacity-30"></div>
            <img 
              src={post.imageUrl} 
              alt={post.imageAlt || post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Contenido (Custom Tailwind Typography) */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-lg md:text-xl text-white/80 leading-relaxed space-y-6 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:font-extrabold [&>h2]:text-white [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:tracking-tight [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-10 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>a]:text-virx-cyan [&>a:hover]:underline">
          {post.content}
        </div>
      </div>
    </article>
  );
}
