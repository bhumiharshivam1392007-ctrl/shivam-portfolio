import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Shivam Singh | Portfolio - Shivam Labs",
  description:
    "Portfolio of Shivam Singh (Shivam Labs) - Full Stack Developer, AI Automation Specialist & SEO Expert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/orbit-tutorial.png" sizes="any" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
