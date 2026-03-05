import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miyelani Mashimbyi | Full-Stack Developer",
  description:
    "Full-Stack Developer with 2 years of experience building modern web applications. Trained at Greenrim Training Institute. Passionate about clean code and great user experiences.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "JavaScript", "Web Developer", "Miyelani Mashimbyi"],
  authors: [{ name: "Miyelani Mashimbyi" }],
  openGraph: {
    title: "Miyelani Mashimbyi | Full-Stack Developer",
    description: "Full-Stack Developer with 2 years of experience building modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
