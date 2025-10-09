import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import "./globals.scss";
import WowWrapper from "./components/WowWrapper";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WorshipBD - Complete IT Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        <WowWrapper>{children}</WowWrapper>
        <Footer/>
      </body>
    </html>
  );
}
