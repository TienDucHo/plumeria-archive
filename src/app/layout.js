import "./globals.css";
import { Source_Sans_3 } from "next/font/google";
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

// components
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Plumeria Archive",
  description: "News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className} mx-8 my-6`}>
        <NavBar />
      </body>
    </html>
  );
}
