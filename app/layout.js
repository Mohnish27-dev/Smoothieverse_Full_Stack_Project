import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SmoothieVerse-Fund your project with smoothie",
  description: "This website is a crowdfunding platform for smoothie projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <Navbar />
          <div className="text-white fixed inset-0 -z-10 h-auto w-auto bg-white [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>


          {children}


          <Footer />
        </SessionWrapper>

      </body>
    </html>
  );
}
