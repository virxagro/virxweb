import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#0A0A0A]/70 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="block">
              <img src="/logo.png" alt="VIRX Logo" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/#producto" className="text-white/70 hover:text-[#00A9CC] transition-colors text-xs font-bold tracking-widest uppercase">Producto</Link>
            <Link href="/#como-funciona" className="text-white/70 hover:text-[#00A9CC] transition-colors text-xs font-bold tracking-widest uppercase">Cómo Funciona</Link>
            <Link href="/#nosotros" className="text-white/70 hover:text-[#00A9CC] transition-colors text-xs font-bold tracking-widest uppercase">Nosotros</Link>
            <Link href="/blog" className="text-white/70 hover:text-[#00A9CC] transition-colors text-xs font-bold tracking-widest uppercase">Blog</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#contacto" className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all hover:border-[#00A9CC] hover:text-[#00A9CC]">
              CONOCÉ VIRX
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
