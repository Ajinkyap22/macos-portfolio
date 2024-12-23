"use client";

import React, { createContext, useReducer } from "react";

import { v4 as uuid } from "uuid";

export type FolderType =
  | "About"
  | "Experience"
  | "Projects"
  | "Education"
  | "Desktop";

export enum WindowStatus {
  Minimized = "minimized",
  Maximized = "maximized",
  Normal = "normal",
}

export type Window = {
  id: string;
  section: string;
  folder: FolderType;
  status: WindowStatus;
  history: { section: string; folder: FolderType }[];
  currentIndex: number;
};

type Action =
  | {
      type: "OPEN_WINDOW";
      payload: { section: string; folder: FolderType };
    }
  | {
      type: "CLOSE_WINDOW";
      payload: {
        id: string;
      };
    }
  | {
      type: "MINIMIZE_WINDOW";
      payload: {
        id: string;
      };
    }
  | {
      type: "MAXIMIZE_WINDOW";
      payload: {
        id: string;
      };
    }
  | {
      type: "CHANGE_SECTION";
      payload: {
        id: string;
        section: string;
        folder: FolderType;
      };
    }
  | { type: "NAVIGATE_BACK"; payload: { id: string } }
  | { type: "NAVIGATE_FORWARD"; payload: { id: string } };

const windowReducer = (state: Window[], action: Action) => {
  switch (action.type) {
    case "OPEN_WINDOW":
      const { section, folder } = action.payload;

      const window = state.find(
        (window) => window.section === section && window.folder === folder,
      );

      if (window) {
        if (window.status === WindowStatus.Minimized) {
          return state.map((window) => {
            if (window.section === section && window.folder === folder) {
              return { ...window, status: WindowStatus.Normal };
            }

            return window;
          });
        }

        return state;
      }

      return [
        ...state,
        {
          id: uuid(),
          section,
          folder,
          status: WindowStatus.Normal,
          history: [{ section, folder }],
          currentIndex: 0,
        },
      ];

    case "CLOSE_WINDOW":
      return state.filter((window) => window.id !== action.payload.id);

    case "MINIMIZE_WINDOW":
      return state.map((window) => {
        if (window.id === action.payload.id) {
          return {
            ...window,
            status: WindowStatus.Minimized,
          };
        }

        return window;
      });

    case "MAXIMIZE_WINDOW":
      return state.map((window) => {
        if (window.id === action.payload.id) {
          return {
            ...window,
            status:
              window.status === WindowStatus.Maximized
                ? WindowStatus.Normal
                : WindowStatus.Maximized,
          };
        }

        return window;
      });

    case "CHANGE_SECTION":
      return state.map((window) => {
        if (window.id === action.payload.id) {
          const newHistory = window.history.slice(0, window.currentIndex + 1);
          newHistory.push({
            section: action.payload.section,
            folder: action.payload.folder,
          });

          return {
            ...window,
            section: action.payload.section,
            folder: action.payload.folder,
            history: newHistory,
            currentIndex: newHistory.length - 1,
          };
        }

        return window;
      });

    case "NAVIGATE_BACK":
      return state.map((window) => {
        if (window.id === action.payload.id && window.currentIndex > 0) {
          const prevState = window.history[window.currentIndex - 1];

          return {
            ...window,
            section: prevState.section,
            folder: prevState.folder,
            currentIndex: window.currentIndex - 1,
          };
        }
        return window;
      });

    case "NAVIGATE_FORWARD":
      return state.map((window) => {
        if (
          window.id === action.payload.id &&
          window.currentIndex < window.history.length - 1
        ) {
          const nextState = window.history[window.currentIndex + 1];

          return {
            ...window,
            section: nextState.section,
            folder: nextState.folder,
            currentIndex: window.currentIndex + 1,
          };
        }
        return window;
      });

    default:
      return state;
  }
};

export const FinderContext = createContext<{
  windows: Window[];
  isAnyWindowMaximized: boolean;
  openWindow: (section: string, folder: FolderType) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  changeSection: (id: string, section: string, folder: FolderType) => void;
  navigateBack: (id: string) => void;
  navigateForward: (id: string) => void;
}>({
  windows: [],
  isAnyWindowMaximized: false,
  openWindow: () => {},
  closeWindow: () => {},
  minimizeWindow: () => {},
  maximizeWindow: () => {},
  changeSection: () => {},
  navigateBack: () => {},
  navigateForward: () => {},
});

type Props = {
  children: React.ReactNode;
};

const FinderProvider = ({ children }: Props) => {
  const [windows, dispatch] = useReducer(windowReducer, []);

  // check if any of the windows are maximized
  const isAnyWindowMaximized = windows.some(
    (window) => window.status === WindowStatus.Maximized,
  );

  const openWindow = (section: string, folder: FolderType) => {
    dispatch({ type: "OPEN_WINDOW", payload: { section, folder } });
  };

  const closeWindow = (id: string) => {
    dispatch({ type: "CLOSE_WINDOW", payload: { id } });
  };

  const minimizeWindow = (id: string) => {
    dispatch({ type: "MINIMIZE_WINDOW", payload: { id } });
  };

  const maximizeWindow = (id: string) => {
    dispatch({ type: "MAXIMIZE_WINDOW", payload: { id } });
  };

  const changeSection = (id: string, section: string, folder: FolderType) => {
    dispatch({ type: "CHANGE_SECTION", payload: { id, section, folder } });
  };

  const navigateBack = (id: string) => {
    dispatch({ type: "NAVIGATE_BACK", payload: { id } });
  };

  const navigateForward = (id: string) => {
    dispatch({ type: "NAVIGATE_FORWARD", payload: { id } });
  };

  return (
    <FinderContext.Provider
      value={{
        windows,
        isAnyWindowMaximized,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        changeSection,
        navigateBack,
        navigateForward,
      }}
    >
      {children}
    </FinderContext.Provider>
  );
};

export default FinderProvider;
