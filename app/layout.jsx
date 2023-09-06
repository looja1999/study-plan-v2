import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="w-full p-4 md:max-w-[1140px] mx-auto h-[600px] md:min-h-screen ">
          {children}
        </div>
      </body>
    </html>
  );
}