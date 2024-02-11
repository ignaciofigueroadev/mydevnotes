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
          <div className="container min-h-screen md:px-40 py-6 mx-auto">
            <NextTopLoader color="#6d28d9" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
