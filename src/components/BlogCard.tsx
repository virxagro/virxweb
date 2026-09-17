"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface BlogCardProps {
  title: string;
  date: string;
  category: string;
  slug: string;
  Icon: LucideIcon;
}

export default function BlogCard({ title, date, category, slug, Icon }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block h-full outline-none">
      <motion.div
        whileHover="hover"
        variants={{
          hover: { y: -8 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group h-full flex flex-col bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300 shadow-lg"
      >
        {/* Cabecera Programática */}
        <div className="h-56 w-full relative bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center overflow-hidden">
          {/* Elementos decorativos (luces LED desenfocadas) */}
          <div className="absolute top-[-20%] left-[-10%] w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
          
          {/* Ícono central con animación en hover */}
          <motion.div
            variants={{
              hover: { scale: 1.15, filter: "drop-shadow(0 0 15px rgba(6,182,212,0.8))" }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 text-cyan-400"
          >
            <Icon size={72} strokeWidth={1.2} />
          </motion.div>
        </div>

        {/* Contenido */}
        <div className="p-8 flex flex-col flex-grow justify-between bg-gray-900 relative z-20">
          <div>
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-4 block">
              {category}
            </span>
            <h2 className="text-2xl font-extrabold text-white leading-tight mb-4 group-hover:text-cyan-400 transition-colors">
              {title}
            </h2>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-gray-800 pt-4">
            <span className="text-sm font-medium text-gray-400">
              {date}
            </span>
            <span className="text-sm font-bold text-gray-400 group-hover:text-cyan-400 transition-colors flex items-center gap-1">
              Leer más
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
