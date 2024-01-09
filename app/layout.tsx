// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// JETBRAINS font
import { jetbrains } from "../font/jetbrains";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrains.className} font-jetbrains`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container md:px-40 lg:px-64 xl:px-72 [animation:linear_reveal_both] [animation-range:entry_5%_cover_30%] [animation-timeline:view()] py-10">
            <NextTopLoader color="#6d28d9" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
