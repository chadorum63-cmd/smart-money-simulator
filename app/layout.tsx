import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Money Trading Simulator",
  description: "Учебный тренажёр Smart Money"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-dvh bg-[#131722] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}

