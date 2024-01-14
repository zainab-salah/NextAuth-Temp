 
import AuthProvider from "@/components/AuthProvider";

import { fontSans } from "@/lib/fonts"
import "./globals.css";
import Head from "./head";
import { cn } from "@/lib/utils";


 

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
         {/* <AuthProvider> */}

        {children}
         {/* </AuthProvider> */}
      </body>
    </html>
  );
}

 