import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import { Toaster } from 'react-hot-toast'
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: '--font-spaceGrotesk',
  subsets: ['latin'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Umer Zafar | Portfolio",
  description: "Portfolio by Umer Zafar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", spaceGrotesk.variable, geistSans.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#0a0a0a',
              color: '#00ffff',
              border: '1px solid #00ff88',
            }
          }}
        />
        {children}
      </body>
    </html>
  );
}
