import { Inter } from "next/font/google";
import "./globals.css";
import { AIModelProvider } from "../context/AIModelContext";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "AiHub",
  description: "A collection of AI models for various use cases",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AIModelProvider>{children}</AIModelProvider>
      </body>
    </html>
  );
}
