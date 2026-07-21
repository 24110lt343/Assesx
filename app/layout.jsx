import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Assesx",
    template: "%s | Assesx",
  },
  description:
    "A modern real-time code collaboration and technical interview platform that enables seamless live coding, video communication, collaborative code execution, and structured candidate assessments—all in a secure, browser-based workspace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
