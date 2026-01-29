import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Wakil - Software Engineer",
  description: "Wakil's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} antialiased`}
    >
      <body>
        <Navbar />
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full flex flex-col max-h-[calc(100vh-110px)] relative overflow-y-auto bg-green-500">
            <div className="sticky top-0">
              <SidebarTrigger />
            </div>
            <div className="p-4 flex-1">{children}</div>
          </main>
        </SidebarProvider>
        <Footer />
      </body>
    </html>
  );
}
