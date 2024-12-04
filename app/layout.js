import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NoLimits Furniture: Redefining Boundless Living",
  description: "Discover timeless designs and unmatched comfort with NoLimits Furniture. We craft stylish, durable pieces that inspire limitless possibilities for every space, blending functionality with modern elegance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
