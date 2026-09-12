import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E24] border-t border-[#424248] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <Link href="/" className="block mb-6">
              <img src="/logo.png" alt="VIRX Logo" className="h-12 w-auto object-contain drop-shadow-md" />
            </Link>
            <p className="text-sm text-[#9A9A9A] font-medium leading-relaxed">
              La lluvia de tu campo, en tu celular. Pluviómetro inteligente automático diseñado y fabricado en Argentina.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-[#FFFFFF] tracking-wide mb-5 uppercase">Navegación</h3>
            <ul className="space-y-3">
              <li><Link href="/#producto" className="text-sm font-medium text-[#9A9A9A] hover:text-[#00A9CC] transition-colors">Producto</Link></li>
              <li><Link href="/#como-funciona" className="text-sm font-medium text-[#9A9A9A] hover:text-[#00A9CC] transition-colors">Cómo Funciona</Link></li>
              <li><Link href="/#nosotros" className="text-sm font-medium text-[#9A9A9A] hover:text-[#00A9CC] transition-colors">Nosotros</Link></li>
              <li><Link href="/blog" className="text-sm font-medium text-[#9A9A9A] hover:text-[#00A9CC] transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-[#FFFFFF] tracking-wide mb-5 uppercase">Soporte</h3>
            <ul className="space-y-3">
              <li><Link href="/#faq" className="text-sm font-medium text-[#9A9A9A] hover:text-[#00A9CC] transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link href="/#contacto" className="text-sm font-medium text-[#9A9A9A] hover:text-[#00A9CC] transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-[#FFFFFF] tracking-wide mb-5 uppercase">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-sm font-medium text-[#9A9A9A]">
                <a href="mailto:contacto@virx.com.ar" className="hover:text-[#00A9CC] transition-colors flex items-center">
                  contacto@virx.com.ar
                </a>
              </li>
              <li className="text-sm font-medium text-[#9A9A9A]">
                <a href="https://wa.me/5492494000000" target="_blank" rel="noopener noreferrer" className="hover:text-[#00A9CC] transition-colors flex items-center">
                  +54 9 249 400-0000
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center border-t border-[#424248]">
          <p className="text-sm font-medium text-[#9A9A9A]">
            &copy; {new Date().getFullYear()} VIRX. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
