import AuthProvider from "@/components/AuthProvider";

import { fontSans } from "@/lib/fonts";
import "./globals.css";
import Head from "./head";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <Head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <Navbar />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
