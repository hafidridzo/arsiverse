import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/tema";
import Navbar from "@/components/hfd/layouting/navbar";
import Footer from "@/components/hfd/layouting/footer";

export const metadata: Metadata = {
  title: "ArsiVerse",
  description: "Platform Pemersatu Arsitektur Indonesia",
  icons:{
    icon:[{
      media: "(prefers-color-scheme: light)",
      url: "/ArsiVerse.svg",
      href: "/ArsiVerse.svg"
    },
    {media: "(prefers-color-scheme: dark)",
    url: "/ArsiVerse.svg",
    href: "/ArsiVerse.svg"
  }
  ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="bg-body text-foreground">
        {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
