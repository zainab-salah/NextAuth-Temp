 
import AuthProvider from "@/components/AuthProvider";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Head from "./head";
import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
 

 function RootLayout({
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
         {/* <AuthProvider> */}

        {children}
         {/* </AuthProvider> */}
      </body>
    </html>
  );
}

export default RootLayout;