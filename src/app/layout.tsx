import localFont from "next/font/local";
import Script from "next/script";

import type { Metadata } from "next";
import "@/app/globals.css";

import Layout from "@/components/RootLayout";

import FinderProvider from "@/providers/FinderProvider";
import FullscreenProvider from "@/providers/FullscreenProvider";
import LaunchpadProvider from "@/providers/LaunchpadProvider";
import StartUpProvider from "@/providers/StartupProvider";
import ToastProvider from "@/providers/ToastProvider";
import WallpaperProvider from "@/providers/WallpaperProvider";

const SCRIPT_SRC = process.env.SCRIPT_SRC;
const WEBSITE_ID = process.env.WEBSITE_ID;

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

const Menlo = localFont({
  src: "../../public/fonts/Menlo-Regular.ttf",
  weight: "normal",
  style: "normal",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ajinkya Palaskar | Software Engineer",
  description:
    "I'm a software engineer from India. I love to build things from scratch and learn new stuff. This is my macOS themed portfolio.",
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
              <StartUpProvider>
                <ToastProvider>
                  <LaunchpadProvider>
                    <Layout>{children}</Layout>
                  </LaunchpadProvider>
                </ToastProvider>
              </StartUpProvider>
            </WallpaperProvider>
          </FullscreenProvider>
        </FinderProvider>

        <Script src={SCRIPT_SRC} data-website-id={WEBSITE_ID} />
      </body>
    </html>
  );
}
