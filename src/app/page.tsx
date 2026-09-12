"use client";

import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-6">
      <button 
        className="w-full flex justify-between items-center focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-virx-cyan transition-colors">{question}</span>
        <span className={`text-3xl font-light text-white/30 group-hover:text-virx-cyan transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-6 text-lg text-white/60 pr-12 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.9]);

  // Texto para el H1 de Hero
  const titleWords = "La lluvia de tu campo, en tu celular.".split(" ");
  
  // Pasos de Cómo Funciona
  const steps = [
    { num: "01", title: "Captación", desc: "La lluvia ingresa al sistema de captación del dispositivo." },
    { num: "02", title: "Medición", desc: "El sistema registra la precipitación y determina la cantidad de lluvia caída." },
    { num: "03", title: "Procesamiento", desc: "La electrónica procesa la información obtenida." },
    { num: "04", title: "Transmisión", desc: "Los datos son transmitidos mediante el sistema de conectividad del dispositivo." },
    { num: "05", title: "Consulta", desc: "El usuario recibe y consulta la información desde su celular." }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white selection:bg-virx-cyan selection:text-white">
      
      {/* 1. THE HERO SECTION (Full Background Layout) */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg-v2.jpg')" }}
      >
        {/* Overlay Oscuro */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <motion.div 
          className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          {/* Texto (Título y Descripción) */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {titleWords.map((word, i) => (
              <motion.span 
                key={i} 
                className="inline-block mr-2 sm:mr-3"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 tracking-tight leading-relaxed mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            VIRX es un pluviómetro inteligente diseñado para medir la lluvia directamente en tu campo y llevar el dato hasta vos.
          </motion.p>

          {/* Botones */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link href="/#producto" className="w-full sm:w-auto group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden transition-all hover:border-virx-cyan hover:scale-105 text-center shadow-lg shadow-black/20">
              <div className="absolute inset-0 bg-virx-cyan/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative font-bold tracking-widest text-sm text-white group-hover:text-virx-cyan uppercase">Conocé VIRX</span>
            </Link>
            <Link href="/#contacto" className="w-full sm:w-auto px-8 py-4 text-center text-sm font-bold tracking-widest text-white/80 hover:text-white uppercase transition-colors flex items-center justify-center">
              Quiero Información
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. EL PROBLEMA (Tipografía Inmersiva Apple Style) */}
      <section className="py-32 min-h-[60vh] flex flex-col justify-center items-center relative border-t border-white/10 bg-[#0A0A0A] overflow-hidden">
        {/* Resplandor radial */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A9CC]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <p className="text-sm md:text-base font-semibold text-[#00A9CC] uppercase tracking-[0.2em] mb-6 text-center max-w-2xl">
              Para conocer la cantidad de lluvia caída, muchas veces hay que estar presente.
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 max-w-4xl mx-auto tracking-tight">
              El problema no es medir la lluvia. El problema es no tener el dato cuando lo necesitás.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 3. BENEFICIOS (Bento Grid) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">Información remota.</h2>
          <p className="text-xl text-white/50 font-medium max-w-2xl mx-auto">La lluvia ocurre en tu campo. El dato llega directamente a vos.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Card 1: UI Mockup (Span 2 cols) */}
          <motion.div 
            className="md:col-span-2 row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col h-full overflow-hidden relative group"
            whileHover={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-virx-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Div Superior: Título y descripción */}
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold tracking-tight mb-2">Medición de milímetros</h3>
              <p className="text-white/60 font-medium text-lg">Conocé objetivamente la cantidad de lluvia registrada en tu campo.</p>
            </div>
            
            {/* UI Mockup App Centrado */}
            <div className="relative z-10 flex-1 flex items-center justify-center w-full mt-8">
              <div className="w-full max-w-sm mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                <p className="text-sm text-virx-cyan font-bold tracking-widest uppercase mb-1">LLUVIA DE AYER</p>
                <h4 className="text-6xl font-extrabold tracking-tighter mb-4 text-white">24.5 <span className="text-2xl text-white/40">mm</span></h4>
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="text-white/60 font-medium text-sm md:text-base">Hace 3 horas</span>
                  <span className="bg-virx-cyan/20 text-virx-cyan text-xs font-bold px-3 py-1 rounded-full">Sincronizado</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="md:col-span-1 row-span-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center group"
            whileHover={{ scale: 0.98 }}
          >
            <h3 className="text-2xl font-extrabold tracking-tight mb-3">Acceso remoto</h3>
            <p className="text-white/60 font-medium">Consultá la información desde tu celular sin necesidad de trasladarte.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="md:col-span-1 row-span-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center group"
            whileHover={{ scale: 0.98 }}
          >
            <h3 className="text-2xl font-extrabold tracking-tight mb-3">Historial</h3>
            <p className="text-white/60 font-medium">Conservá los registros y consultá la información acumulada a lo largo del tiempo.</p>
          </motion.div>

          {/* Card 4 (Full Width) */}
          <motion.div 
            className="md:col-span-3 row-span-1 bg-gradient-to-r from-virx-cyan/20 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col justify-center items-center text-center group overflow-hidden relative"
            whileHover={{ scale: 0.99 }}
          >
            <div className="absolute inset-0 bg-virx-cyan/5 group-hover:bg-virx-cyan/10 transition-colors"></div>
            <h3 className="text-3xl font-extrabold tracking-tight mb-3 relative z-10">Tecnología pensada para el campo</h3>
            <p className="text-white/80 font-medium text-lg max-w-2xl relative z-10">Una solución desarrollada alrededor de una necesidad concreta del productor argentino.</p>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAL (Minimalista tipográfico) */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
            No se trata solamente de medir lluvia.
          </h2>
          <p className="text-2xl text-white/50 leading-relaxed font-medium">
            Los pluviómetros tradicionales permiten conocer cuánto llovió. VIRX busca llevar ese dato directamente hasta vos. La diferencia está en transformar una medición que tradicionalmente requiere presencia física en información disponible de forma remota.
          </p>
        </div>
      </section>

      {/* 4. SECCIÓN CÓMO FUNCIONA (Layout Estándar en Grid) */}
      <section id="como-funciona" className="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Columna Izquierda (Visual) */}
            <div className="flex flex-col items-start lg:sticky lg:top-32 self-start">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                De la lluvia al dato, <br className="hidden lg:block" /> automáticamente.
              </motion.h2>

              <motion.div
                className="relative w-full max-w-lg mx-auto lg:mx-0 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-virx-cyan/10 blur-[120px] rounded-full pointer-events-none"></div>
                <motion.img 
                  src="/app-mockup.jpg" 
                  alt="Usuario consultando app VIRX" 
                  className="w-full h-auto max-h-[500px] object-cover rounded-3xl border border-white/10 relative z-10 drop-shadow-[0_20px_40px_rgba(0,169,204,0.3)]"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            {/* Columna Derecha (Los Pasos - Glassmorphism Cards) */}
            <motion.div 
              className="flex flex-col space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-virx-cyan/50 rounded-2xl p-6 md:p-8 transition-colors flex flex-col sm:flex-row gap-4 sm:items-start group cursor-default shadow-2xl"
                >
                  <span className="text-xl md:text-2xl font-bold tracking-widest text-[#00A9CC] uppercase shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
          </div>
          
          <motion.div 
            className="text-center mt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-virx-cyan">
              Vos no tenés que ir a buscar el dato. <br className="hidden sm:block" /> El dato llega a vos.
            </h3>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTO SHOWCASE */}
      <section id="producto" className="py-32 bg-white/5 border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-virx-cyan/5 blur-[200px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8">Un pluviómetro inteligente pensado para el campo.</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto font-medium leading-relaxed">
              VIRX combina un sistema de captación y medición de lluvia con electrónica, conectividad y alimentación diseñada para funcionar en un establecimiento rural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
                <h3 className="text-virx-cyan font-bold tracking-widest uppercase mb-8 text-sm">Componentes del Sistema</h3>
                <ul className="space-y-6">
                  {["Sistema de captación", "Unidad de medición", "Caja electrónica independiente", "Sistema de conectividad", "Panel solar", "Batería", "Sistema de instalación", "Aplicación/interfaz"].map((item, i) => (
                    <li key={i} className="flex items-center text-white/80 font-medium text-lg border-b border-white/5 pb-4 last:border-0">
                      <span className="text-virx-cyan mr-4 font-bold">0{i+1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="flex justify-center items-center h-[600px] relative">
               <img src="/producto-completo.png" alt="Despiece" className="max-h-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]" />
             </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-12">Tecnología creada para una necesidad real.</h2>
          <div className="space-y-8 text-xl text-white/50 font-medium leading-relaxed mb-16 text-left">
            <p>
              VIRX nace como un proyecto familiar argentino a partir de una necesidad concreta del campo: conocer de manera simple y remota cuántos milímetros de lluvia cayeron en un establecimiento.
            </p>
            <p>
              La idea comenzó con una pregunta simple: ¿Por qué para saber cuánto llovió en un campo todavía tenemos que estar ahí o depender de alguien que vaya a mirar el pluviómetro? A partir de esa necesidad comenzó VIRX. Un proyecto desarrollado desde Argentina y pensado desde el principio para resolver un problema concreto mediante tecnología.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
              <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">Misión</h3>
              <p className="text-white/60 font-medium">Hacer que conocer la lluvia de un campo sea simple, accesible y remoto.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
              <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">Visión</h3>
              <p className="text-white/60 font-medium">Convertir a VIRX en una referencia argentina en tecnología aplicada a la medición inteligente de lluvia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-[#0A0A0A] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-16 text-white">Preguntas frecuentes</h2>
          
          <div className="border-t border-white/10">
            <FAQItem 
              question="¿Qué es un pluviómetro inteligente?" 
              answer="Es un dispositivo que no solo capta la lluvia, sino que mide la cantidad electrónicamente y transmite el dato a través de redes móviles (IoT) directamente a tu celular."
            />
            <FAQItem 
              question="¿Qué mide VIRX?" 
              answer="VIRX mide la precipitación en milímetros (mm), registrando la intensidad y el acumulado, además de guardar el historial para que sepas cuándo y cuánto llovió."
            />
            <FAQItem 
              question="¿Necesito ir a mirar el equipo al campo?" 
              answer="No. Esa es la principal ventaja. Una vez instalado, VIRX transmite los datos y los podés ver en cualquier momento desde tu teléfono sin importar dónde estés."
            />
            <FAQItem 
              question="¿Funciona con energía solar?" 
              answer="Sí, el sistema está diseñado con un panel solar integrado y batería para funcionar de manera 100% autónoma en el medio del campo sin necesidad de cables ni conexiones eléctricas."
            />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-40 bg-[#0A0A0A] relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-virx-cyan/5 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-8">¿Querés conocer VIRX?</h2>
          <p className="text-2xl text-white/50 font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
            Estamos desarrollando una nueva forma de conocer la lluvia de tu campo. Si querés conocer el producto, recibir información sobre el lanzamiento o formar parte de las primeras experiencias con VIRX, dejanos tus datos.
          </p>
          <div className="text-left">
             <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}
