import { CSSProperties } from "react";

const maximizedStyles: CSSProperties = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
};

const normalStyles: CSSProperties = {
  position: "absolute",
  width: "50%",
  height: "50%",
};

const minimizedStyles: CSSProperties = {
  position: "fixed",
  width: 0,
  height: 0,
  bottom: 0,
  right: 0,
};

export const getStyles = (
  status: "minimized" | "maximized" | "normal",
  offset: number = 0,
  styles?: {
    transform?: string;
    touchAction: string;
  },
  isMobile?: boolean,
) => {
  switch (status) {
    case "maximized":
      return maximizedStyles;

    case "minimized":
      return {
        ...minimizedStyles,
        left: isMobile ? 0 : "auto",
        right: isMobile ? "auto" : 0,
      };

    default:
      return {
        ...normalStyles,
        ...styles,
        marginLeft: offset,
        marginTop: offset,
        width: isMobile ? "75%" : normalStyles.width,
        height: isMobile ? "40%" : normalStyles.height,
      };
  }
};
