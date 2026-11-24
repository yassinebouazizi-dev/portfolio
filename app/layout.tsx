import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yassine Bouazizi | Full-Stack Web & Cloud Systems Developer",
  description:
    "Portfolio of Yassine Bouazizi, Full-Stack Web Developer & Cloud Systems specialist. Crafting resilient web platforms, RESTful APIs, and cloud monitoring solutions.",
  keywords: [
    "Yassine Bouazizi",
    "Full-Stack Developer",
    "React.js",
    "Next.js",
    "Spring Boot",
    "Node.js",
    "Kibana",
    "PFE Internship Tunisia",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#09090b] text-[#f8fafc] antialiased selection:bg-blue-500 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
