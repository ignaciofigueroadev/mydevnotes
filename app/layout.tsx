// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// JETBRAINS font
import { montserrat } from "@/font/montserrat";

// ProgressBar Component
import NextTopLoader from "nextjs-toploader";

// Global styles
import "./globals.css";

// Metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dev Notes | Home",
  description:
    "Welcome where tech meets curiosity. Quick reads on web development, fun facts, history, tips, and more.",
  keywords: [
    "Blog",
    "Developers",
    "Devs",
    "Programming",
    "Coding",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} font-montserrat`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-0 bottom-0 z-[-2] min-h-screen w-full bg-radial-gradient-mobile lg:bg-radial-gradient-desktop"></div>
          <div className="min-h-screen m-auto container py-6 w-full max-w-5xl">
            <NextTopLoader color="#6d28d9" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
