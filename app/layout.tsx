import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/componets/layout/NavBar";



const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Web Dev Blog",
  description: "A blog about web development and programming.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('antialiased bg-gray-300 flex flex-col min-h-screen px-2',nunito.variable)}
      >
      <NavBar />
      <main className="flex-grow"> {children}</main>
  
        <footer>Footer</footer>
      </body>
    </html>
  );
}
