"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/5 backdrop-blur-xl p-10 md:p-14 border border-virx-cyan/30 text-center rounded-3xl"
      >
        <div className="w-20 h-20 bg-virx-cyan/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-virx-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-3xl font-extrabold tracking-tighter text-white mb-4">¡Consulta recibida!</h3>
        <p className="text-white/60 text-lg font-medium">Nos comunicaremos a la brevedad para brindarte más información sobre VIRX.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl p-10 md:p-16 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-virx-cyan to-transparent opacity-50"></div>
      
      <div className="space-y-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-white/50 mb-3 uppercase tracking-widest">Nombre completo</label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-virx-cyan focus:bg-white/10 transition-all text-white font-medium"
              placeholder="Ej. Juan Pérez"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-white/50 mb-3 uppercase tracking-widest">WhatsApp</label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-virx-cyan focus:bg-white/10 transition-all text-white font-medium"
              placeholder="+54 9 ..."
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-white/50 mb-3 uppercase tracking-widest">Email</label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-virx-cyan focus:bg-white/10 transition-all text-white font-medium"
            placeholder="juan@ejemplo.com"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="location" className="block text-xs font-bold text-white/50 mb-3 uppercase tracking-widest">Localidad</label>
            <input
              type="text"
              id="location"
              required
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-virx-cyan focus:bg-white/10 transition-all text-white font-medium"
              placeholder="Ej. Tandil"
            />
          </div>
          <div>
            <label htmlFor="province" className="block text-xs font-bold text-white/50 mb-3 uppercase tracking-widest">Provincia</label>
            <input
              type="text"
              id="province"
              required
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-virx-cyan focus:bg-white/10 transition-all text-white font-medium"
              placeholder="Buenos Aires"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="hasField" className="block text-xs font-bold text-white/50 mb-3 uppercase tracking-widest">¿Tenés campo?</label>
            <select
              id="hasField"
              className="w-full px-5 py-4 bg-[#1E1E24] border border-white/10 rounded-xl focus:outline-none focus:border-virx-cyan transition-all text-white font-medium appearance-none"
            >
              <option value="si">Sí, soy productor/dueño</option>
              <option value="no">No, asesoro/presto servicios</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div>
            <label htmlFor="hectares" className="block text-xs font-bold text-white/50 mb-3 uppercase tracking-widest">Cantidad de hectáreas</label>
            <input
              type="text"
              id="hectares"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-virx-cyan focus:bg-white/10 transition-all text-white font-medium"
              placeholder="Ej. 500 ha"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold text-white/50 mb-3 uppercase tracking-widest">Mensaje</label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-virx-cyan focus:bg-white/10 transition-all text-white font-medium resize-none"
            placeholder="Dejanos tu consulta o comentario..."
          ></textarea>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          type="submit"
          disabled={status === "submitting"}
          className="w-full mt-8 bg-virx-cyan text-white font-extrabold tracking-widest uppercase text-sm py-5 px-6 rounded-xl transition-all flex justify-center items-center hover:shadow-[0_0_30px_rgba(0,169,204,0.4)]"
        >
          {status === "submitting" ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            "Quiero conocer VIRX"
          )}
        </motion.button>
      </div>
    </form>
  );
}
