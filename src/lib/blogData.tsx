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
    metaDescription: 'Aprendé qué significa medir la lluvia en milímetros, cómo funciona un pluviómetro y por qué este dato es importante para conocer las precipitaciones.',
    h1: '¿Cómo se miden los milímetros de lluvia?',
    category: 'Medición de lluvia',
    publishedAt: '2026-09-11',
    author: 'Equipo VIRX',
    keywords: ['cómo medir la lluvia', 'milímetros de lluvia', 'medir lluvia', 'medición de lluvia', 'cuántos milímetros llovieron'],
    imageUrl: '/hero-bg-v2.jpg',
    imageAlt: 'Campo bajo la lluvia donde se necesita medir milímetros',
    content: (
      <>
        <p>Cuando hablamos de lluvia, una de las formas más comunes de expresar cuánto llovió es en milímetros (mm). Pero ¿qué significa realmente ese número?</p>
        <p>Decir que en un campo llovieron 20 mm significa que, si el agua hubiera quedado distribuida de manera uniforme sobre una superficie, habría formado una capa de agua de 20 milímetros de altura.</p>
        <p>Para conocer este dato se utiliza un instrumento llamado pluviómetro, diseñado específicamente para captar y medir la precipitación.</p>
        
        <h2>¿Qué significa 1 mm de lluvia?</h2>
        <p>Para entenderlo de manera práctica, podés leer en detalle <Link href="/blog/cuanto-es-1-mm-de-lluvia" className="text-virx-cyan hover:underline">cuánto es exactamente 1 mm de lluvia</Link>, pero la regla general es que un milímetro de lluvia equivale a 1 litro de agua por cada metro cuadrado de superficie.</p>
        <p>Por ejemplo:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-white/80">
          <li>1 mm = 1 litro/m²</li>
          <li>10 mm = 10 litros/m²</li>
          <li>30 mm = 30 litros/m²</li>
          <li>50 mm = 50 litros/m²</li>
        </ul>
        <p>Por eso, cuando un productor dice que llovieron 30 mm, está hablando de una cantidad concreta de agua caída sobre una determinada superficie.</p>

        <h2>¿Cómo funciona un pluviómetro?</h2>
        <p>Si te interesa profundizar sobre el instrumento en sí, podés ver <Link href="/blog/que-es-un-pluviometro" className="text-virx-cyan hover:underline">qué es un pluviómetro y cómo funciona</Link>. Básicamente, recibe el agua de lluvia mediante una abertura o embudo y utiliza un sistema de medición para determinar cuánto precipitó.</p>
        <p>Existen distintos tipos de pluviómetros. Algunos requieren una lectura manual, mientras que otros pueden registrar automáticamente cada precipitación y enviar la información a una plataforma digital.</p>

        <h2>¿Por qué es importante medir la lluvia?</h2>
        <p>Conocer cuántos milímetros llovieron permite tener un registro objetivo de las precipitaciones. Este dato puede ser útil para:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-white/80">
          <li>Llevar un historial de lluvias.</li>
          <li>Comparar diferentes períodos.</li>
          <li>Conocer cuándo fue la última precipitación.</li>
          <li>Complementar información para el seguimiento del campo.</li>
          <li>Consultar los datos sin depender solamente de estimaciones.</li>
        </ul>

        <h2>¿Cómo medir la lluvia sin estar en el campo?</h2>
        <p>La tecnología permite automatizar este proceso. Un pluviómetro inteligente puede medir la precipitación y transmitir el dato automáticamente, de manera que el usuario pueda consultar la información de forma remota.</p>
        <p>En VIRX trabajamos justamente sobre esta idea: medir la lluvia en el campo y llevar el dato directamente al usuario.</p>
        <p>La lluvia de tu campo, en tu celular.</p>
        <div className="mt-6">
          <Link href="/" className="text-virx-cyan font-bold hover:underline">Conocé VIRX</Link>
        </div>

        <BlogCTA />
      </>
    )
  },
  {
    slug: 'que-es-un-pluviometro',
    title: '¿Qué es un pluviómetro y cómo funciona?',
    metaTitle: '¿Qué es un pluviómetro y cómo funciona? | VIRX',
    metaDescription: 'Descubrí qué es un pluviómetro, cómo mide la lluvia y cuáles son las diferencias entre un pluviómetro manual y uno inteligente.',
    h1: '¿Qué es un pluviómetro y cómo funciona?',
    category: 'Pluviómetros',
    publishedAt: '2026-09-10',
    author: 'Equipo VIRX',
    keywords: ['qué es un pluviómetro', 'cómo funciona un pluviómetro', 'pluviómetro', 'medir lluvia', 'instrumento para medir lluvia'],
    imageUrl: '/hero-product-new.png',
    imageAlt: 'Pluviómetro inteligente instalado en el campo',
    content: (
      <>
        <p>Un pluviómetro es un instrumento utilizado para medir la cantidad de lluvia que cae en un determinado lugar durante un período de tiempo.</p>
        <p>Es una herramienta sencilla, pero el dato que proporciona puede ser muy importante: permite saber con mayor precisión cuánto llovió y construir un registro de precipitaciones.</p>
        
        <h2>¿Cómo funciona un pluviómetro?</h2>
        <p>Aunque existen diferentes modelos, el principio básico es similar. El instrumento cuenta con una superficie que capta el agua de lluvia. Esa agua luego pasa por un sistema de medición que permite determinar la cantidad de precipitación.</p>
        <p>El resultado normalmente se expresa en milímetros de lluvia.</p>

        <h2>¿Qué tipos de pluviómetros existen?</h2>
        <p>De forma general podemos encontrar tres grandes grupos, y conocer las <Link href="/blog/pluviometro-manual-vs-inteligente" className="text-virx-cyan hover:underline">diferencias entre un pluviómetro manual y uno inteligente</Link> es clave para elegir el adecuado:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-white/80">
          <li><strong>Pluviómetros manuales:</strong> La lluvia se acumula y una persona debe acercarse al instrumento para realizar la lectura.</li>
          <li><strong>Pluviómetros automáticos:</strong> Registran la precipitación automáticamente y permiten obtener los datos sin necesidad de realizar una lectura manual cada vez que llueve.</li>
          <li><strong>Pluviómetros inteligentes:</strong> Además de registrar la lluvia, incorporan tecnología de conectividad para transmitir la información y facilitar su consulta de manera remota.</li>
        </ul>

        <h2>¿Por qué utilizar un pluviómetro?</h2>
        <p>Porque mirar el cielo, consultar a un vecino o estimar cuánto llovió no reemplaza tener un dato medido en el lugar. Un registro de precipitaciones permite conocer qué ocurrió realmente en un determinado establecimiento.</p>

        <h2>¿Qué aporta un pluviómetro inteligente?</h2>
        <p>La principal diferencia está en el acceso al dato. En lugar de depender de una persona que vaya hasta el instrumento después de cada lluvia, un sistema inteligente puede registrar la precipitación y enviar la información automáticamente.</p>
        <p>Esto permite consultar la información sin necesidad de estar físicamente en el lugar.</p>
        <p>Medir es tener el dato. Tener el dato es poder consultarlo cuando lo necesitás.</p>
        <div className="mt-6">
          <Link href="/" className="text-virx-cyan font-bold hover:underline">Conocé VIRX, medición inteligente de lluvia</Link>
        </div>

        <BlogCTA />
      </>
    )
  },
  {
    slug: 'cuanto-es-1-mm-de-lluvia',
    title: '¿Cuánto es 1 mm de lluvia y qué significa para el campo?',
    metaTitle: '¿Cuánto es 1 mm de lluvia? ¿Qué significa para el campo? | VIRX',
    metaDescription: '¿Qué significa que llovieron 1, 10 o 50 mm? Te explicamos de forma simple cómo interpretar los milímetros de lluvia y registrar las precipitaciones.',
    h1: '¿Cuánto es 1 mm de lluvia y qué significa para el campo?',
    category: 'Medición de lluvia',
    publishedAt: '2026-09-09',
    author: 'Equipo VIRX',
    keywords: ['1 mm de lluvia', 'cuánto es 1 mm de lluvia', 'milímetros de lluvia', 'precipitación', 'lluvia en el campo'],
    imageUrl: '/scroll-campo.jpg',
    imageAlt: 'Gotas de lluvia sobre un campo agrícola',
    content: (
      <>
        <p>Cuando escuchamos que “llovieron 10, 20 o 50 milímetros”, estamos hablando de la cantidad de agua que cayó sobre una superficie. Pero ¿cuánta agua representa realmente un milímetro?</p>
        
        <h2>1 mm de lluvia = 1 litro por metro cuadrado</h2>
        <p>La equivalencia es sencilla: 1 mm de lluvia = 1 litro de agua por metro cuadrado.</p>
        
        <div className="overflow-x-auto my-6 border border-white/10 rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-4 font-bold text-white">Lluvia Registrada</th>
                <th className="p-4 font-bold text-white">Equivalencia (Agua por m²)</th>
              </tr>
            </thead>
            <tbody className="text-white/80">
              <tr className="border-b border-white/10"><td className="p-4">1 mm</td><td className="p-4">1 litro</td></tr>
              <tr className="border-b border-white/10"><td className="p-4">5 mm</td><td className="p-4">5 litros</td></tr>
              <tr className="border-b border-white/10"><td className="p-4">10 mm</td><td className="p-4">10 litros</td></tr>
              <tr className="border-b border-white/10"><td className="p-4">20 mm</td><td className="p-4">20 litros</td></tr>
              <tr className="border-b border-white/10"><td className="p-4">30 mm</td><td className="p-4">30 litros</td></tr>
              <tr className="border-b border-white/10"><td className="p-4">50 mm</td><td className="p-4">50 litros</td></tr>
              <tr><td className="p-4">100 mm</td><td className="p-4">100 litros</td></tr>
            </tbody>
          </table>
        </div>
        
        <p>Esto ayuda a entender por qué los milímetros son una medida tan utilizada para registrar las precipitaciones.</p>

        <h2>¿Por qué importa saber cuántos milímetros llovieron?</h2>
        <p>Porque no es lo mismo decir “llovió bastante” que saber exactamente cuánto llovió. Si querés entender a fondo <Link href="/blog/importancia-de-medir-la-lluvia-en-el-campo" className="text-virx-cyan hover:underline">por qué es importante medir la lluvia en el campo</Link>, la clave está en el contexto.</p>
        <p>Un registro de 25 mm, por ejemplo, permite guardar un dato concreto que después puede compararse con otras lluvias, semanas o años.</p>

        <h2>¿Cómo se registra la lluvia en un campo?</h2>
        <p>El dato puede obtenerse mediante un pluviómetro correctamente instalado. Tradicionalmente, una persona debe acercarse al instrumento y realizar la lectura. Con un sistema automático, en cambio, la medición puede registrarse sin necesidad de estar presente.</p>

        <h2>¿Por qué guardar un historial?</h2>
        <p>Una lluvia aislada aporta información. Un historial de lluvias aporta contexto. Registrar las precipitaciones permite observar cómo fueron cambiando los períodos de lluvia y consultar información anterior cuando sea necesario.</p>

        <h2>La lluvia también puede convertirse en un dato digital</h2>
        <p>Ese es uno de los objetivos de la tecnología aplicada a la medición de precipitaciones: transformar algo que ocurre naturalmente —la lluvia— en un dato que pueda consultarse fácilmente.</p>
        <p>En VIRX, ese es justamente el concepto central: convertir la lluvia que cae en el campo en un dato accesible y útil.</p>
        <p>La lluvia de tu campo, en tu celular.</p>
        <div className="mt-6">
          <Link href="/" className="text-virx-cyan font-bold hover:underline">Conocé VIRX</Link>
        </div>

        <BlogCTA />
      </>
    )
  },
  {
    slug: 'pluviometro-manual-vs-inteligente',
    title: 'Pluviómetro manual vs. inteligente: diferencias',
    metaTitle: 'Pluviómetro manual vs. inteligente: diferencias | VIRX',
    metaDescription: 'Conocé las diferencias entre un pluviómetro manual y uno inteligente: medición, acceso a los datos, registro e información remota.',
    h1: 'Pluviómetro manual vs. pluviómetro inteligente',
    category: 'Pluviómetros',
    publishedAt: '2026-09-08',
    author: 'Equipo VIRX',
    keywords: ['pluviómetro manual', 'pluviómetro inteligente', 'diferencia pluviómetros'],
    imageUrl: '/producto-completo.png',
    imageAlt: 'Comparación visual de pluviómetros',
    content: (
      <>
        <p>El objetivo de cualquier pluviómetro es el mismo: medir la lluvia. La diferencia está principalmente en cómo se registra, consulta y transmite ese dato.</p>
        
        <h2>Pluviómetro manual</h2>
        <p>Un pluviómetro manual necesita que una persona se acerque al lugar para realizar la lectura. Esto puede funcionar perfectamente cuando el instrumento está cerca y existe una rutina de medición.</p>
        <p>El desafío aparece cuando el campo está lejos o cuando se necesita consultar el dato sin estar presente.</p>

        <h2>Pluviómetro inteligente</h2>
        <p>Un pluviómetro inteligente automatiza el registro de la precipitación y puede transmitir la información para que el usuario pueda consultarla de manera remota.</p>
        <p>En lugar de tener solamente un instrumento que mide, se incorpora un sistema que permite medir, registrar y comunicar el dato.</p>

        <h2>Diferencias principales</h2>
        <div className="overflow-x-auto my-6 border border-white/10 rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-4 font-bold text-white">Característica</th>
                <th className="p-4 font-bold text-white">Pluviómetro manual</th>
                <th className="p-4 font-bold text-white">Pluviómetro inteligente</th>
              </tr>
            </thead>
            <tbody className="text-white/80">
              <tr className="border-b border-white/10"><td className="p-4">Medición de lluvia</td><td className="p-4">Sí</td><td className="p-4">Sí</td></tr>
              <tr className="border-b border-white/10"><td className="p-4">Lectura presencial</td><td className="p-4">Generalmente necesaria</td><td className="p-4">No necesariamente</td></tr>
              <tr className="border-b border-white/10"><td className="p-4">Registro automático</td><td className="p-4">No</td><td className="p-4">Sí</td></tr>
              <tr className="border-b border-white/10"><td className="p-4">Consulta remota</td><td className="p-4">No</td><td className="p-4">Sí</td></tr>
              <tr className="border-b border-white/10"><td className="p-4">Historial digital</td><td className="p-4">Depende del registro</td><td className="p-4">Puede integrarse</td></tr>
              <tr><td className="p-4">Automatización</td><td className="p-4">Baja</td><td className="p-4">Alta</td></tr>
            </tbody>
          </table>
        </div>

        <h2>¿Cuál conviene?</h2>
        <p>Depende de las necesidades de cada usuario. Si solamente necesitás realizar una lectura ocasional y tenés fácil acceso al instrumento, un sistema manual puede ser suficiente.</p>
        <p>Si necesitás conocer el dato sin estar físicamente en el campo, automatizar la medición puede ser una alternativa mucho más práctica.</p>

        <h2>Tecnología que simplifica</h2>
        <p>La tecnología no debería hacer más complicado algo sencillo. En VIRX buscamos exactamente lo contrario: hacer que conocer cuánto llovió sea más simple mediante equipos diseñados específicamente para el rigor del agro.</p>
        <p>Transformá la manera en que medís la lluvia. VIRX es el pluviómetro inteligente diseñado en Argentina que automatiza tus mediciones y envía los milímetros caídos directo a tu celular. Sin ir al lote, sin estimaciones.</p>
        <div className="mt-6">
          <Link href="/" className="text-virx-cyan font-bold hover:underline">Quiero conocer cómo instalar VIRX en mi campo</Link>
        </div>

        <BlogCTA />
      </>
    )
  },
  {
    slug: 'importancia-de-medir-la-lluvia-en-el-campo',
    title: '¿Por qué es importante medir la lluvia en el campo?',
    metaTitle: '¿Por qué es importante medir la lluvia en el campo? | VIRX',
    metaDescription: 'Conocer los milímetros de lluvia permite registrar las precipitaciones y contar con información objetiva sobre lo que ocurre en un establecimiento.',
    h1: '¿Por qué es importante medir la lluvia en el campo?',
    category: 'Tecnología para el campo',
    publishedAt: '2026-09-07',
    author: 'Equipo VIRX',
    keywords: ['importancia lluvia campo', 'medición agronomía', 'precipitación campo'],
    imageUrl: '/hero-campo.jpg',
    imageAlt: 'Campo productivo beneficiado por la lluvia',
    content: (
      <>
        <p>La lluvia forma parte de la actividad diaria de cualquier establecimiento agropecuario. Pero una pregunta muy simple puede ser difícil de responder con precisión cuando no estamos en el lugar: ¿Cuántos milímetros llovieron?</p>
        <p>Medir la precipitación permite transformar una percepción en un dato concreto.</p>

        <h2>No es lo mismo estimar que medir</h2>
        <p>Decir que “llovió mucho” o “llovió poco” es una apreciación. Saber que se registraron 18 mm, 35 mm o 62 mm es tener un dato objetivo. Esta diferencia es especialmente importante cuando se quiere llevar un registro de lo ocurrido en el campo.</p>

        <h2>Tener un historial de precipitaciones</h2>
        <p>Una de las principales ventajas de registrar la lluvia es poder mirar hacia atrás. Aprender a <Link href="/blog/historial-de-lluvias" className="text-virx-cyan hover:underline">registrar y consultar el historial de lluvias</Link> permite evaluar:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-white/80">
          <li>Cuándo llovió.</li>
          <li>Cuánto llovió.</li>
          <li>Cómo fueron las precipitaciones durante un período.</li>
          <li>Cuánto tiempo pasó desde la última lluvia.</li>
        </ul>
        <p>Con el tiempo, estos registros pueden convertirse en una fuente de información útil para conocer mejor el comportamiento de las precipitaciones de un establecimiento.</p>

        <h2>El problema de medir cuando no estás ahí</h2>
        <p>En muchos casos, el instrumento puede estar instalado en un campo al que no se llega todos los días. Entonces aparece la necesidad de llamar a alguien, preguntarle a un encargado o esperar hasta poder acercarse.</p>
        <p>Un sistema de medición remota busca resolver justamente ese punto: que el dato viaje hacia vos, en lugar de que vos tengas que ir a buscarlo.</p>

        <h2>La tecnología aplicada a algo concreto</h2>
        <p>No hace falta agregar tecnología porque sí. Cuando la tecnología resuelve una tarea concreta y cotidiana, tiene sentido. Ese es el enfoque de VIRX: medir la lluvia en el establecimiento y llevar la información directamente al usuario.</p>
        <p>La lluvia cae en tu campo. El dato llega a vos.</p>
        <div className="mt-6">
          <Link href="/" className="text-virx-cyan font-bold hover:underline">Conocé VIRX</Link>
        </div>

        <BlogCTA />
      </>
    )
  },
  {
    slug: 'historial-de-lluvias',
    title: 'Historial de lluvias: cómo registrar las precipitaciones',
    metaTitle: 'Historial de lluvias: cómo registrar las precipitaciones | VIRX',
    metaDescription: 'Aprendé cómo registrar las lluvias de un campo, qué información conviene guardar y por qué tener un historial de precipitaciones puede ser útil.',
    h1: '¿Cómo registrar y consultar el historial de lluvias de un campo?',
    category: 'Medición de lluvia',
    publishedAt: '2026-09-06',
    author: 'Equipo VIRX',
    keywords: ['historial de lluvias', 'registrar lluvias', 'precipitaciones históricas'],
    imageUrl: '/app-mockup.jpg',
    imageAlt: 'Usuario consultando el historial en su celular',
    content: (
      <>
        <p>Saber cuánto llovió hoy es útil. Pero poder saber cuánto llovió hoy, la semana pasada o durante los últimos meses permite tener una visión mucho más completa. Para eso es necesario contar con un historial de precipitaciones.</p>

        <h2>¿Qué debería registrar un historial de lluvias?</h2>
        <p>Como mínimo, un registro debería permitir conocer:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-white/80">
          <li>Fecha de la lluvia.</li>
          <li>Cantidad de milímetros registrados.</li>
          <li>Período entre precipitaciones.</li>
          <li>Acumulado durante un determinado período.</li>
        </ul>
        <p>La información puede registrarse manualmente en una planilla o mediante un sistema automático.</p>

        <h2>Registro manual</h2>
        <p>Una forma tradicional consiste en realizar la lectura del pluviómetro después de cada lluvia y anotar el resultado. Es un método simple, aunque depende de que alguien realice la lectura y registre correctamente el dato.</p>

        <h2>Registro automático</h2>
        <p>Un sistema automático puede registrar las precipitaciones sin depender de una persona que esté presente en el campo. Además, si cuenta con conectividad, la información puede transmitirse para ser consultada de manera remota.</p>

        <h2>¿Para qué sirve guardar el historial?</h2>
        <p>El historial permite mirar más allá de una lluvia puntual. Por ejemplo, se puede consultar:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-white/80">
          <li>¿Cuándo fue la última lluvia?</li>
          <li>¿Cuántos milímetros acumulamos?</li>
          <li>¿Cuántos días pasaron desde la última precipitación?</li>
          <li>¿Cómo fueron las lluvias durante un determinado período?</li>
        </ul>
        <p>La respuesta deja de depender de la memoria y pasa a estar respaldada por datos registrados.</p>

        <h2>Del pluviómetro al dato</h2>
        <p>Ese es el paso que busca simplificar la tecnología. El pluviómetro registra la precipitación y el sistema convierte esa medición en información que el usuario puede consultar directamente en <Link href="/" className="text-virx-cyan hover:underline">nuestro producto VIRX</Link>.</p>
        <p>La propuesta parte justamente de ese concepto: medición inteligente de lluvia, con la información disponible sin necesidad de estar físicamente junto al instrumento.</p>
        <p>Conocé cuánto llovió. Sin estar ahí.</p>
        <div className="mt-6">
          <Link href="/" className="text-virx-cyan font-bold hover:underline">Descubrí cómo funciona VIRX</Link>
        </div>

        <BlogCTA />
      </>
    )
  }
];
