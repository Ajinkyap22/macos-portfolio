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
};

/*
Cases:
Open:
- If a window with the same section and folder is open: if status is minimized, change status to normal. If status is normal, do nothing.
- If a window with the same section and folder is not open: open a new window with the section and folder.

Close:
- Use id to close window. Because if 2 windows have the same section and folder, we need to close the correct one.

Minimize:
- Use id to minimize window.

Maximize:
- Use id to maximize window.

Change Section:
- Use id to change section.
*/

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
    };

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
          return {
            ...window,
            section: action.payload.section,
            folder: action.payload.folder,
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
}>({
  windows: [],
  isAnyWindowMaximized: false,
  openWindow: () => {},
  closeWindow: () => {},
  minimizeWindow: () => {},
  maximizeWindow: () => {},
  changeSection: () => {},
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
      }}
    >
      {children}
    </FinderContext.Provider>
  );
};

export default FinderProvider;
