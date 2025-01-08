"use client";

import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const WallpaperProvider = ({ children }: Props) => {
  useEffect(() => {
    const savedWallpaper = localStorage?.getItem("wallpaper");

    if (savedWallpaper) {
      document.body.style.backgroundImage = `url(${savedWallpaper})`;
      document.body.classList.remove("initial-bg");
    }
  }, []);

  return <>{children}</>;
};

export default WallpaperProvider;
