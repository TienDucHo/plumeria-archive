import "./globals.css";
import { Source_Sans_3 } from "next/font/google";
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

// components
import NavBar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "Plumeria Archive",
  description: "News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className} min-h-full`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
