// Step 1: First, install the @vercel/analytics package
// Run this command in your terminal:
// npm i @vercel/analytics

// Step 2: Update your layout.js file to add the Analytics component
// File: src/app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prathmesh Doddanawar - Portfolio",
  description: "Full Stack Developer with expertise in React, Next.js, and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}