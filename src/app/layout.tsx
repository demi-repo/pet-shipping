import type { Metadata } from "next";
import { createTheme, MantineProvider } from '@mantine/core';
import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIY Pet Shipping Consultants",
  description: "DIY Pet Shipping Consultants",
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <MantineProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
