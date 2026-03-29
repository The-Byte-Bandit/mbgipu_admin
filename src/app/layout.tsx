// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "MBGIPU",
  description: "Celebrating beauty and excellence across PortHarcourt universities.",
  // add other metadata (openGraph, icons, etc.)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          antialiased
        `}
               suppressHydrationWarning  
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}


// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   weight: ["400", "500", "600", "700", "900"],
// });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={inter.variable}>
//       <body className="antialiased">
//         {/* your providers + children */}
//       </body>
//     </html>
//   );
// }