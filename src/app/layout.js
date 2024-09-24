import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const G_ID = process.env.G_ID

export const metadata = {
  title: "WebLaunch",
  description: "Launch Your Startup Today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId={G_ID}/>
    </html>
  );
}
