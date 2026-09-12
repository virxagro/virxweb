import React from 'react';
import Link from 'next/link';

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  category: string;
  publishedAt: string;
  author: string;
  keywords: string[];
  content: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
};

// Componente CTA reutilizable para los artículos
const BlogCTA = () => (
  <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group">
    <div className="absolute inset-0 bg-virx-cyan/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10 max-w-lg">
      <h3 className="text-2xl font-bold text-white mb-2">Con VIRX podés conocer cuánto llovió en tu campo sin tener que estar ahí.</h3>
      <p className="text-white/60">Accedé a los datos de lluvia en tiempo real, desde tu celular, estés donde estés.</p>
    </div>
    <div className="relative z-10 shrink-0">
      <Link href="/#producto" className="inline-block px-8 py-4 bg-virx-cyan text-[#0A0A0A] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white transition-colors">
        Conocé VIRX
      </Link>
    </div>
  </div>
);

export const blogPosts: BlogPost[] = [
  {
    slug: 'como-medir-los-milimetros-de-lluvia',
    title: '¿Cómo se miden los milímetros de lluvia?',
    metaTitle: '¿Cómo se miden los milímetros de lluvia? | VIRX',
    metaDescription: 'Aprendé cómo se mide la lluvia en milímetros, qué significa 1 mm de precipitación y cómo se registra la cantidad de agua que cae en un campo.',
    h1: '¿Cómo se miden los milímetros de lluvia?',
    category: 'Medición de lluvia',
    publishedAt: '2026-09-11',
    author: 'Equipo VIRX',
    keywords: ['cómo medir la lluvia', 'milímetros de lluvia', 'medir lluvia', 'medición de lluvia', 'cuántos milímetros llovieron'],
    imageUrl: '/hero-campo.jpg',
    imageAlt: 'Campo bajo la lluvia donde se necesita medir milímetros',
    content: (
      <>
        <p>Explicar de manera sencilla qué significa medir la lluvia en milímetros y por qué es una medida utilizada habitualmente para conocer la cantidad de precipitación.</p>
        
        <h2>¿Qué significa que hayan llovido 10 mm?</h2>
        <p>Explicar de manera sencilla qué representa esa cantidad de precipitación.</p>

        <h2>¿Cómo se mide la lluvia?</h2>
        <p>Explicar el funcionamiento general de un pluviómetro.</p>

        <h2>¿Qué es un pluviómetro?</h2>
        <p>Definición sencilla y tipos principales. Para entender mejor el instrumento utilizado para realizar esta medición, podés leer <Link href="/blog/que-es-un-pluviometro" className="text-virx-cyan hover:underline">¿Qué es un pluviómetro y cómo funciona?</Link></p>

        <h2>¿Por qué es importante conocer cuántos milímetros llovieron?</h2>
        <p>Llevarlo al contexto del campo.</p>

        <h2>¿Cómo registrar la lluvia automáticamente?</h2>
        <p>Introducir el concepto de medición automática y remota.</p>

        <BlogCTA />
      </>
    )
  },
  {
    slug: 'que-es-un-pluviometro',
    title: '¿Qué es un pluviómetro y cómo funciona?',
    metaTitle: '¿Qué es un pluviómetro y cómo funciona? | VIRX',
    metaDescription: 'Conocé qué es un pluviómetro, cómo funciona y cómo permite medir la cantidad de lluvia que cae en un determinado lugar.',
    h1: '¿Qué es un pluviómetro y cómo funciona?',
    category: 'Pluviómetros',
    publishedAt: '2026-09-10',
    author: 'Equipo VIRX',
    keywords: ['qué es un pluviómetro', 'cómo funciona un pluviómetro', 'pluviómetro', 'medir lluvia', 'instrumento para medir lluvia'],
    imageUrl: '/producto.jpg',
    imageAlt: 'Pluviómetro instalado',
    content: (
      <>
        <h2>¿Qué es un pluviómetro?</h2>
        <p>Detallar el instrumento.</p>
        
        <h2>¿Cómo funciona?</h2>
        <p>Detallar funcionamiento básico.</p>

        <h2>¿Cómo se mide la precipitación?</h2>
        <p>Mecánica interna y lectura del dato.</p>

        <h2>Tipos de pluviómetros</h2>
        <p>Variantes disponibles.</p>

        <h2>Pluviómetros manuales y automáticos</h2>
        <p>Diferencias clave.</p>

        <h2>¿Para qué sirve medir la lluvia en el campo?</h2>
        <p>Utilidad práctica en agronomía.</p>

        <h2>¿Qué diferencia existe entre medir manualmente y recibir el dato de forma remota?</h2>
        <p>Las ventajas del monitoreo satelital e IoT.</p>

        <BlogCTA />
      </>
    )
  },
  {
    slug: 'cuanto-es-1-mm-de-lluvia',
    title: '¿Cuánto es 1 mm de lluvia y qué significa para el campo?',
    metaTitle: '¿Cuánto es 1 mm de lluvia? ¿Qué significa? | VIRX',
    metaDescription: 'Entendé qué significa 1 mm de lluvia, cómo se interpreta la precipitación y por qué conocer los milímetros es importante en el campo.',
    h1: '¿Cuánto es 1 mm de lluvia y qué significa para el campo?',
    category: 'Medición de lluvia',
    publishedAt: '2026-09-09',
    author: 'Equipo VIRX',
    keywords: ['1 mm de lluvia', 'cuánto es 1 mm de lluvia', 'milímetros de lluvia', 'precipitación', 'lluvia en el campo'],
    imageUrl: '/scroll-campo.jpg',
    imageAlt: 'Gotas de lluvia sobre un campo agrícola',
    content: (
      <>
        <h2>¿Qué significa 1 mm de lluvia?</h2>
        <p>Definición del volumen de agua por metro cuadrado.</p>

        <h2>¿Cómo se calcula?</h2>
        <p>Relación entre volumen y superficie.</p>

        <h2>Ejemplos de diferentes cantidades de lluvia</h2>
        <p>Escalas de precipitación.</p>

        <h2>¿Por qué los productores hablan de milímetros?</h2>
        <p>El estándar del sector agrícola.</p>

        <h2>¿Cómo se registra la lluvia?</h2>
        <p>El uso de tecnología para mantener el historial.</p>

        <h2>Importancia de tener un historial de precipitaciones</h2>
        <p>Toma de decisiones basada en datos.</p>

        <BlogCTA />
      </>
    )
  },
  {
    slug: 'pluviometro-manual-vs-inteligente',
    title: 'Pluviómetro manual vs. pluviómetro inteligente: ¿cuál es la diferencia?',
    metaTitle: 'Pluviómetro manual vs. inteligente: diferencias | VIRX',
    metaDescription: 'Conocé las diferencias entre un pluviómetro manual y uno inteligente: medición, registro, acceso a los datos y monitoreo remoto.',
    h1: 'Pluviómetro manual vs. pluviómetro inteligente',
    category: 'Pluviómetros',
    publishedAt: '2026-09-08',
    author: 'Equipo VIRX',
    keywords: ['pluviómetro manual', 'pluviómetro inteligente', 'diferencia pluviómetros'],
    imageUrl: '/product-virx.jpg',
    imageAlt: 'Comparación visual de pluviómetros',
    content: (
      <>
        <h2>¿Cómo funciona un pluviómetro manual?</h2>
        <p>El sistema clásico.</p>
        
        <h2>¿Cómo funciona uno inteligente?</h2>
        <p>Sensores, IoT y transmisión de datos.</p>

        <h2>Diferencias en la medición</h2>
        <p>Precisión humana vs precisión electrónica.</p>

        <h2>Diferencias en el registro de datos</h2>
        <p>Libreta vs Nube.</p>

        <h2>¿Qué significa tener acceso remoto?</h2>
        <p>Acceder desde cualquier lado, en cualquier momento.</p>

        <h2>Ventajas y limitaciones de cada sistema</h2>
        <p>Comparación objetiva (sin agresividad comercial).</p>

        <h2>¿Para quién puede ser útil un pluviómetro inteligente?</h2>
        <p>Perfiles de productores y agrónomos.</p>

        <BlogCTA />
      </>
    )
  },
  {
    slug: 'importancia-de-medir-la-lluvia-en-el-campo',
    title: '¿Por qué es importante medir la lluvia en el campo?',
    metaTitle: '¿Por qué es importante medir la lluvia en el campo? | VIRX',
    metaDescription: 'Conocé por qué registrar las precipitaciones puede ser útil para el seguimiento de un campo y cómo la tecnología facilita el acceso a esos datos.',
    h1: '¿Por qué es importante medir la lluvia en el campo?',
    category: 'Tecnología para el campo',
    publishedAt: '2026-09-07',
    author: 'Equipo VIRX',
    keywords: ['importancia lluvia campo', 'medición agronomía', 'precipitación campo'],
    imageUrl: '/hero-virx.jpg',
    imageAlt: 'Campo productivo beneficiado por la lluvia',
    content: (
      <>
        <h2>La importancia de conocer la precipitación</h2>
        <p>El agua como factor productivo.</p>

        <h2>¿Por qué no alcanza con saber que "llovió"?</h2>
        <p>La necesidad de datos cuantitativos, no cualitativos.</p>

        <h2>Los milímetros como dato</h2>
        <p>El estándar indispensable.</p>

        <h2>Registro e historial de lluvias</h2>
        <p>Tendencias climáticas del establecimiento.</p>

        <h2>El problema de depender de otra persona para conocer el dato</h2>
        <p>Sesgos, demoras y errores humanos.</p>

        <h2>Cómo la tecnología puede simplificar este proceso</h2>
        <p>Automatización de la recopilación de datos.</p>

        <BlogCTA />
      </>
    )
  },
  {
    slug: 'historial-de-lluvias',
    title: '¿Cómo registrar y consultar el historial de lluvias de un campo?',
    metaTitle: 'Historial de lluvias: cómo registrar las precipitaciones | VIRX',
    metaDescription: 'Descubrí cómo registrar las lluvias de un campo y por qué contar con un historial de precipitaciones puede facilitar el seguimiento.',
    h1: '¿Cómo registrar y consultar el historial de lluvias de un campo?',
    category: 'Medición de lluvia',
    publishedAt: '2026-09-06',
    author: 'Equipo VIRX',
    keywords: ['historial de lluvias', 'registrar lluvias', 'precipitaciones históricas'],
    imageUrl: '/app-mockup.jpg',
    imageAlt: 'Usuario consultando el historial en su celular',
    content: (
      <>
        <h2>¿Qué es un historial de lluvias?</h2>
        <p>La base de datos climática de tu lote.</p>

        <h2>¿Qué información debería registrar?</h2>
        <p>Fechas, milímetros, intensidad.</p>

        <h2>¿Por qué es útil guardar los datos?</h2>
        <p>Proyecciones y planificación agronómica.</p>

        <h2>Registro manual vs. registro automático</h2>
        <p>El salto de la libreta a la nube.</p>

        <h2>Consultar datos desde cualquier lugar</h2>
        <p>La ubicuidad de la información móvil.</p>

        <h2>La importancia de contar con información histórica</h2>
        <p>Comparativas interanuales.</p>

        <BlogCTA />
      </>
    )
  }
];
