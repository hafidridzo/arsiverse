import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/tema";
import Navbar from "@/components/hfd/navbar";
import Footer from "@/components/hfd/footer";

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
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar/>
          <main>
        {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
