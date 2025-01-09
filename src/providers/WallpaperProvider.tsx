"use client";

import React, { useEffect, useState } from "react";

const DEFAULT_WALLPAPER_PATH = "/wallpapers/4.png";

interface WallpaperContextType {
  wallpaperPath: string;
  setWallpaper: (path: string) => void;
}

export const WallpaperContext = React.createContext<WallpaperContextType>({
  wallpaperPath: DEFAULT_WALLPAPER_PATH,
  setWallpaper: () => {},
});

type Props = {
  children: React.ReactNode;
};

const WallpaperProvider = ({ children }: Props) => {
  const [wallpaperPath, setWallpaperPath] = useState<string>(
    DEFAULT_WALLPAPER_PATH,
  );

  const setWallpaper = (path: string) => {
    localStorage?.setItem("wallpaper", path);
    setWallpaperPath(path);
  };

  useEffect(() => {
    const savedWallpaper = localStorage?.getItem("wallpaper");

    if (savedWallpaper) {
      setWallpaperPath(savedWallpaper);
      document.body.classList.remove("initial-bg");
    }
  }, []);

  return (
    <WallpaperContext.Provider value={{ wallpaperPath, setWallpaper }}>
      {children}
    </WallpaperContext.Provider>
  );
};

export default WallpaperProvider;
