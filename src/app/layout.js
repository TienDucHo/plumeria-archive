import "./globals.css";
import { Source_Sans_3 } from "next/font/google";
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

// components
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Plumeria Archive",
  description: "News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
