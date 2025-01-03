import localFont from "next/font/local";

import type { Metadata } from "next";
import "@/app/globals.css";

import Dock from "@/components/Dock";
import Menubar from "@/components/Menubar";

import FinderProvider from "@/providers/FinderProvider";
import FullscreenProvider from "@/providers/FullscreenProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import WallpaperProvider from "@/providers/WallpaperProvider";

const SFPro = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/SFProDisplay-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/fonts/SFProDisplay-Semibold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../public/fonts/SFProDisplay-Bold1.woff2",
      style: "normal",
      weight: "700",
    },
  ],
});

export const Menlo = localFont({
  src: "../../public/fonts/Menlo-Regular.ttf",
  weight: "normal",
  style: "normal",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${SFPro.className} ${Menlo.variable} initial-bg overflow-hidden antialiased`}
      >
        <FinderProvider>
          <FullscreenProvider>
            <WallpaperProvider>
              <ToastProvider>
                <div className="flex h-full flex-col">
                  <Menubar />

                  {children}

                  <Dock />
                </div>
              </ToastProvider>
            </WallpaperProvider>
          </FullscreenProvider>
        </FinderProvider>
      </body>
    </html>
  );
}
