// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// JETBRAINS font
import { montserrat } from "@/font/montserrat";

// Utils
import NextTopLoader from "nextjs-toploader";

// Global styles
import "./../styles/globals.css";

// Metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://mydevnotes-chi.vercel.app" ?? "http://localhost:3000"
  ),
  title: "My Dev Notes | Home",
  description:
    "Welcome where tech meets curiosity. Quick reads on web development, fun facts, history, tips, and more.",
  openGraph: {
    title: "My Dev Notes | Home",
    description:
      "Welcome where tech meets curiosity. Quick reads on web development, fun facts, history, tips, and more.",
    images: "/app/opengraph-image.png",
  },
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
      <div className="fixed top-0 bottom-0 z-[-2] min-h-screen w-full lg:bg-radial-gradient-desktop"></div>
      <body className={`${montserrat.className} font-montserrat`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen py-6 m-auto container max-w-6xl">
            <NextTopLoader color="#6d28d9" />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
