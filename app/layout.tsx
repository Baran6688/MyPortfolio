import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic"],
});
export const metadata: Metadata = {
  title: "Barham Khalid",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`selection:bg-primary/10 ${raleway.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex justify-start">
              <Sidebar />
              {children}
              <Toaster />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
