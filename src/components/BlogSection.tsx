import BlogCard from "./BlogCard";
import { blogPosts } from "@/lib/blogData";

interface BlogSectionProps {
  limit?: number;
}

export default function BlogSection({ limit }: BlogSectionProps) {
  // Tomamos solo los primeros artículos según el límite (ej. 3 para la home), o todos si no hay límite
  const displayedPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            date={new Date(post.publishedAt + 'T00:00:00').toLocaleDateString('es-AR', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
            category={post.category}
            slug={post.slug}
            Icon={post.icon}
          />
        ))}
      </div>
    </section>
  );
}
