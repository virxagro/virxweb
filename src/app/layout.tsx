import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VIRX | Pluviómetro Inteligente para el Agro",
  description: "Monitorea las precipitaciones de tu establecimiento agrícola sin moverte de tu casa con VIRX, el pluviómetro inteligente desarrollado con telemetría de alta precisión.",
  keywords: ["pluviómetro inteligente", "pluviómetro digital", "medición de lluvia en tiempo real", "agrotech argentina", "pluviómetro automático campo"],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <head>
        {/* GA4 Snippet Placeholder */}
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-virx-white text-virx-mate selection:bg-virx-cyan selection:text-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
