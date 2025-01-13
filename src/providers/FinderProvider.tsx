"use client";

import React, { createContext, useReducer } from "react";

import { v4 as uuid } from "uuid";

export type FolderType =
  | "About"
  | "Experience"
  | "Projects"
  | "Education"
  | "Desktop"
  | "Features";

export enum WindowStatus {
  Minimized = "minimized",
  Maximized = "maximized",
  Normal = "normal",
}

type Type = "Finder" | "TextEditor" | "Mail";

export type Window = {
  id: string;
  section: string;
  folder: FolderType;
  status: WindowStatus;
  history: { section: string; folder: FolderType }[];
  currentIndex: number;
  type: Type;
  position: { x: number; y: number };
  zIndex: number;
};

type Action =
  | {
      type: "OPEN_WINDOW";
      payload: {
        section: string;
        folder: FolderType;
        type: Type;
      };
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
  | { type: "NAVIGATE_FORWARD"; payload: { id: string } }
  | {
      type: "SET_POSITION";
      payload: { id: string; position: { x: number; y: number } };
    }
  | { type: "FOCUS_WINDOW"; payload: { id: string } };

const windowReducer = (state: Window[], action: Action) => {
  switch (action.type) {
    case "OPEN_WINDOW": {
      const { section, folder, type } = action.payload;

      const window = state.find(
        (window) =>
          window.section === section &&
          window.folder === folder &&
          window.type === type,
      );

      if (window) {
        if (window.status === WindowStatus.Minimized) {
          return state.map((window) => {
            if (
              window.section === section &&
              window.folder === folder &&
              window.type === type
            ) {
              return { ...window, status: WindowStatus.Normal };
            }

            return window;
          });
        }

        return state;
      }

      const maxZIndex = Math.max(29, ...state.map((win) => win.zIndex));

      return [
        ...state,
        {
          id: uuid(),
          section,
          folder,
          status: WindowStatus.Normal,
          history: [{ section, folder }],
          currentIndex: 0,
          type: action.payload.type,
          position: { x: 0, y: 0 },
          zIndex: maxZIndex + 1,
        },
      ];
    }

    case "CLOSE_WINDOW": {
      return state.filter((window) => window.id !== action.payload.id);
    }

    case "MINIMIZE_WINDOW": {
      return state.map((window) => {
        if (window.id === action.payload.id) {
          return {
            ...window,
            status: WindowStatus.Minimized,
          };
        }

        return window;
      });
    }

    case "MAXIMIZE_WINDOW": {
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
    }

    case "CHANGE_SECTION": {
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
    }

    case "NAVIGATE_BACK": {
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
    }

    case "NAVIGATE_FORWARD": {
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
    }

    case "SET_POSITION": {
      return state.map((window) => {
        if (window.id === action.payload.id) {
          return {
            ...window,
            position: action.payload.position,
          };
        }

        return window;
      });
    }

    case "FOCUS_WINDOW": {
      const maxZIndex = Math.max(29, ...state.map((win) => win.zIndex));

      return state.map((win) =>
        win.id === action.payload.id ? { ...win, zIndex: maxZIndex + 1 } : win,
      );
    }

    default: {
      return state;
    }
  }
};

export const FinderContext = createContext<{
  windows: Window[];
  isAnyWindowMaximized: boolean;
  openWindow: (section: string, folder: FolderType, type: Type) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  changeSection: (id: string, section: string, folder: FolderType) => void;
  navigateBack: (id: string) => void;
  navigateForward: (id: string) => void;
  setPosition: (id: string, position: { x: number; y: number }) => void;
  focusWindow: (id: string) => void;
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
  setPosition: () => {},
  focusWindow: () => {},
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

  const openWindow = (section: string, folder: FolderType, type: Type) => {
    dispatch({ type: "OPEN_WINDOW", payload: { section, folder, type } });
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

  const setPosition = (id: string, position: { x: number; y: number }) => {
    dispatch({ type: "SET_POSITION", payload: { id, position } });
  };

  const focusWindow = (id: string) => {
    dispatch({ type: "FOCUS_WINDOW", payload: { id } });
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
        setPosition,
        focusWindow,
      }}
    >
      {children}
    </FinderContext.Provider>
  );
};

export default FinderProvider;
