import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import { Toaster } from 'react-hot-toast'
import "./globals.css";
import { cn } from "@/lib/utils";
import ScrollToTop from "@/components/helper/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  variable: '--font-spaceGrotesk',
  subsets: ['latin'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://umer-got-web.vercel.app"),
  title: {
    default: "Umer Zafar | Full-Stack Developer",
    template: "%s | Umer Zafar"
  },
  description: "Umer Zafar is a full-stack developer from Rawalpindi, Pakistan, specializing in React, Next.js, Node.js, PostgreSQL, and modern web applications.",
  alternates: {
    canonical: "https://umer-got-web.vercel.app",
  },
  keywords: [
    "Umer Zafar",
    "Umer Zafar developer",
    "Umer Zafar portfolio",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "PERN Stack Developer",
    "PostgreSQL Developer",
    "Web Developer Pakistan",
    "Web Developer Rawalpindi",
    "Portfolio"
  ],
  authors: [
    {
      name: "Umer Zafar",
      url: "https://umer-got-web.vercel.app",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    url: "https://umer-got-web.vercel.app",
    title: "Umer Zafar | Full-Stack Developer",
    description:
      "Portfolio of Umer Zafar, a full-stack developer specializing in React, Next.js, Node.js, PostgreSQL, and modern web applications.",
    siteName: "Umer Zafar Portfolio",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Umer Zafar | Full-Stack Developer",
    description:
      "Portfolio of Umer Zafar, a full-stack developer specializing in React, Next.js, Node.js, PostgreSQL, and modern web applications.",
  },

  category: "technology",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Umer Zafar",
              url: "https://umer-got-web.vercel.app",
              jobTitle: "Full-Stack Developer",
              description:
                "Full-stack developer specializing in React, Next.js, Node.js, PostgreSQL, and modern web applications.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rawalpindi",
                addressCountry: "PK",
              },
              sameAs: [
                "https://github.com/umerzafar4598",
                "https://www.linkedin.com/in/umer-zafar-575371392",
              ],
            }),
          }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
