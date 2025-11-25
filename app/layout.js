import { Geist, Geist_Mono, Jost, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import "./globals.scss";
import WowWrapper from "./components/WowWrapper";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata = {
  title: "WorshipBD - Complete IT Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} `}>
        <Header/>
        <WowWrapper>{children}</WowWrapper>
        <Footer/>
      </body>
    </html>
  );
}
