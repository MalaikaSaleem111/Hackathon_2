import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MobileNavbar from "./Components/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div>
        <div className="hidden md:block">
        <Navbar />
        </div>
      <div className="md:hidden">
      <MobileNavbar/>
      </div>
      
      <main className={inter.className}>{children}
      </main>
      
      <Footer />
      </div>
      </body>
    </html>
    
  );
}
