import localFont from "next/font/local";

import type { Metadata } from "next";
import "@/app/globals.css";

import Dock from "@/components/Dock";
import Menubar from "@/components/Menubar";

import FinderProvider from "@/providers/FinderProvider";
import FullscreenProvider from "@/providers/FullscreenProvider";
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
        className={`${SFPro.className} initial-bg flex flex-col antialiased`}
      >
        <FinderProvider>
          <FullscreenProvider>
            <WallpaperProvider>
              <Menubar />

              {children}

              <Dock />
            </WallpaperProvider>
          </FullscreenProvider>
        </FinderProvider>
      </body>
    </html>
  );
}
