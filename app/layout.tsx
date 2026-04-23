import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Money Trading Simulator",
  description: "Учебный тренажёр Smart Money"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh bg-bg font-sans text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}

